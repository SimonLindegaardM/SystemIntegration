import express from 'express';
import csv from 'csvtojson';
import fs from 'fs';
import xm12js from 'xml2js';
import yaml from 'js-yaml';

const app = express();


app.get("/request/csv", async (req, res) => {
    const response = await fetch("http://127.0.0.1:8000/format/csv");
    const result = await response.json();
    res.send(result)
});

app.get("/request/json", async (req, res) => {
    const response = await fetch("http://127.0.0.1:8000/format/json");
    const result = await response.json();
    res.send(result)
});

app.get("/request/txt", async (req, res) => {
    const response = await fetch("http://127.0.0.1:8000/format/txt");
    const result = await response.json();
    res.send(result)
});

app.get("/request/xml", async (req, res) => {
    const response = await fetch("http://127.0.0.1:8000/format/xml");
    const result = await response.json();
    res.send(result)
});

app.get("/request/yaml", async (req, res) => {
    const response = await fetch("http://127.0.0.1:8000/format/yaml");
    const result = await response.json();
    res.send(result)
});

app.get('/format/csv', async (req, res) => {
    try {
        const jsonObj = await csv().fromFile('../files/me.csv');
        res.json(jsonObj);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error processing CSV file');
    }
});

app.get('/format/json', (req, res) => {
    fs.readFile('../files/me.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            res.status(500).send('Error reading JSON file');
            return;
        }
        
        const profile = JSON.parse(data);
        res.json(profile);
    });
});

app.get('/format/txt', (req, res) => {
    fs.readFile('../files/me.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            res.status(500).send('Error reading TXT file');
            return;
        }
        const jsonObj = data.split('\n').reduce((obj, line) => {
            const [key, value] = line.split(':').map(part => part.trim());
            if (key && value) {
                // Handling the case where value could be a list (e.g., hobbies)
                obj[key] = value.includes(',') ? value.split(',').map(item => item.trim()) : value;
            }
            return obj;
        }, {});

        res.json(jsonObj);
    });
});

app.get('/format/xml', (req, res) => {
    const parser = new xm12js.Parser();
    fs.readFile('../files/me.xml', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            res.status(500).send('Error reading XML file');
            return;
        }
        
        parser.parseString(data, (err, result) => {
            if (err) {
                console.error('Error parsing XML:', err);
                res.status(500).send('Error parsing XML file');
                return;
            }
            
            res.json(result);
        });
    });
});

app.get('/format/yaml', (req, res) => {
    try {
        const fileContents = fs.readFileSync('../files/me.yaml', 'utf8');
        const data = yaml.load(fileContents);
        res.json(data);
    } catch (e) {
        console.error('Error reading or parsing the file:', e);
        res.status(500).send('Error reading YAML file');
    }
});


const PORT = 8080
app.listen(PORT, () => console.log("Server is running", PORT));