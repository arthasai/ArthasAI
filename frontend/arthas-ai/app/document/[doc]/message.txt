One drawback, however, of the collapsed tree approach is that it requires cosine similarity search to be performed on all nodes in the tree. However, this can be made more efficient with fast \(k\)-nearest neighbor libraries such as FAISS (Johnson et al., 2019).

Overall, given the collapsed tree approach's greater flexibility and its superior performance on the subset of the QASPER dataset, this is the querying approach with which we proceed. Specifically, we use the collapsed tree with 2000 maximum tokens, which approximately equates to retrieving the top-20 nodes. Using a token-based approach ensures the context does not exceed model context constraints as token counts can vary across nodes. For experiments with the UnifiedQA model, we provide 400 tokens of context, as UnifiedQA has a max context length of 512 tokens. We provide the same amount of tokens of context to RAPTOR and to the baselines.

Qualitative StudyWe conduct a qualitative analysis to understand the benefits of RAPTOR's retrieval process compared to Dense Passage Retrieval (DPR) methods. Our study focuses on thematic, multi-hop questions using a 1500-word Cinderella fairytale. As illustrated in Figure 4, RAPTOR's tree-based retrieval allows it to choose nodes from different tree layers, matching the question's detail level. This approach often yields more relevant and comprehensive information for downstream tasks than DPR. For a detailed discussion and examples, including the text retrieved by both RAPTOR and DPR for specific questions, please refer to the appendix G.

## 4 Experiments

DatasetsWe measure RAPTOR's performance across three question-answering datasets: NarrativeQA, QASPER, and QuALITY.

NarrativeQA is a dataset that comprises question-answer pairs based on the full texts of books and movie transcripts, totaling 1,572 documents (Kocisky et al., 2018; Wu et al., 2021). The NarrativeQA-Story task requires a comprehensive understanding of the entire narrative in order to accurately answer its questions, thus testing the model's ability to comprehend longer texts in the literary domain. We measure performance on this dataset using the standard BLEU (B-1, B-4), ROUGE (R-L), and METEOR (M) metrics. Please see appendix H for more details on the NarrativeQA evaluation script used in our experiments.

The QASPER dataset includes 5,049 questions across 1,585 NLP papers, with each question probing for information embedded within the full text (Dasigi et al., 2021). The answer types in QASPER are categorized as Answerable/Unanswerable, Yes/No, Abstractive, and Extractive. Accuracy is measured using standard F1.

Lastly, the QuALITY dataset consists of multiple-choice questions, each accompanied by context passages averaging approximately 5,000 tokens in length (Pang et al., 2022). This dataset calls for reasoning over the entire document for QA tasks, enabling us to measure the performance of our retrieval system on medium-length documents. The dataset includes a challenging subset, QuALITY-HARD, which contains questions that a majority of human annotators answered incorrectly in a speed-setting. We report accuracies for both the entire test set and the HARD subset.

Controlled Baseline ComparisonsWe first present controlled comparisons using the UnifiedQA 3B as the reader, with SBERT (Reimers and Gurevych, 2019), BM25 (Robertson et al., 1995; 2009), and DPR (Karpukhin et al., 2020) as the embedding models with and without the RAPTOR tree structure, on three datasets: QASPER, NarrativeQA, and QuALITY. As shown in Tables 1 and 2,

Figure 3: **Comparison of querying methods. Results on 20 stories from the QASPER dataset using tree traversal with different top-k values, and collapsed tree with different context lengths. Collapsed tree with 2000 tokens produces the best results, so we use this querying strategy for our main results.**

our results demonstrate that RAPTOR, when combined with any retriever, consistently outperforms the respective retriever across all datasets. 2

Footnote 2: For the DPR experiments in Tables 1 and 2, we used the dpr-multiset-base model as opposed to dpr-single-nd-base which was used in rest of the experiments done earlier. This decision was based on the performance observed in Karpukhin et al. (2020), where dpr-multiset-base showed superior results.

