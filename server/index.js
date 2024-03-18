const express = require('express');

const app = express();
const server = process.env.SERVER;

app.get("/", (req, res) => {
    return res.send(`Server ${server} recebeu a request`);
})

app.listen(8080, () => {
    console.log("servidor rodando");
});