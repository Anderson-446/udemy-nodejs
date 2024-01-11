//módulos externos
import inquirer from 'inquirer';
import chalk from 'chalk';

//módulos internos
import fs from 'fs';

//

operation()

async function operation() {

    try {
        const answers = await inquirer.prompt([{ //abrindo array
        type: 'list', //objeto lista de opções
        name: 'action', //pergunta
        choices: [
            'CRIAR CONTA',
            'DEPOSITAR',
            'CONSULTAR SALDO',
            'SACAR',
            'SAIR'
        ],
        }]);

        const action = answers['action']

        if(action === 'CRIAR CONTA') {
            createAccount()
        } else if (action === 'DEPOSITAR') {
            deposit()
        } else if (action === 'CONSULTAR SALDO') {

        } else if (action === 'SACAR') {

        } else {
            console.log(chalk.bgBlue.black(' OBRIGADO POR USAR O ACCOUNTS! '));
            process.exit()
        }

    } catch (err) {
        console.log(err)
    };
};

// create an account

function createAccount() {
    console.log(chalk.bgGreen.black(' OBRIGADO POR ESCOLHER O NOSSO BANCO! '))
    console.log(chalk.green('DEFINA AS OPÇÕES DA SUA CONTA A SEGUIR'))

    buildAccount()
};

async function buildAccount() {

    try {

        const answer = await inquirer.prompt([
            {
                name:'accountName',
                message:' DIGITE UM NOME PARA A SUA CONTA: '
            }
        ]);

        const accountName = answer['accountName']
        console.info(accountName)

        if(!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black('ESTA CONTA JÁ EXISTE, ESCOLHA OUTRO NOME!'));

            buildAccount()
            return;
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', function (err) {
            console.log(err);

        },)

        console.log(chalk.green('PARABÉNS, A SUA CONTA FOI CRIADA!'));
        operation()

    } catch (err) {
        console.log(err);
    }
}

//add an amount to your account
async function deposit() {

    try {
        const answer = await inquirer.prompt([
            {
                name:'accountName',
                message:'QUAL O NOME DA SUA CONTA?'
            }
        ])
        const accountName = answer['accountName']

    //verify if account exists
        if(!checkAccount(accountName)) {
            return deposit()
        }

    } catch (err) {
        console.log(err);
    }
    
}

function checkAccount(accountName) {

    if(!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('ESTA CONTA NÃO EXISTE, ESCOLHA OUTRO NOME!'));
        return false
    }

    return true
}