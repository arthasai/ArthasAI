import boto3
from fastapi import HTTPException
import pickle
import datetime
import botocore.exceptions
from typing import List
import sys
from pathlib import Path
from dotenv import load_dotenv
import os, sys, inspect

from config import Settings
from dependencies import get_s3_client, get_together_client

def configure():
    load_dotenv()
configure()

settings = Settings()

together_api_key = get_together_client
aws_access_key_id = settings.aws_access_key_id
aws_secret_access_key = settings.aws_secret_access_key
s3_client = get_s3_client()



def save_to_storage(user_id: str, paper_id: str, data: dict):
    """
    Saves the given data to an AWS S3 bucket with a key constructed from the user ID, paper ID, and the current timestamp.

    Parameters:
    - user_id (str): The user's ID.
    - paper_id (str): The paper's ID.
    - data (dict): The data to save.
    - s3_client (boto3.client): The boto3 S3 client instance.

    Raises:
    - HTTPException: If there is an error saving the data to S3.
    """
    current_timestamp = datetime.datetime.now(datetime.timezone.utc)
    key = f"{user_id}-{paper_id}-{current_timestamp}-context.pkl"

    serialized_data = pickle.dumps(data)
    try:
        s3_client.put_object(Bucket=settings.bucket, Key=key, Body=serialized_data)
    except botocore.exceptions.ClientError as e:
        #handle the exception accordingly
        raise HTTPException(status_code=500, detail=str(e))
    
def load_from_storage(user_id: str, paper_id: str) -> dict:
    """
    Loads the most recent data for the given user ID and paper ID from an AWS S3 bucket.

    Parameters:
    - user_id (str): The user's ID.
    - paper_id (str): The paper's ID.
    - s3_client (boto3.client): The boto3 S3 client instance.

    Returns:
    - dict: The most recent data found for the user and paper.

    Raises:
    - HTTPException: If there is an error loading the data from S3 or if no data is found.
    """
        
    prefix = f"{user_id}-{paper_id}-"
    response = s3_client.list_objects_v2(Bucket=settings.bucket, Prefix=prefix)

    # Extracting keys and sorting them to find the most recent
    keys = [obj['Key'] for obj in response.get('Contents', [])]
    keys.sort(reverse=True)  # Assuming the most recent object is desired

    if keys:
        try:
            response = s3_client.get_object(Bucket=settings.bucket, Key=keys[0])  # Most recent object
            serialized_data = response['Body'].read()
            return pickle.loads(serialized_data)
        except botocore.exceptions.ClientError as e:
            raise HTTPException(status_code=500, detail=str(e))
    else:
        raise HTTPException(status_code=404, detail="No data found")
    
def save_embeddings_to_s3(user_id: str, paper_id: str, embeddings: List[List[float]]):
    key = f"{user_id}-{paper_id}-embeddings.pkl"
    serialized_data = pickle.dumps(embeddings)  # Serialize embeddings directly here
    try:
        s3_client.put_object(Bucket=settings.bucket, Key=key, Body=serialized_data)
    except botocore.exceptions.ClientError as e:
        raise HTTPException(status_code=500, detail=str(e))

def load_embeddings_from_s3(user_id: str, paper_id: str) -> List[List[float]]:
    key = f"{user_id}-{paper_id}-embeddings.pkl"
    try:
        response = s3_client.get_object(Bucket=settings.bucket, Key=key)
        serialized_data = response['Body'].read()
        embeddings = pickle.loads(serialized_data)  # Deserialize
        return embeddings
    except botocore.exceptions.ClientError as e:
        raise HTTPException(status_code=404, detail="Embeddings not found")
