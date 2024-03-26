import re
import markdown
from mdx_math import MathExtension

# code to be able to find latex in markdown and render it, not 100% sure if it'll be needed if we implement pandoc in the backend

def render_markdown_with_latex(markdown_text):
    # render markdown 
    rendered_markdown = markdown.markdown(markdown_text, extensions=['mdx_math'])

    # find latex
    latex_patterns = [
        r'\\begin{table}.*?\\end{table}', # table conversion
        r'\\begin{matrix}.*?\\end{matrix}', # matrix conversion
        r'\\begin{equation}.*?\\end{equation}', # equation conversion
        r'\\\(.*?\\\)' # references
    ]

    for pattern in latex_patterns:
        latex_matches = re.findall(pattern, rendered_markdown, re.DOTALL)
        for match in latex_matches:
            if match:
                rendered_latex = markdown.markdown(match, extensions=[MathExtension()])
                rendered_markdown = rendered_markdown.replace(match, rendered_latex)

    return rendered_markdown


markdown_text = r'''

This is a paragraph with inline math: $\frac{1}{2}$.

$$
\begin{equation}
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\end{equation}
$$

| Column 1 | Column 2 |
|----------|----------|
| Row 1, Cell 1 | Row 1, Cell 2 |
| Row 2, Cell 1 | Row 2, Cell 2 |
'''

rendered_html = render_markdown_with_latex(markdown_text)
print(rendered_html)