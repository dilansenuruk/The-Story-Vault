from EmbeddingGenerator import EmbeddingManager
from VectorDataStore import VectorStore
from RagRetriever import RAGRetriever
from QueryRetriever import rag_advanced
from langchain_groq import ChatGroq

# recreate embedding manager
embedding_manager = EmbeddingManager()

# reconnect to existing ChromaDB
vectorstore = VectorStore(
    collection_name="pdf_documents",
    persist_directory="./VectorStore"
)

# create retriever
rag_retriever = RAGRetriever(vectorstore, embedding_manager)

llm = ChatGroq(model_name="llama-3.1-8b-instant", temperature=0.1, max_tokens=1024)

# Example Usage:
result = rag_advanced("How did king Vortex's first son Dilan Senuruk died?", rag_retriever, llm, top_k=3, min_score=0.1, return_context=True)
print("Answer:", result['answer'])
print("Sources:", result['sources'])
print("Confidence:", result['confidence'])
print("Context Preview:", result['context'][:300])