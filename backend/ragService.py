import sys, os
sys.path.append(os.path.abspath(".."))
from EmbeddingGenerator import EmbeddingManager
from VectorDataStore import VectorStore
from RagRetriever import RAGRetriever
from QueryRetriever import rag_advanced
from langchain_groq import ChatGroq
from dotenv import load_dotenv

load_dotenv()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
VECTORSTORE_PATH = os.path.join(BASE_DIR, "VectorStore")

# Initialize once (IMPORTANT for performance)
embedding_manager = EmbeddingManager()

vectorstore = VectorStore(
    collection_name="pdf_documents",
    persist_directory=VECTORSTORE_PATH
)

rag_retriever = RAGRetriever(vectorstore, embedding_manager)

llm = ChatGroq(
    model_name="llama-3.1-8b-instant",
    temperature=0.1,
    max_tokens=1024
)


def run_rag(query: str):
    result = rag_advanced(
        query,
        rag_retriever,
        llm,
        top_k=3,
        min_score=0.1,
        return_context=True
    )

    return result