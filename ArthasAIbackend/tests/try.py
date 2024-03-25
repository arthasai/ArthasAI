import boto3
from moto import mock_aws   
from fastapi.testclient import TestClient
import pytest
import pickle
import os


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

def s3_bucket(aws):
        
        bucket_name = boto3.client("s3").create_bucket(Bucket='my-mocked-bucket')
        return bucket_name

print (s3_bucket(aws))