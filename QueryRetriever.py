def rag_advanced(query, retriever, llm, top_k=5, min_score=0.2, return_context=False):

    # RAG pipeline with extra features: Returns answer, sources, confidence score, and optionally full context.
    # top_k=top_k: Number of chunks to retrieve.
    # score_threshold=min_score: Ignore chunks below similarity threshold.
    results = retriever.retrieve(query, top_k=top_k, score_threshold=min_score)

    # If no relevant documents were found, return fallback response, avoid sending empty context to LLM, prevent hallucinations
    # confidence = 0.0 means: no trustworthy information was retrieved.
    if not results:
        return {'answer': 'No relevant context found.', 'sources': [], 'confidence': 0.0, 'context': ''}
    
    # Extract text content from retrieved chunks and combine them into one large context string.
    # The LLM will later use this context to answer the user's question.
    context = "\n\n".join([doc['content'] for doc in results])

    # "sources": PDF filename or source name, "page": PDF page number, "source": Similarity score of retrieval, "preview": First 300 characters of the chunk
    # .get() prevents crashes if metadata key does not exist.
    sources = [{'sources': doc['metadata'].get('source_file', doc['metadata'].get('source', 'unknown')), 'page': doc['metadata'].get('page', 'unknown'),
                'source': doc['similarity_score'], 'preview': doc['content'][:300] + '...'} for doc in results]
    
    # Select highest similarity score among retrieved chunks.
    confidence = max([doc['similarity_score'] for doc in results])

    # Structure - Context: Retrieved document chunks, Question: User query, Answer: Space where LLM generates response
    prompt = f"""Use the following context to answer the question concisely.\nContext:\n{context}\n\nQuestion: {query}\n\nAnswer:"""
    
    # response.content: Contains final generated answer text.
    response = llm.invoke([prompt.format(context=context, query=query)])

    # Output contains - answer: Generated response from LLM, sources: Retrieved document metadata, confidence: Highest retrieval similarity score
    output = {'answer': response.content, 'sources': sources, 'confidence': confidence}
    
    # If return_context=True: include entire retrieved context inside the output.
    if return_context:
        output['context'] = context

    return output