import boto3
from moto import mock_aws   
from fastapi.testclient import TestClient
import pytest
from backend.main import get_embeddings  # Import the function from the correct location
from backend.main import add_numbers, chat, get_graph, app, save_embeddings_to_s3
from unittest.mock import MagicMock
import pickle


import os


client = TestClient(app)

def test_add_numbers():
    assert add_numbers(5, 5) == 10

def test_get_graph():
    response = client.get("/graph")
    assert response.status_code == 200
    assert response.json() == {"Graph": "GET Request"}

class MockResponse:
    def __init__(self, embeddings):
        self.data = [MagicMock(embedding=embedding) for embedding in embeddings]

@pytest.fixture
def mock_together_client(mocker):
    # The MockResponse is expected to have a list of MagicMock objects, each with an `embedding` attribute
    mock_response = MockResponse([[1.0, 2.0], [3.0, 4.0]])
    mocker.patch('backend.main.client.embeddings.create', return_value=mock_response)

def test_get_embeddings(mock_together_client):
    texts = ["Hello world", "Another example"]
    model = "togethercomputer/m2-bert-80M-8k-retrieval"
    embeddings = get_embeddings(texts, model)

    assert embeddings == [[1.0, 2.0], [3.0, 4.0]]







@pytest.fixture(scope="function")
def aws_credentials():
    """Mocked AWS Credentials for moto."""
    os.environ["AWS_ACCESS_KEY_ID"] = "testing"
    os.environ["AWS_SECRET_ACCESS_KEY"] = "testing"
    os.environ["AWS_SECURITY_TOKEN"] = "testing"
    os.environ["AWS_SESSION_TOKEN"] = "testing"
    os.environ["AWS_DEFAULT_REGION"] = "us-east-1"

@pytest.fixture(scope="function")
def aws(aws_credentials):
    with mock_aws():
        yield boto3.client("s3", region_name="us-east-1")

@pytest.fixture
def create_bucket1(aws):
    boto3.client("s3").create_bucket(Bucket="Pendragon234543653456997865875")

@pytest.fixture
def create_bucket2(aws):
    boto3.client("s3").create_bucket(Bucket="Pendragon68756485348563586848454")

def test_s3_directly(aws):
    s3 = boto3.client("s3", region_name="us-east-1")

    s3.create_bucket(Bucket="somebucket")

    result = s3.list_buckets()
    assert len(result["Buckets"]) == 1

def test_bucket_creation(create_bucket1, create_bucket2):
    
    buckets = boto3.client("s3").list_buckets()["Buckets"]
    assert len(buckets) == 2

@pytest.fixture
def s3_bucket(aws):
        
        bucket_name = boto3.client("s3").create_bucket(Bucket='my-mocked-bucket')
        return bucket_name

def test_s3_bucket(s3_bucket):
    s3 = boto3.client("s3", region_name="us-east-1")
    buckets = boto3.client("s3").list_buckets()["Buckets"]
    save_embeddings_to_s3 
    assert len(buckets) == 1


#Gonna figure this out later 
"""
@mock_aws
def test_save_embeddings_to_s3(aws):
    s3 = boto3.client("s3", region_name="us-east-1")
    bucket_name = boto3.client("s3").create_bucket(Bucket='my-mocked-bucket')
    embeddings = [[1.0, 2.0] , [ 3.0 , 4.0]]

    user_id = 'test_user'
    paper_id = 'test_paper'
    save_embeddings_to_s3(user_id, paper_id, embeddings)

    response = s3_bucket.get_object(Bucket='my-mocked-bucket', Key=f'{user_id}-{paper_id}-embeddings.pkl')
    data = pickle.loads(response['Body'].read())

    assert data == embeddings, "Embeddings should be saved to S3 and match the input data."
"""