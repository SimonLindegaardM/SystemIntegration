import express from "express"

const app = express();

app.use(express.static("public"))

let counter = 0;

app.get("/counting", (req,res) => {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
    });

    setInterval(() => sendCountToClient(res), 1000)
})

function sendCountToClient(res){
    counter++;
    const count = { message: `The count is ${counter}`};
    res.write(`data: ${JSON.stringify(count)} \n\n`)
}

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running", PORT));