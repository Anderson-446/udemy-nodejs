const express = require('express');

const app = express();
const port = 3000; //variável ambiente cada ambiente utiliza uma específica

app.get('/', (req, res) => {

    res.send('Quadragésima vez que faço isso!')

}) //primeiro argumento é a rota e como segundo argumento uma (requisição, resposta em uma função anônima.

app.listen(port, () => {
    console.log(`rodando na porta: ${port}`);
}) //recebe como parâmetro a porta e uma função de callback