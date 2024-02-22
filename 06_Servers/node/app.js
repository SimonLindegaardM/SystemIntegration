import express from "express"

const app = express()
// console.log(express)

app.get("/", (req, res) => {
    res.send({message: "heeej"});
});

app.get("/otherRoute", (req, res) => {
    res.send({message: "heeej igen"});
});

app.post("/postRequest", (req, res) => {
    res.send({ message: "post request has been made"});
})


const port = 8080
app.listen(port, () => console.log("port is ", port))