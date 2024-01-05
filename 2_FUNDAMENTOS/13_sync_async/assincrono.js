
const fs = require('fs')

console.log("Início")

fs.writeFile("arquivo.txt", "oi", function(err) {
    setTimeout(function() {
        console.log("Arquivo criado!");
    }, 1000);
});

console.log("fim");

//executa o código síncrono enquanto o assíncrono espera em paralelo, por isso o arquivo é criado por último 