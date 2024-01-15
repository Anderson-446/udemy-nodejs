const express = require('express');
const path = require('path');


const app = express();
const port = 3000; //variável ambiente cada ambiente utiliza uma específica

const basePath = path.join(__dirname, 'templates')

const checkAuth = function(req, res, next) {
    req.authStatus = true 

    if(req.authStatus) {
        console.log('Usuário autenticado');
        next() //envia para próxima etapa
    } else {
        console.log('Não autenticado, faça login...');
        //fica em loading infinito, aqui podemos redirecionar para outra página, por exemplo
    }
} // é apenas um exemplo, seria necessário, em um cenário real, um código para verificar a forma de autenticação.
//como token, por exemplo, um código que pega o token do usuário, verifica se está OK e retorna o next

app.use(checkAuth) //Toda requisição enviada pelo sistema ativa o middleware, depois iremos aprender a fazer isso nas rotas individualmente.

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`)

}) //primeiro argumento é a rota e como segundo argumento uma (requisição, resposta em uma função anônima.

app.listen(port, () => {
    console.log(`rodando na porta: ${port}`);
}) //recebe como parâmetro a porta e uma função de callback