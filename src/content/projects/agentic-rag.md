---
title: Agentic RAG System for Technical Documentation
category: Generative AI
type: current
tags: [RAG, LLMs, Vector Databases, Python, LangChain]
featured: true
order: 1
---

An enterprise-grade Retrieval-Augmented Generation (RAG) system engineered for high-accuracy question answering over complex developer documentation and multi-page PDFs.

### Key Features
- **Hybrid Search**: Combined sparse (BM25) and dense (vector) search with cross-encoders for state-of-the-art chunk retrieval.
- **Agentic Routing**: Implemented LLM-based query intent router to decide whether to fetch data from local vector index, search the web, or request human-in-the-loop validation.
- **Metadata Filtering**: Hierarchical chunk metadata tagging for fast and accurate scopes.

### Technology Stack
- **Frameworks**: LangChain, LlamaIndex, FastAPI
- **LLMs**: Gemini 1.5 Pro, Llama-3 (70B)
- **Vector DB**: Qdrant (self-hosted)
- **Retrieval**: Cohere Rerank, BGE-M3 Embeddings

<div class="mt-6 flex justify-center">
  <img class="rounded-xl border border-white/10 shadow-lg max-w-md w-full" src="/assets/agentic_rag_project.png" alt="Agentic RAG System Architecture">
</div>

