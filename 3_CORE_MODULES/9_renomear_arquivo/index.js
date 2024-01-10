const fs = require('fs');

const arqAntigo = 'arquivo.txt'
const arqNovo = 'renomeado.txt'

fs.rename('arquivo.txt', 'renomeado.txt' , function(err) {
    if(err) {
        console.log(err);
        return;
    }

    console.log(`Arquivo ${arqAntigo} renomeado para ${arqNovo} com sucesso!`);
})