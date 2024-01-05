//externo
const minimist = require('minimist')

//interno
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))

const a = parseInt(args['a']) //método converte string em número inteiro
const b = parseInt(args['b'])

// (args['a'] e args['b'] serão passados como argumentos na linhda de comando para a função soma)

soma(a,b)
