# Installing ColBERT Locally

Run the following (include `_cpu` if you're in a CPU-only environment)
```
conda env create -f conda_env[_cpu].yml
conda activate colbert
```
Install ColBERT

```
pip install colbert-ai\[torch,faiss-gpu\]
```

Additional Requirements

```
pip install datasets transformers
pip install -U torch
```

Running an Example of ColBERT Search (to test dependencies)

```
python colbert_search.py --example
```

![Running Example of ColBERT](image-1.png)
