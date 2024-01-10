const path = require('path');


//caminho absoluto
console.log(path.resolve('teste.txt'))

//formar path dinâmicos
const midFolder = "relatorios"
const fileName = "anderson.txt"

const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)

