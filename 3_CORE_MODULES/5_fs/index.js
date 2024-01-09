const http = require('http');
const port = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('message.html', function(err, data) {
        res.writeHead(200, {'Contenty-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})