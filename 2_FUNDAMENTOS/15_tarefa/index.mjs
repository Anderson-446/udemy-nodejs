//criar um novo projeto que aceite pacotes externos;
//Instalar o inquirer e o chalk
//Utilizar o inquirer para receber o nome e a idade do usuário
//Apresentar essa resposta com uma cor de fundo amarela e texto preto;
//bgYellow e black
//inisira um tratamento para um possível erro de inquirer com o catch;

import chalk from 'chalk';
import inquirer from 'inquirer'

inquirer.prompt([{
    name:'nome',
    message: 'Qual seu nome?'
},
{
    name: 'idade',
    message: 'Qual sua idade?'
}
])
.then((answers) => {
    
    const response = (`Seu nome é ${answers.nome} e tem ${answers.idade} anos de idade`)

    console.log(chalk.bgYellow.black(response))
})