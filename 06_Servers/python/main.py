from fastapi import FastAPI


app = FastAPI()

@app.get("/")
def root():
    return { "message": "welcome to our first server"}

@app.get("/firstroute")
def root():
    return { "message": "welcome to our first route"}