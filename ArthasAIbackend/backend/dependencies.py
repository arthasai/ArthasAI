from .config import settings
import boto3
from together import Together

def get_s3_client():
    return boto3.client(
        's3',
        region_name=settings.aws_region,
        aws_access_key_id=settings.aws_access_key_id,
        aws_secret_access_key=settings.aws_secret_access_key
    )

def get_together_client():
    return settings.together_api_key


def numbers(x,y):
    return x + y