
from typing import List
import together
from dotenv import load_dotenv
import os
from config import settings
# Replace 'your_access_key_id' and 'your_secret_access_key' with your actual AWS credentials
def configure():
    load_dotenv()
configure()

together.api_key = os.getenv("TOGETHER_API_KEY")
client = together.Together()

def get_embeddings(texts: List[str], model: str) -> List[List[float]]:
    texts = [text.replace("\n", " ") for text in texts]
    outputs = client.embeddings.create(input = texts, model=model)
    return [outputs.data[i].embedding for i in range(len(texts))]

input_texts = ['Our solar system orbits the Milky Way galaxy at about 515,000 mph']
embeddings = get_embeddings(input_texts, model='togethercomputer/m2-bert-80M-8k-retrieval')

print(embeddings)
# [[0.13437459, 0.09866201, ..., -0.20736569]]

