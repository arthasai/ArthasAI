import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; 
import { visit } from 'unist-util-visit';


// this shit doesn't work. just pushing to have it just incase

const TextConversion = () => {

  const markdownContent = `
  
  
  Finally, in the NarrativeQA dataset, as presented in Table 6, RAPTOR excels across multiple metrics. For ROUGE-L, it surpasses BM25 and DPR by 7.3 and 2.7 points, respectively. In other metrics like BLEU-1, BLEU-4, and METEOR, RAPTOR outperforms BM25 and DPR by margins ranging from 1.7 to 5.8 and 0.7 to 2.1 points, respectively.
  
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
  `;

  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default TextConversion;