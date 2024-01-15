const express = require('express');
const path = require('path');


const app = express();
const port = 3000;

const basePath = path.join(__dirname, 'templates')

//ler o body (corpo da requisição)

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

app.post(`/users/save`, (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`);

    res.sendFile(`${basePath}/userForm.html`)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    //leitura da tabela users, resgatar um usuário do banco
    console.log(`Buscando pelo usuário ${id}`);
    //capturando o id
    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
}) //primeiro argumento é a rota e como segundo argumento uma (requisição, resposta) em uma função anônima.

app.listen(port, () => {
    console.log(`rodando na porta: ${port}`);
}) //recebe como parâmetro a porta e uma função de callback

