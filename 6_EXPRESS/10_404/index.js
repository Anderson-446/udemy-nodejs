const express = require('express');
const userRouter = require('./users/router.js')
const path = require('path')
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
//arquivos estáticos
app.use(express.static('public'))

app.use('/users', userRouter)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.use(function (req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`rodando na porta: ${port}`);
})

