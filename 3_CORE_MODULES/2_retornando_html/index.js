const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200 //ok
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> Hello, this is my fisrt server with HTML! </h1><p> Atualization test </p>')
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});