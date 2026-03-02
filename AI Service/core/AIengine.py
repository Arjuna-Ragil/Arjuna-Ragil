from langchain_core.prompts.prompt import PromptTemplate
from langchain_ollama import OllamaLLM
from langchain_chroma import Chroma
from langchain_ollama import OllamaEmbeddings
import os

def get_ai_response(question: str):

    OLLAMA_URL = os.getenv("OLLAMA_URL", "http://localhost:11434")

    embeddings = OllamaEmbeddings(model="nomic-embed-text", base_url=OLLAMA_URL)
    vector_db = Chroma(
        persist_directory="./chroma_data",
        embedding_function=embeddings,
        collection_name="porto_all_data"
    )

    retriever = vector_db.as_retriever(search_kwargs={"k": 4})

    llm = OllamaLLM(model="qwen3:0.6b", base_url=OLLAMA_URL)

    template = """Kamu adalah asisten AI profesional saya. Saya adalah Arjuna, seorang Mahasiswa Sistem Informasi UIN Jakarta.
    Tugasmu adalah menjawab pertanyaan pengunjung berdasarkan informasi techstack, project, dan pengalaman saya di bawah ini.
    
    ATURAN KERAS: 
    1. Jawablah senatural mungkin serta sampaikanlah informasinya dengan jelas dan ringkas. 
    2. DILARANG KERAS menggunakan frasa seperti "Dalam konteks", "Berdasarkan data", "Menurut informasi", atau yang serupa.
    3. Jika pertanyaannya di luar informasi di bawah ini, katakan saja dengan sopan bahwa kamu belum tahu atau arahkan mereka untuk menghubungi saya.

    Informasi Utama:
    {context}

    Pertanyaan Pengunjung: {question}
    
    Jawaban:"""

    prompt = PromptTemplate(template=template, input_variables=["context", "question"])
    docs = retriever.invoke(question)
    context = "\n\n".join([doc.page_content for doc in docs])
    final_prompt = prompt.format(context=context, question=question)

    answer = llm.invoke(final_prompt)
    return answer