Since RAPTOR with SBERT has the best performance, we use it in all subsequent experiments. We now compare RAPTOR with BM25 and DPR, using three different LLMs: GPT-3, GPT-4, and UnifiedQA. As shown in Table 3, RAPTOR consistently outperforms BM25 and DPR across all three Language Models on the QASPER dataset. RAPTOR's F-1 Match scores are 53.1%, 55.7%, and 36.6% when using GPT-3, GPT-4, and UnifiedQA, respectively. These scores surpass DPR by margins of 1.8, 2.7, and 4.5 points, and undo BM25 by 6.5, 5.5, and 10.2 points across the respective LLMs. QASPER requires synthesizing information within NLP papers, so it is unsurprising that RAPTOR's higher-level summary nodes would allow it to outperform methods that can only extract the top-\(k\) most similar raw chunks of text, which may not contain the correct response in isolation.

Likewise, in the QuALITY dataset as shown in Table 4, RAPTOR achieves an accuracy of 62.4%, which is a 2% and 5.1% improvement over DPR and BM25. Similar trends are observed when UnifiedQA is employed, with RAPTOR outperforming DPR and BM25 by 2.7% and 6.7%, respectively.

Finally, in the NarrativeQA dataset, as presented in Table 6, RAPTOR excels across multiple metrics. For ROUGE-L, it surpasses BM25 and DPR by 7.3 and 2.7 points, respectively. In other metrics like BLEU-1, BLEU-4, and METEOR, RAPTOR outperforms BM25 and DPR by margins ranging from 1.7 to 5.8 and 0.7 to 2.1 points, respectively.

\begin{table}
\begin{tabular}{l c c c c} \hline \hline
**Model** & **ROUGE** & **BLEU-1** & **BLEU-4** & **METEOR** \\ \hline
**SBERT with RAPTOR** & **30.87\%** & **23.50\%** & **6.42\%** & **19.20\%** \\ SBERT without RAPTOR & 29.26\% & 22.56\% & 5.95\% & 18.15\% \\
**BM25 with RAPTOR** & **27.93\%** & **21.17\%** & **5.70\%** & **17.03\%** \\ BM25 without RAPTOR & 23.52\% & 17.73\% & 4.65\% & 13.98\% \\
**DPR with RAPTOR** & **30.94\%** & **23.51\%** & **6.45\%** & **19.05\%** \\ DPR without RAPTOR & 29.56\% & 22.84\% & 6.12\% & 18.44\% \\ \hline \hline \end{tabular}
\end{table}
Table 1: **NarrativeQA Performance With + Without RAPTOR:** Performance comparison of various retrieval methods (SBERT, BM25, DPR) with and without RAPTOR on the NarrativeQA dataset, using UnifiedQA-3B as the language model. RAPTOR outperforms baselines of each respective retrieval method.

Figure 4: **Querying Process:** Illustration of how RAPTOR retrieves information for two questions about the Cinderella story: “What is the central theme of the story?” and “How did Cinderella find a happy ending?”. Highlighted nodes indicate RAPTOR’s selections, while arrows point to DPR’s leaf nodes. Notably, RAPTOR’s context often encompasses the information retrieved by DPR, either directly or within higher-layer summaries.

 

**Comparison to State-of-the-art Systems** Building upon our controlled comparisons, we examine RAPTOR's performance relative to other state-of-the-art models. As shown in Table 5, RAPTOR with GPT-4 sets a new benchmark on QASPER, with a 55.7% F-1 score, surpassing the CoLT5 XL's score of 53.9%.

In the QuALITY dataset, as shown in Table 7, RAPTOR paired with GPT-4 sets a new state-of-the-art with an accuracy of 82.6%, surpassing the previous best result of 62.3%. In particular, it outperforms CoLISA by 21.5% on QuALITY-HARD, which represents questions that humans took unusually long to correctly answer, requiring receding parts of the text, difficult reasoning, or both.

For the NarrativeQA dataset, as represented in Table 6, RAPTOR paired with UnifiedQA sets a new state-of-the-art METEOR score. When compared to the recursively summarizing model by Wu et al. (2021), which also employs UnifiedQA, RAPTOR outperforms it on all metrics. While Wu et al. (2021) rely solely on the summary in the top root node of the tree structure, RAPTOR benefits from its intermediate layers and clustering approaches, which allows it to capture a range of information, from general themes to specific details, contributing to its overall strong performance.

