const express = require('express');
const userRouter = require('./users/router.js')

const app = express();
const port = 3000;

//ler o body (corpo da requisição)

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

//
app.use('/users', userRouter)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`rodando na porta: ${port}`);
})

