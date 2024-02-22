import express from "express"


const app = express();

app.get("/requestFastAPI", async (req, res) => {
    // res.send({message: "heeej requestFastAPI"});
    const response = await fetch("http://127.0.0.1:8000/fastapiData");
    const result = await response.json();
    res.send(result)
    
});

app.get("/expressData", (req,res) => {
    res.send({message: true});
})

const PORT = 8080
app.listen(PORT, () => console.log("Server is running", PORT));