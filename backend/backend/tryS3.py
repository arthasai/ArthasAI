import pytest
from moto import mock_s3
import boto3
from fastapi.testclient import TestClient
from main import app  # Import your FastAPI app
from main import serialize_embeddings, save_embeddings_to_s3, load_embeddings_from_s3  # Make sure to import the relevant functions

