const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const profissão = args['profissão']

console.log(nome, profissão);

console.log(`Meu nome é ${nome} e minha profissão é ${profissão}`);