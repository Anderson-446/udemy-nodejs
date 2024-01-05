const fs = require('fs') //FileSystem

console.log('Início');

fs.writeFileSync('arquivo.txt', 'oi')

console.log('Fim');

// tudo roda ao mesmo tempo. 