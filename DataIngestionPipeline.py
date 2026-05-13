from TextParser import process_all_pdfs
from TextSplitter import split_documents
from EmbeddingGenerator import EmbeddingManager
from VectorDataStore import VectorStore

all_pdf_documents = process_all_pdfs("./Stories/PDFs")

chunks = split_documents(all_pdf_documents)

embedding_manager = EmbeddingManager()

texts = [doc.page_content for doc in chunks]
embeddings = embedding_manager.generate_embeddings(texts)

vectorstore = VectorStore()

vectorstore.add_documents(chunks, embeddings)
