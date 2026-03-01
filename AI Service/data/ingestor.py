import requests
from langchain_ollama import OllamaEmbeddings
from langchain_core.documents import Document
from langchain_chroma import Chroma

def ingest_projects():
    response = requests.get("http://localhost:8080/api/v1/open/pj")
    projects = response.json()

    embeddings = OllamaEmbeddings(model="nomic-embed-text")

    docs = []
    for pj in projects:
        content  = f"Project: {pj['title']}\nDescription: {pj['description']}\nTechStack: {', '.join([ts['name'] for ts in pj['tech_stacks']])}"
        docs.append(Document(page_content=content, metadata={"id": pj["id"], "type": "project"}))

    vectorDb = Chroma.from_documents(
        documents=docs,
        embedding=embeddings,
        persist_directory="./chroma_data",
        collection_name="porto_projects"
    )

if __name__ == "__main__":
    ingest_projects()

    print("Projects ingested successfully")