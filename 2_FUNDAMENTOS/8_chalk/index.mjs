// não funcionou com a extensão js, pois o require não funcionou. por 
//algum motivo não está sendo suportado, provavelmente por conta da versão

import chalk from 'chalk';

const nota = 9

if (nota >= 7) {
    console.log(chalk.green('Parabéns, você está aprovado!'))
} else {
    console.log(chalk.red('Está de recuperação!'));
}