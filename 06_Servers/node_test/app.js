import express from "express"

const app = express()
// console.log(express)

app.get("/", (req, res) => {
    res.send({message: "heeej"});
});

const port = 8080
app.listen(port, () => console.log("port is ", port))