import re


# code to be able to find latex in markdown and render it, not 100% sure if it'll be needed if we implement pandoc in the backend

def findLatex():

    # find latex
    latex_patterns = [
        r'\\begin{table}.*?\\end{table}', # find tables
        r'\\begin{matrix}.*?\\end{matrix}', # find matrix
        r'\\begin{equation}.*?\\end{equation}', # find equations
        r'\\\(.*?\\\)' # find latex inside regular text \( \)
    ]

    for pattern in latex_patterns:
        latex_matches = re.findall(pattern, re.DOTALL)

    return latex_matches


latex_matches = findLatex()
print(latex_matches)