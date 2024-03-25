import boto3
from moto import mock_aws   
from fastapi.testclient import TestClient
import pytest
from backend.main import get_embeddings  # Import the function from the correct location
from backend.main import add_numbers, chat, get_graph, app
from backend.main import save_embeddings_to_s3
from unittest.mock import MagicMock, patch
import pickle
import os
from pydantic import BaseModel


class ChatInput(BaseModel):
    text: str


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
        boto3.client("s3", region_name="us-east-1")
        boto3.client("s3").create_bucket(Bucket="ArthasAI")
        yield 

@pytest.fixture
def create_bucket1(aws):
    boto3.client("s3").create_bucket(Bucket="Pendragon234543653456997865875")

@pytest.fixture
def create_bucket2(aws):
    boto3.client("s3").create_bucket(Bucket="ArthasAI")

def test_s3_directly(aws):
    s3 = boto3.client("s3", region_name="us-east-1")

    s3.create_bucket(Bucket="somebucket")

    result = s3.list_buckets()
    assert len(result["Buckets"]) == 2

def test_bucket_creation(create_bucket1, create_bucket2):
    
    buckets = boto3.client("s3").list_buckets()["Buckets"]
    assert len(buckets) == 2

@pytest.fixture
def s3_bucket(aws):
        
        bucket_name = boto3.client("s3").create_bucket(Bucket='my-mocked-bucket')
        return bucket_name

def test_s3_bucket(aws):
    s3 = boto3.client("s3", region_name="us-east-1")
    buckets = boto3.client("s3").list_buckets()["Buckets"]
    save_embeddings_to_s3 
    assert len(buckets) == 1


#Gonna figure this out later 

"""@mock_aws
def test_save_embeddings_to_s3(aws):

    user_id = 'test_user'
    paper_id = 'test_paper'
    embeddings = [[1.0, 2.0] , [ 3.0 , 4.0]]

    s3 = boto3.client("s3", region_name="us-east-1")
    buckets = boto3.client("s3").list_buckets()["Buckets"]
    save_embeddings_to_s3(user_id, paper_id, embeddings)


        bucket_name = 'my-mocked-bucket'
    save_embeddings_to_s3(user_id, paper_id, embeddings)
    response = s3_bucket.get_object(Bucket=buckets, Key=f'{user_id}-{paper_id}-embeddings.pkl')
    data = pickle.loads(response['Body'].read())
    assert len(buckets) == 1

"""


def test_chat_endpoint():
    user_id = "test_user"
    paper_id = "test_paper"
    chat_input_data = ChatInput(text="Hello, world").dict()  # This should be a dict that resembles the JSON you'd send in a real request

    with patch("backend.main.get_embeddings") as mock_get_embeddings, \
         patch("backend.main.load_from_storage") as mock_load_from_storage, \
         patch("backend.main.save_to_storage") as mock_save_to_storage:
        
        # Mock the return values of get_embeddings and load_from_storage if needed
        mock_get_embeddings.return_value = [[0.123, 0.456]]  # Example embeddings
        mock_load_from_storage.return_value = {'chat_history': []}  # Example return value for an empty context

        # Make a request to the chat endpoint
        response = client.post(f"/chat/{user_id}/{paper_id}", json=chat_input_data)
        
        # Here, you can make assertions to test the response and also
        # assert that the mocks were called with the expected arguments
        assert response.status_code == 200
        assert mock_get_embeddings.called
        assert mock_load_from_storage.called
        assert mock_save_to_storage.called