### Contribution of the tree structure

We examine the contribution of each layer of nodes to RAPTOR's retrieval capabilities. We hypothesized that upper nodes play a crucial role in handling thematic or multi-hop queries requiring a broader understanding of the text.

\begin{table}
\begin{tabular}{l c c} \hline \hline
**Model** & **GPT-3 Acc.** & **UnifiedQA Acc.** \\ \hline BM25 & 57.3 & 49.9 \\ DPR & 60.4 & 53.9 \\
**RAPTOR** & **62.4** & **56.6** \\ \hline \hline \end{tabular}
\end{table}
Table 4: Comparison of accuracies on the QuALITY dev dataset for two different language models (GPT-3, UnifiedQA 3B) using various retrieval methods. RAPTOR outperforms the baselines of BM25 and DPR by at least 2.0% in accuracy.

\begin{table}
\begin{tabular}{l c c} \hline \hline
**Model** & **Accuracy (QuALITY)** & **Answer F1 (QASPER)** \\ \hline
**SBERT with RAPTOR** & **56.6\%** & **36.70\%** \\ SBERT without RAPTOR & 54.9\% & 36.23\% \\
**BM25 with RAPTOR** & **52.1\%** & **27.00\%** \\ BM25 without RAPTOR & 49.9\% & 26.47\% \\
**DPR with RAPTOR** & **54.7\%** & **32.23\%** \\ DPR without RAPTOR & 53.1\% & 31.70\% \\ \hline \hline \end{tabular}
\end{table}
Table 2: **QuALITY and QASPER Performance With + Without RAPTOR:** Performance comparison across the QuALITY and QASPER datasets of various retrieval methods (SBERT, BM25, DPR) with and without RAPTOR. UnifiedQA-3B is used as the language model. RAPTOR outperforms baselines of each respective retrieval method for both datasets.

\begin{table}
\begin{tabular}{l c c} \hline \hline
**Model** & **Accuracy (QuALITY)** & **Answer F1 (QASPER)** \\ \hline
**SBERT with RAPTOR** & **56.6\%** & **36.70\%** \\ SBERT without RAPTOR & 54.9\% & 36.23\% \\
**BM25 with RAPTOR** & **52.1\%** & **27.00\%** \\ BM25 without RAPTOR & 49.9\% & 26.47\% \\
**DPR with RAPTOR** & **54.7\%** & **32.23\%** \\ DPR without RAPTOR & 53.1\% & 31.70\% \\ \hline \hline \end{tabular}
\end{table}
Table 2: **QuALITY and QASPER Performance With + Without RAPTOR:** Performance comparison across the QuALITY and QASPER datasets of various retrieval methods (SBERT, BM25, DPR) with and without RAPTOR. UnifiedQA-3B is used as the language model. RAPTOR outperforms baselines of each respective retrieval method for both datasets.

\begin{table}
\begin{tabular}{l c c} \hline \hline
**Retriever** & **GPT-3 F-1 Match** & **GPT-4 F-1 Match** & **UnifiedQA F-1 Match** \\ \hline Title + Abstract & 25.2 & 22.2 & 17.5 \\ BM25 & 46.6 & 50.2 & 26.4 \\ DPR & 51.3 & 53.0 & 32.1 \\
**RAPTOR** & **53.1** & **55.7** & **36.6** \\ \hline \hline \end{tabular}
\end{table}
Table 3: Controlled comparison of F-1 scores on the QASPER dataset, using three different language models (GPT-3, GPT-4, UnifiedQA 3B) and various retrieval methods. The column ”Title + Abstract” reflects performance when only the title and abstract of the papers are used for context. RAPTOR outperforms the established baselines BM25 and DPR across all tested language models. Specifically, RAPTOR’s F-1 scores are at least 1.8% points higher than DPR and at least 5.3% points higher than BM25.

