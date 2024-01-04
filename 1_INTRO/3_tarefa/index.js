const fs = require('fs'); //core modulo (inerente ao node, não é externo).

fs.readFile('arquivodetexto.txt', 'utf8', (err, data) => {

    if(err){
        console.log(err);
    }

    console.log(data);
})