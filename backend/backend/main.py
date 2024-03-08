from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def search_results():
    return {"Homepage": 
            "use /search to search for papers, /upload to upload a paper, /chat to chat with a bot, /graph to get a graph of the data."}

@app.get("/search")
def search_results():
    return {"Search": "GET Request"}

@app.post("/upload")
def upload_paper():
    return {"Upload": "POST Request"}

@app.get("/chat")
def chat():
    return {"Chat": "GET Request"}

@app.get("/graph")
def get_graph():
    return {"Graph": "GET Request"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app)

