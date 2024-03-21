from fastapi import FastAPI
import requests
from datetime import datetime
app = FastAPI()

@app.get("/fastapiData")
def _():
    return { "messsage": [1,2,3,4,5]}

@app.get("/requestExpress")
def get_express():
    response = requests.get("http://localhost:8080/expressData")
    result = response.json()
    return  {"data": result}

@app.get("/requestDate")
def get_Date():
    response = requests.get("http://localhost:8080/datetime")
    result = response.json()
    return {"data": result}

@app.get("/Date")
def get_Date():
    current_date = datetime.now()
    return {"data": current_date}