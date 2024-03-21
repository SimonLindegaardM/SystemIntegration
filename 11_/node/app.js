import express from "express"

const app = express();

app.use(express.static("public"))

const randomNumbers = [2,5]

app.get("/random", (req,res) => {
    res.send({data: randomNumbers})
})
app.post("/newNumbers", (req,res) => {
    const newNumber = getNumbers(3,1000)
    randomNumbers.push(newNumber)
    res.send({data: newNumber})
})
function getNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const PORT = 8080;
app.listen(PORT, () => console.log("Server is running", PORT));