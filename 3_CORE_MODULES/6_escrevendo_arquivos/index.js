const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {

    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name; // é o nome que tá sendo passado lá no formulário message.html dentro do input

    if(!name) {
        fs.readFile('message.html', function (err, data) {
            res.writeHead(200, { 'Contenty-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    } else {
        fs.writeFile("arquivo.txt", name, function(err, data) {
            res.writeHead(302, {
                Location: '/',
            })
            return res.end()
        })
    }

})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})