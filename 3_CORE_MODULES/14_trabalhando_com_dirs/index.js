const fs = require('fs');

if(!fs.existsSync(`./minhapasta`)) {//verifica se existe
//se não existe cria o diretório
    console.log('Não existe');
    fs.mkdirSync('minhapasta')
} else if(fs.existsSync('./minhapasta')) {
    console.log('Existe!');
}