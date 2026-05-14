from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from ragService import run_rag

app = FastAPI()

# allow frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change to frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# request model
class QueryRequest(BaseModel):
    query: str


@app.post("/api/story")
def story_endpoint(data: QueryRequest):

    query = data.query.strip()

    # 🚨 enforce 500 character limit
    if len(query) == 0:
        return {"error": "Query cannot be empty"}

    if len(query) > 500:
        return {
            "error": "Query too long. Max 500 characters allowed.",
            "length": len(query)
        }

    # run your RAG pipeline
    result = run_rag(query)

    return {
        "answer": result["answer"],
        "sources": result.get("sources", []),
        "confidence": result.get("confidence", 0),
        "context": result.get("context", "")[:500]
    }