//nome

console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split("=")[1] //dividir o array em 2 e pegar o segundo elemento
//divide a string em duas partes: antes e depois do sinal de igual e pega o segundo elemento [1]
console.log(nome)

const idade = args[1].split("=")[1]

console.log(idade)

const altura = args[2].split("=")[1]

console.log(altura);

console.log(`Meu nome é ${nome}, tenho ${idade} anos e ${altura}m de altura.`)