from core.AIengine import get_ai_response
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Juna AI Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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