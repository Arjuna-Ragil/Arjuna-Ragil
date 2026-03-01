from langchain_chroma import Chroma
from langchain_ollama import OllamaEmbeddings

def search_test():
    embeddings = OllamaEmbeddings(model="nomic-embed-text")

    vector_db = Chroma(
        persist_directory="./chroma_data",
        embedding_function=embeddings,
        collection_name="porto_projects"
    )

    question = "Cariin Project yang pakai react"

    results = vector_db.similarity_search(question, k=2)

    if not results:
        print("No data found")
        return

    for i, res in enumerate(results):
        print(f"--- Result {i+1} ---")
        print(res.page_content)
        print(f"Metadata: {res.metadata}\n")

if __name__ == "__main__":
    search_test()