We validated this hypothesis both quantitatively and qualitatively. We present qualitative analysis in appendix G. To quantitatively understand the contribution of the upper-level nodes, we used stories from the QuALITY dataset. The RAPTOR tree is built for each of these stories, as described in Section 3. However, during retrieval, we limit the search to different subsets of layers. For example, we exclusively retrieve from the leaf nodes and each upper layer, as well as from different contiguous subsets of the layers. We show findings specific to one story in Table 8, revealing that a full-tree search, utilizing all layers, outperformed retrieval strategies that focused only on specific layers.

These findings highlight the importance of the full tree structure in RAPTOR. By providing both the original text and higher-level summaries for retrieval, RAPTOR can effectively handle a wider range of questions, from higher-order thematic queries to detail-oriented questions. Detailed results for additional stories and an ablation study on layer contributions can be found in Appendix I.

## 5 Conclusion

In this paper, we have presented RAPTOR, a novel tree-based retrieval system that augments the parametric knowledge of large language models with contextual information at various levels of abstraction. By employing recursive clustering and summarization techniques, RAPTOR creates a hierarchical tree structure that is capable of synthesizing information across various sections of the retrieval corpora. During the query phase, RAPTOR leverages this tree structure for more effective retrieval. Our controlled experiments demonstrated that RAPTOR not only outperforms traditional retrieval methods but also sets new performance benchmarks on several question-answering tasks.

\begin{table}
\begin{tabular}{l c c c} \hline \hline
**Model** & **ROUGE-L** & **BLEU-1** & **BLEU-4** & **METEOR** \\ \hline BiDAF (Kosisky et al., 2018) & \(6.2\) & \(5.7\) & \(0.3\) & \(3.7\) \\ BM25 + BERT (Mou et al., 2020) & \(15.5\) & \(14.5\) & \(1.4\) & \(5.0\) \\ Recursively Summarizing Books (Wu et al., 2021) & \(21.6\) & \(22.3\) & \(4.2\) & \(10.6\) \\ Retrieval + Reader (Izacard and Grave, 2022) & **32.0** & **35.3** & **7.5** & \(11.1\) \\
**RAPTOR + UnifiedQA** & 30.8 & 23.5 & 6.4 & **19.1** \\ \hline \hline \end{tabular}
\end{table}
Table 6: Performance comparison on the NarrativeQA dataset across multiple models, focusing on four metrics: ROUGE-L, BLEU-1, BLEU-4, and METEOR. RAPTOR, when paired with UnifiedQA 3B, not only surpasses retrieval methods like BM25 and DPR but also sets a new state-of-the-art in the METEOR metric.

\begin{table}
\begin{tabular}{c c c} \hline \hline \multirow{2}{*}{**Model**} & \multicolumn{2}{c}{**Accuracy**} \\ \cline{2-3}  & **Test Set** & **Hard Subset** \\ \hline Longformer-base (Beltagy et al., 2020) & \(39.5\) & \(35.3\) \\ DPR and DeBERTaV3-large (Pang et al., 2022) & \(55.4\) & \(46.1\) \\ CoLISA (DeBERTaV3-large) (Dong et al., 2023) & \(62.3\) & \(54.7\) \\
**RAPTOR + GPT-4** & **82.6** & **76.2** \\ \hline \hline \end{tabular}
\end{table}
Table 7: Accuracies of the QuALITY dataset on both the overall test set and the more challenging hard subset. GPT-4 with RAPTOR sets a new state-of-the-art.

\begin{table}
\begin{tabular}{l c c c} \hline \hline
**Layers Queried / Start Layer** & **Layer 0 (Leaf Nodes)** & **Layer 1** & **Layer 2** \\ \hline
1 layer & 57.9 & 57.8 & 57.9 \\
2 layers & - & 52.6 & 63.15 \\
3 layers & - & - & **73.68** \\ \hline \hline \end{tabular}
\end{table}
Table 8: Performance of RAPTOR when querying different tree layers for Story 1 from the QuALITY dataset. Columns represent different starting points (highest layer) and rows represent different numbers of layers queried.