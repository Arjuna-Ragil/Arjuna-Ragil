from core.AIengine import get_ai_response
from pydantic import BaseModel
from fastapi import FastAPI

app = FastAPI(title="Juna AI Service")

class ChatRequest(BaseModel):
    question: str

@app.post("/api/v1/chat")
async def chat_ai(req: ChatRequest):
    answer = get_ai_response(req.question)
    return {
        "status": "success",
        "data": answer
    }

@app.get("/health")
async def health_check():
    return {"status": "AI Service is Alive and Kicking!"}