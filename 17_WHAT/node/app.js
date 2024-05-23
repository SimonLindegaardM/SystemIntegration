import express from "express"

const app = express();

import cors from "cors"
// app.use(cors());

// app.use((req,res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })

// app.get("/timestamp", (req, res) => {
//     res.send({ time: new Date()});
// });

app.get("/timestamp", cors(), (req, res) => {
    res.send({ time: new Date() });
});

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server is running on port", 8080));