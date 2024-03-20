from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests
import boto3
import botocore.exceptions
import together
import pickle  # For serialization
from typing import List
from dotenv import load_dotenv
import os
from datetime import datetime

def configure():
    load_dotenv()
configure()

together.api_key =  os.getenv("TOGETHER_API_KEY")

aws_access_key_id = os.getenv("AWS_ACCESS_KEY_ID")
aws_secret_access_key = os.getenv("AWS_SECRET_ACCESS_KEY")

s3_client = boto3.client(
    's3',
    region_name='us-east-2',
    aws_access_key_id=aws_access_key_id,
    aws_secret_access_key=aws_secret_access_key
)


client = together.Together()

app = FastAPI()
#Setting up S3 bucket 
bucket = 'arthasai'


class ChatInput(BaseModel):
    text: str


#Together Ai code to grab text and embed it
def get_embeddings(texts: List[str], model: str) -> List[List[float]]:
    texts = [text.replace("\n", " ") for text in texts]
    outputs = client.embeddings.create(input = texts, model=model)
    return [outputs.data[i].embedding for i in range(len(texts))]

def serialize_embeddings(embeddings):
    serialized_embeddings = pickle.dumps(embeddings)
    return serialized_embeddings

def save_to_storage(user_id: str,  paper_id: str, data: dict):
    current_timestamp = datetime.now().strftime("%Y%m%d%H%M%S")  # Format: YYYYMMDDHHMMSS
    key = f"{user_id}-{paper_id}-{current_timestamp}-context.pkl"

    serialized_data = pickle.dumps(data)
    try:
        s3_client.put_object(Bucket=bucket, Key=key, Body=serialized_data)
    except botocore.exceptions.ClientError as e:
        #handle the exception accordingly
        raise HTTPException(status_code=500, detail=str(e))
    
def save_embeddings_to_s3(user_id: str, paper_id: str, embeddings: List[List[float]]):
    key = f"{user_id}-{paper_id}-embeddings.pkl"
    serialized_data = pickle.dumps(embeddings)  # Serialize embeddings directly here
    try:
        s3_client.put_object(Bucket=bucket, Key=key, Body=serialized_data)
    except botocore.exceptions.ClientError as e:
        raise HTTPException(status_code=500, detail=str(e))

def load_from_storage(user_id: str,  paper_id: str) -> dict:
    prefix = f"{user_id}-{paper_id}-"
    response = s3_client.list_objects_v2(Bucket=bucket, Prefix=prefix)

    # Extracting keys and sorting them to find the most recent
    keys = [obj['Key'] for obj in response.get('Contents', [])]
    keys.sort(reverse=True)  # Assuming the most recent object is desired

    if keys:
        try:
            response = s3_client.get_object(Bucket=bucket, Key=keys[0])  # Most recent object
            serialized_data = response['Body'].read()
            return pickle.loads(serialized_data)
        except botocore.exceptions.ClientError as e:
            raise HTTPException(status_code=500, detail=str(e))
    else:
        raise HTTPException(status_code=404, detail="No data found")
    
def load_embeddings_from_s3(user_id: str, paper_id: str) -> List[List[float]]:
    key = f"{user_id}-{paper_id}-embeddings.pkl"
    try:
        response = s3_client.get_object(Bucket=bucket, Key=key)
        serialized_data = response['Body'].read()
        embeddings = pickle.loads(serialized_data)  # Deserialize
        return embeddings
    except botocore.exceptions.ClientError as e:
        raise HTTPException(status_code=404, detail="Embeddings not found")

@app.get("/")
def search_results():
    return {"Homepage": 
            "use /search to search for papers, /upload to upload a paper, /chat to chat with a bot, /graph to get a graph of the data."}

@app.post("/upload")
def upload_paper():
    return {"Upload": "POST Request"}

@app.get("/chat")
def chat():
    return {"Chat": "GET Request"}

@app.post("/chat/{user_id}/{paper_id}")
def chat(user_id: str, paper_id: str, chat_input: BaseModel):
    #load existing context, if any
    try:
        context = load_from_storage(user_id, paper_id)
    except HTTPException as e:
        context = {'chat_history': []}

    
    #updating context with new chat input and embeddings
    
    #Note: You'd also want to store the chat output here
    new_chat_input = chat_input.text
    embeddings = get_embeddings([new_chat_input], model='togethercomputer/m2-bert-80M-8k-retrieval')
    context['chat_history'].append({'input':new_chat_input, 'embedding': embeddings})
    #save updated context

    concatenated_prompts = "\n".join([entry['input'] for entry in context['chat_history']]) + "\n" + new_chat_input

    save_to_storage(user_id, paper_id, context)

        # Here you would integrate with your AI model to get a response, using the embeddings as needed
    ai_response = "Response from the AI model"  # Placeholder for AI model integration


    return {"Chat": ai_response}


@app.get("/graph")
def get_graph():
    return {"Graph": "GET Request"}


# Example data to save
data_to_save = {'example': 'This is a test'}

# Test user and paper IDs
test_user_id = 'user123'
test_paper_id = 'paperABC'

# Save the data
save_to_storage(test_user_id, test_paper_id, data_to_save)

# Try to load the most recent data
try:
    loaded_data = load_from_storage(test_user_id, test_paper_id)
    print("Loaded Data:", loaded_data)
except HTTPException as e:
    print(f"Failed to load data: {e.detail}")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)


# A simple function to add two numbers
def add_numbers(a, b):
    return a + b