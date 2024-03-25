import sys
from pathlib import Path

from config import Settings
class SomeService:
    def __init__(self, settings: Settings):
        self.settings = settings

    def do_something_with_aws_credentials(self):
        print("AWS_ACCESS_KEY_ID:", self.settings.aws_access_key_id)
        print("AWS_SECRET_ACCESS_KEY:", self.settings.aws_secret_access_key)

# Usage
settings = Settings()
some_service = SomeService(settings)
some_service.do_something_with_aws_credentials()
