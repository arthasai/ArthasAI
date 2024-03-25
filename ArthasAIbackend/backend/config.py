from pydantic_settings import BaseSettings
from dotenv import load_dotenv
import os

load_dotenv()  # Manually load the .env file

class Settings(BaseSettings):
    aws_access_key_id: str
    aws_secret_access_key: str
    together_api_key: str
    aws_region: str = "us-east-2"
    bucket: str = "arthasai"

    class Config:
        env_file = ".env"

settings = Settings()

"""
print("Current working directory:", os.getcwd())
print("Environment Variables:")
print("AWS_ACCESS_KEY_ID:", settings.aws_access_key_id)
print("AWS_SECRET_ACCESS_KEY:", settings.aws_secret_access_key)
print("AWS_SECRET_ACCESS_KEY:", settings.aws_secret_access_key)
"""