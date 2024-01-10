const path = require('path');

const customPath = '/relatorios/anderson/relatorio1.pdf';

console.log(path.dirname(customPath));// nome do diretório
console.log(path.basename(customPath));// nome do arquivo
console.log(path.extname(customPath));// nome da extensão
