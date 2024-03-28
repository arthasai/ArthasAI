import {useQuery, QueryClient, QueryClientProvider } from 'react-query';

const ConvertMarkdownToLatexComponent = () => {
  const markdownContent = `
We validated this hypothesis both quantitatively and qualitatively. We present qualitative analysis in appendix G. To quantitatively understand the contribution of the upper-level nodes, we used stories from the QuALITY dataset. The RAPTOR tree is built for each of these stories, as described in Section 3. However, during retrieval, we limit the search to different subsets of layers. For example, we exclusively retrieve from the leaf nodes and each upper layer, as well as from different contiguous subsets of the layers. We show findings specific to one story in Table 8, revealing that a full-tree search, utilizing all layers, outperformed retrieval strategies that focused only on specific layers.

These findings highlight the importance of the full tree structure in RAPTOR. By providing both the original text and higher-level summaries for retrieval, RAPTOR can effectively handle a wider range of questions, from higher-order thematic queries to detail-oriented questions. Detailed results for additional stories and an ablation study on layer contributions can be found in Appendix I.

## 5 Conclusion

In this paper, we have presented RAPTOR, a novel tree-based retrieval system that augments the parametric knowledge of large language models with contextual information at various levels of abstraction. By employing recursive clustering and summarization techniques, RAPTOR creates a hierarchical tree structure that is capable of synthesizing information across various sections of the retrieval corpora. During the query phase, RAPTOR leverages this tree structure for more effective retrieval. Our controlled experiments demonstrated that RAPTOR not only outperforms traditional retrieval methods but also sets new performance benchmarks on several question-answering tasks.

\begin{table}
\begin{tabular}{l c c c} \hline \hline
**Layers Queried / Start Layer** & **Layer 0 (Leaf Nodes)** & **Layer 1** & **Layer 2** \\ \hline
1 layer & 57.9 & 57.8 & 57.9 \\
2 layers & - & 52.6 & 63.15 \\
3 layers & - & - & **73.68** \\ \hline \hline \end{tabular}
\end{table}
Table 8: Performance of RAPTOR when querying different tree layers for Story 1 from the QuALITY dataset. Columns represent different starting points (highest layer) and rows represent different numbers of layers queried.
 `;

 const queryClient = new QueryClient();

 const getConversion = async () => {
  const res = await fetch('api/test/markdownConversion')
  return res.json()
}

async function getConversionData(markdown: any) {
    try{
      const {data, error, isLoading} = useQuery('textConversion', getConversion)
    } catch (error){
      console.error('Error getting data:', error)
    }
  };
}
