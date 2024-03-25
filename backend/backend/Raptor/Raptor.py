"""
We will handle the PDF to Markdown conversion in a different file.

This file will be used to handle the conversion of Markdown to the
RAPTOR embedding representation. This will be done by using:

- llama-index-packs-raptor

The RAPTOR embedding representation will be stored in Neo4j as a tree,
and will be a relationship between the node of the paper and the root of the tree.
"""
from typing import TextIO
import os
import dotenv
import json
import chromadb
from pathlib import Path
import nest_asyncio
from llama_index.core import SimpleDirectoryReader
from llama_index.core.node_parser import MarkdownNodeParser
from llama_index.core.node_parser import SentenceSplitter
from llama_index.readers.file import FlatReader
from llama_index.llms.openai import OpenAI
from llama_index.embeddings.openai import OpenAIEmbedding
from llama_index.vector_stores.chroma import ChromaVectorStore
from llama_index.packs.raptor import RaptorPack
from llama_index.packs.raptor import RaptorRetriever
from llama_index.core.query_engine import RetrieverQueryEngine
from llama_index.core.ingestion import IngestionPipeline
from llama_index.core import Document

dotenv.load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

import openai
openai.api_key = OPENAI_API_KEY
nest_asyncio.apply()

def markdown_to_raptor(markdown: TextIO) -> str:
    """
    Convert the given markdown to the RAPTOR embedding representation.

    Args:
        markdown (str): The markdown to convert.

    Returns:
        str: The RAPTOR embedding representation.
    """
    documents = SimpleDirectoryReader(input_files=["./Nougat_1_copy.md"]).load_data()
    # md_doc = FlatReader().load_data(Path("./Nougat_1_copy.md"))
    markdown_parser = MarkdownNodeParser()
    # md_nodes = markdown_parser.get_nodes_from_documents(md_doc)    # Write the md_nodes to a file
    split_parser = SentenceSplitter(chunk_size=12, chunk_overlap=1)
    # split_nodes = split_parser.get_nodes_from_documents(md_nodes)

    # use in a pipeline
    pipeline = IngestionPipeline(
        transformations=[
            # markdown_parser,
            split_parser,
            # OpenAIEmbedding(),
        ],
    )

    nodes = pipeline.run(documents=documents)

    with open("md_nodes_split.json", "w") as f:
        nodes_json = [node.to_dict() for node in nodes]
        json.dump(nodes_json, f)
    
    # client = chromadb.PersistentClient(path="./raptor_db")
    # collection = client.get_or_create_collection("raptor")

    # vector_store = ChromaVectorStore(chroma_collection=collection)

    # raptor_pack = RaptorPack(
    #     md_doc,
    #     embed_model=OpenAIEmbedding(
    #         model="text-embedding-3-small"
    #     ),
    #     llm=OpenAI(model="gpt-3.5-turbo", temperature=0.1), # used for generating summaries
    #     vector_store=vector_store, # used for storage
    #     similarity_top_k=2, # top-k for each layer, or overall top-k for collapsed
    #     mode="collapsed",
    #     transformations=[
    #        markdown_parser,
    #        SentenceSplitter(
    #             # split_on="\]",
    #             chunk_size=128,
    #             chunk_overlap=16,
    #        ),
    #     ], # transformations applied for ingestion
    # )

    # nodes_collapsed = raptor_pack.run("What is equation 10 in the paper and what is it used for?", mode="collapsed")
    # print(len(nodes_collapsed))
    # print(nodes_collapsed[0].text)
    pass


def test():
    client = chromadb.PersistentClient(path="./raptor_db")
    collection = client.get_or_create_collection("raptor")

    vector_store = ChromaVectorStore(chroma_collection=collection)
    retriever_tree = RaptorRetriever(
        [],
        embed_model=OpenAIEmbedding(
            model="text-embedding-3-small"
        ),
        llm=OpenAI(model="gpt-3.5-turbo", temperature=0.1), # used for generating summaries
        vector_store=vector_store, # used for storage
        similarity_top_k=2, # top-k for each layer, or overall top-k for collapsed
        mode="tree_traversal",
    )
    query_engine = RetrieverQueryEngine.from_args(
        retriever_tree, llm=OpenAI(model="gpt-3.5-turbo", temperature=0.1)
)

    prompt = input("Enter the prompt: ")
    while (prompt != "exit"):
        response = query_engine.query(prompt)
        print(response)
        prompt = input("Enter the prompt: ")
    pass



if __name__ == "__main__":
    with open("./Nougat_1.mmd", "r") as f:
        markdown_to_raptor(f)
    # test()
    pass