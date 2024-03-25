import sys
from colbert.infra import Run, RunConfig, ColBERTConfig
from colbert import Indexer, Searcher
from colbert.data import Queries, Collection
from typing_extensions import *
from random import randint
import torch
from os import *

# Takes about 6 minutes on GPU to run for 10,000 passages (chunks of text)
def create_index_from_papers(papers: List[str], name=None, experiment_name="default") -> str:
    """
    Creates a compressed index object from collection of papers using ColBERT
    Indexer. Returns the absolute filepath to the object in memory to be searched
    using the Searcher.

    args:
        papers: Text. Just. Text. (List[str])
    """

    nbits = 2  # encode each dimension with 2 bits
    doc_maxlen = 300 # truncate passages at 300 tokens
    
    
    num_papers = len(papers)
    
    if not name:
        index_name = f'{num_papers}_{doc_maxlen}.{nbits}bits'
    else:
        index_name = f'{name}_{doc_maxlen}.{nbits}bits'

    checkpoint = 'checkpoints/colbertv2.0'

    if torch.cuda.is_available():
        with Run().context(RunConfig(nranks=1, experiment=experiment_name)): 
            config = ColBERTConfig(doc_maxlen=doc_maxlen, nbits=nbits, kmeans_niters=4)
                                                
            indexer = Indexer(checkpoint=checkpoint, config=config)
            indexer.index(name=index_name, collection=papers, overwrite=True)
    else:
        # CPU-Only available
        with Run().context(RunConfig(experiment='default')): 
            config = ColBERTConfig(doc_maxlen=doc_maxlen, nbits=nbits, kmeans_niters=4)
                                                
            indexer = Indexer(checkpoint=checkpoint, config=config)
            indexer.index(name=index_name, collection=papers, overwrite=True)
    # filepath 
    return index_name


#TODO: Discover how to make Searchers production-ready given that they're specific to Indexers
# The caveat is that every new paper requires a re-indexing, so we might as well just index everything 

def generate_searcher(index_name: str, papers: List[str], experiment_name="default") -> Searcher:
    """
    Creates searcher object that is tied to the Indexer 
    Configurations located in https://github.com/stanford-futuredata/ColBERT

    args:
        index_name: location of the Indexer 
        papers: List[str]

    """
    with Run().context(RunConfig(experiment=experiment_name)):
        searcher = Searcher(index=index_name, collection=papers)

    return searcher

def retrieve_top_k(searcher: Searcher, query: str, k: int) -> Tuple[List[int], List[int], List[float]]:
    """
    Retrieves top k passage (id's) 

    Returns tuple of iterators -> [(passage_id, passage_rank, passage_score)]
    Query passages with searcher.collection[passage_id]

    args:
        searcher: searcher object generated (tied to the index)
        query: user query
        k: number of results retrieved
    """
    results = searcher.search(query, k=3)

    return zip(*results)


# Example provided from GitHub Notebook
def _run_example_retrieval():
    from datasets import load_dataset

    MAX_DOCUMENTS = 10000

    dataset = 'lifestyle'
    datasplit = 'dev'

    collection_dataset = load_dataset("colbertv2/lotte_passages", dataset)
    collection = [x['text'] for x in collection_dataset[datasplit + '_collection']]

    # Collecting relevant queries 
    queries_dataset = load_dataset("colbertv2/lotte", dataset)
    queries = [x['query'] for x in queries_dataset['search_' + datasplit]]

    # Filtering to only 10,000 passages and filtering queries accordingly
    answer_pids = [x['answers']['answer_pids'] for x in queries_dataset['search_' + datasplit]]
    filtered_queries = [q for q, apids in zip(queries, answer_pids) if any(x < MAX_DOCUMENTS for x in apids)]

    experiment_name = "example_searcher"

    index_name = create_index_from_papers(papers=collection[:MAX_DOCUMENTS],  name="example", experiment_name=experiment_name)
    
    searcher = generate_searcher(index_name, collection[:MAX_DOCUMENTS], experiment_name=experiment_name)

    # Random query
    query = filtered_queries[randint(0, len(filtered_queries))]

    print(f'{query=}')

    # Retrieving top 3 results for query
    results = retrieve_top_k(searcher=searcher, query=query, k=3)

    for passage_id, passage_rank, passage_score in results:
        print(f'{passage_id=}, {passage_rank=}, {passage_score=}')
        print(collection[passage_id])

    return results

if __name__ == '__main__':
    if any(arg == "--example" for arg in sys.argv):
        _run_example_retrieval()

    print("Nothing implemented yet. Run python colbert_search.py --example to see an example.")
    sys.exit(0)
        

    





