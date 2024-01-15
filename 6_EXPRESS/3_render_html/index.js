const express = require('express');
const path = require('path');


const app = express();
const port = 3000; //variável ambiente cada ambiente utiliza uma específica

const basePath = path.join(__dirname,'templates')

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`)

}) //primeiro argumento é a rota e como segundo argumento uma (requisição, resposta em uma função anônima.

app.listen(port, () => {
    console.log(`rodando na porta: ${port}`);
}) //recebe como parâmetro a porta e uma função de callback