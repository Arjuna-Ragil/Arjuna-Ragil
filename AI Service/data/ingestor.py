import requests
from langchain_ollama import OllamaEmbeddings
from langchain_core.documents import Document
from langchain_chroma import Chroma
import os

def ingest_all_porto():
    BE_URL = os.getenv("BE_URL", "localhost:8080")
    OLLAMA_URL = os.getenv("OLLAMA_URL", "http://localhost:11434")

    embeddings = OllamaEmbeddings(model="nomic-embed-text", base_url=OLLAMA_URL)
    docs = []

    res_pj = requests.get(f"http://{BE_URL}/api/v1/open/pj").json()
    res_ts = requests.get(f"http://{BE_URL}/api/v1/open/ts").json()
    res_exp = requests.get(f"http://{BE_URL}/api/v1/open/exp").json()

    for pj in res_pj:
        content = f"Project: {pj['title']}\nDescription: {pj['description']}\nTechStack: {', '.join([ts['name'] for ts in pj['tech_stacks']])}"
        docs.append(Document(page_content=content, metadata={"id": pj["id"], "type": "project"}))

    for ts in res_ts:
        content = f"Techstack: {ts['name']}\nCategory: {ts['category']}"
        docs.append(Document(page_content=content, metadata={"id": ts["id"], "type": "techstack"}))

    for exp in res_exp:
        content = f"Experience: {exp['title']}\nCompany: {exp['company']}\nDescription: {exp['description']}\nPeriod: {exp['period']}\nTasks: {', '.join([task['description'] for task in exp['tasks']])}"
        docs.append(Document(page_content=content, metadata={"id": exp["id"], "type": "experience"}))

    oldDb = Chroma(
        persist_directory="./chroma_data",
        embedding_function=embeddings
    )
    
    try:
        oldDb.delete_collection("porto_all_data")
    except:
        pass

    vectorDb = Chroma.from_documents(
        documents=docs,
        embedding=embeddings,
        persist_directory="./chroma_data",
        collection_name="porto_all_data"
    )

    print("New Data have been collected")

if __name__ == "__main__":
    ingest_all_porto()

    print("All Porto ingested successfully")