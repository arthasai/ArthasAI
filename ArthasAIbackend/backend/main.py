from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import boto3
import together
import pickle  # For serialization
from dotenv import load_dotenv
from storage import save_to_storage, load_from_storage, load_embeddings_from_s3, save_embeddings_to_s3
from config import Settings
import os
from typing import List
from dependencies import get_s3_client, get_together_client
def configure():
    load_dotenv()

configure()
 
settings = Settings()

together_api_key = get_together_client
aws_access_key_id = settings.aws_access_key_id
aws_secret_access_key = settings.aws_secret_access_key
s3_client = get_s3_client()
client = together.Together()

app = FastAPI()

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
def chat(user_id: str, paper_id: str, chat_input: ChatInput):
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
save_to_storage(test_user_id, test_paper_id, data_to_save)  # Pass s3_client here

# Try to load the most recent data
try:
    loaded_data = load_from_storage(test_user_id, test_paper_id)
    print("Loaded Data:", loaded_data)
except HTTPException as e:
    print(f"Failed to load data: {e.detail}")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)


