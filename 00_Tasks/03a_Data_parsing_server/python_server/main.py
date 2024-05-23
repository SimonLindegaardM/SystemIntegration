from fastapi import FastAPI
import requests

app = FastAPI()

from read_csv_file import read_csv
from read_xml_file import read_xml
from read_json_file import read_json
from read_yaml_file import read_yaml
from read_txt_file import read_txt
from read_txt_file import read_txt


@app.get("/request/csv")
def get_express():
    response = requests.get("http://localhost:8080/format/csv")
    result = response.json()
    return  {"data": result, "server": "node"}

@app.get("/request/json")
def get_express():
    response = requests.get("http://localhost:8080/format/json")
    result = response.json()
    return  {"data": result, "server": "node"}

@app.get("/request/txt")
def get_express():
    response = requests.get("http://localhost:8080/format/txt")
    result = response.json()
    return  {"data": result, "server": "node"}

@app.get("/request/xml")
def get_express():
    response = requests.get("http://localhost:8080/format/xml")
    result = response.json()
    return  {"data": result, "server": "node"}

@app.get("/request/yaml")
def get_express():
    response = requests.get("http://localhost:8080/format/yaml")
    result = response.json()
    return  {"data": result, "server": "node"}


# Get the data from all the different formats
@app.get("/format/csv")
def get_csv_data():
    return read_csv()

@app.get("/format/xml")
def get_xml_data():
    return read_xml()

@app.get("/format/json")
def get_json_data():
    return read_json()

@app.get("/format/yaml")
def get_yaml_data():
    return read_yaml()

@app.get("/format/txt")
def get_txt_data():
    return read_txt()