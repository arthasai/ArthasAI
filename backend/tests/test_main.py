# import the function you want to test
from fastapi.testclient import TestClient
from backend.main import app  # Import your FastAPI app here
from  backend.main import add_numbers, get_embeddings
from backend.main import get_graph
import pytest

client = TestClient(app)
class MockResponse:
    def __init__(self, embeddings):
        self.data = [{'embedding' : embedding} for embedding in embeddings]

@pytest.fixture
def mock_client(mocker):
    mock = mocker.patch()
    mock.embeddings.create.return_value = MockResponse([[0.1, 0.2], [0.3, 0.4]])
    return mock

def test_get_embeddings(mock_client):
    texts = ["Hello world", "Test sentence"]
    model = "backend.main"
    embeddings = get_embeddings(texts, model)
    expected_embeddings = [[0.1, 0.2], [0.3, 0.4]]

    assert embeddings == expected_embeddings
    mock_client.embeddings.create.assert_called_once_with(input=texts, model=model)

def test_s3_Bucket():
    
# write test functions
def test_add_numbers():
    assert add_numbers(2, 3) == 5
    assert add_numbers(0, 0) == 0
    assert add_numbers(-1, 1) == 0

def test_get_graph():
    response = client.get("/graph")
    assert response.status_code == 200
    assert response.json() == {"Graph": "GET Request"}