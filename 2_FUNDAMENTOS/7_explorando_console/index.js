const x = 10;
const y = "texto";
const z = true;
const w = [1, 2, 3, 4, 5];

console.log(x, y, z, w);

//contagem de impressões

console.count(`o valor de x é: ${x}, contagem`);
console.count(`o valor de x é: ${x}, contagem`);
console.count(`o valor de x é: ${x}, contagem`);
console.count(`o valor de x é: ${x}, contagem`);
console.count(`o valor de x é: ${x}, contagem`);

//variável entre string
console.log(`o nome é %s, ele é programador`, y);

//$s transforma em string

//limpar o console

setTimeout(() => {
    console.clear();
}, 2000) //limpa o console depois de 2 segundos.