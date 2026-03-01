from langchain_core.prompts.prompt import PromptTemplate
from langchain_ollama import OllamaLLM
from langchain_chroma import Chroma
from langchain_ollama import OllamaEmbeddings

def get_ai_response(question: str):
    embeddings = OllamaEmbeddings(model="nomic-embed-text")
    vector_db = Chroma(
        persist_directory="./chroma_data",
        embedding_function=embeddings,
        collection_name="porto_all_data"
    )

    retriever = vector_db.as_retriever(search_kwargs={"k": 4})

    llm = OllamaLLM(model="qwen3:0.6b")

    template = """Kamu adalah asisten AI profesional di portofolio milik Arjuna (Mahasiswa Sistem Informasi UIN Jakarta).
    Tugasmu adalah menjawab pertanyaan pengunjung berdasarkan informasi techstack, project, dan pengalaman Arjuna di bawah ini.
    Gunakan bahasa yang ramah, asik, dan profesional. Jika informasinya tidak ada di konteks, bilang saja kamu tidak tahu.

    Konteks Informasi:
    {context}

    Pertanyaan Pengunjung: {question}
    
    Jawaban:"""

    prompt = PromptTemplate(template=template, input_variables=["context", "question"])
    docs = retriever.invoke(question)
    context = "\n\n".join([doc.page_content for doc in docs])
    final_prompt = prompt.format(context=context, question=question)

    answer = llm.invoke(final_prompt)
    return answer