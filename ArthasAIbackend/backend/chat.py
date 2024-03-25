from fastapi import APIRouter, Depends
from .dependencies import get_s3_client, get_together_client
from .models import ChatInput

router = APIRouter()

@router.post("/{user_id}/{paper_id}")
def chat(user_id: str, paper_id: str, chat_input: ChatInput,
         s3_client=Depends(get_s3_client), together_client=Depends(get_together_client)):
    # Your chat route implementation
    pass
