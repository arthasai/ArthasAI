
import boto3
from botocore.exceptions import NoCredentialsError
from dotenv import load_dotenv
import os

# Replace 'your_access_key_id' and 'your_secret_access_key' with your actual AWS credentials
def configure():
    load_dotenv()
configure()

aws_access_key_id = os.getenv("AWS_ACCESS_KEY_ID")
aws_secret_access_key = os.getenv("AWS_SECRET_ACCESS_KEY")

# Initialize an S3 client

print(aws_access_key_id, aws_secret_access_key)
s3_client = boto3.client(
    's3',
    region_name='us-east-2',
    aws_access_key_id=aws_access_key_id,
    aws_secret_access_key=aws_secret_access_key
)

def list_buckets():
    # Try to list all buckets
    try:
        response = s3_client.list_buckets()
        print('Existing buckets:')
        for bucket in response['Buckets']:
            print(f'  {bucket["Name"]}')
    except NoCredentialsError:
        print("Credentials not available")
    except Exception as e:
        print(f"An error occurred: {e}")

# Run the test function
list_buckets()

#.env is now hidden