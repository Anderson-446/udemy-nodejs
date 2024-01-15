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
        message: ' O QUE VOCÊ GOSTARIA DE FAZER? ',
        choices: [
            'CRIAR CONTA',
            'DEPOSITAR',
            'CONSULTAR SALDO',
            'SACAR',
            'EXCLUIR CONTA',
            'SAIR'
        ],
        }]);

        const action = answers['action']

        if(action === 'CRIAR CONTA') {
            createAccount();
        } else if (action === 'DEPOSITAR') {
            deposit();
        } else if (action === 'CONSULTAR SALDO') {
            getAccountBalance();
        } else if (action === 'SACAR') {
            withdraw();
        } else if (action === 'EXCLUIR CONTA') {
            deleteAccount();
        }
        else {
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
                message:'DIGITE O NOME DA SUA CONTA: '
            }
        ])
        const accountName = answer['accountName']

    //verify if account exists
        if(!checkAccount(accountName)) {
            return deposit()
        }

        try {

            const amountAnswer = await inquirer.prompt([
                {
                    name:'amount',
                    message:' DIGITE O VALOR PARA DEPÓSITO: '
                }
            ])
                
                const amount = amountAnswer['amount']

                //add amount
                addAmount(accountName, amount)

                //como chamar o operation depois de finalizar a função?
                //return operation()

        } catch (err) {
            console.log(err);
        }
    } catch (err) {
        console.log(err);
    }
    
}

function checkAccount(accountName) {

    if(!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black(' ESTA CONTA NÃO EXISTE, ESCOLHA OUTRO NOME! '));
        return false;
    }

    return true;
}

async function addAmount(accountName, amount) {

   const accountData = await getAccount(accountName)

    if(!amount) {
        console.log(chalk.bgRed.black(' OCORREU UM ERRO, TENTE NOVAMENTE MAIS TARDE... '));
        process.exit();
    }

        
    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(`accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function (err) {
        console.log(err);
    },)

    console.log(chalk.green(`FOI DEPOSITADO O VALOR DE R$${amount} NA SUA CONTA`))
    
    return operation()
}
//function helper para retornar o arquivo em json
async function getAccount(accountName) {

    const accountJSON = await fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    })

    return JSON.parse(accountJSON)//parse converte uma string formatada em json em um objeto javascript
}

//show account balance
async function getAccountBalance() {

    try {
        const answer = await inquirer.prompt([
            {
                name:'accountName',
                message: ' DIGITE O NOME DA CONTA: '
            }
        ])  
        const accountName = answer['accountName']
        //verify if account exists
        if(!checkAccount(accountName)) {
            getAccountBalance()
        }

        const accountData = await getAccount(accountName)

        console.log(chalk.bgBlue.black(`OPA, O SALDO DA SUA CONTA É DE R$${accountData.balance}`,))
        //operation()
    } catch (err) {
        console.log(err);
    }
  
}

//withdraw amount from user account
async function withdraw() {
    
    try {
        const answer = await inquirer.prompt([
            { 
                name: 'accountName',
                message: ' DIGITE O NOME DA SUA CONTA: '
            }
        ])

        const accountName = await answer['accountName']

        if (!checkAccount(accountName)) {
            return withdraw
        }

        const answerAmount = await inquirer.prompt ([
            {
                name:'amount',
                message: ' DIGITE O VALOR QUE GOSTARIA DE SACAR: ' 
            }
        ])
        
        const amount = answerAmount['amount']
       
        removeAmount(accountName, amount)
       // operation()

    } catch (err) {
        console.log(err);
    }
}
//remove amount from account
async function removeAmount(accountName, amount) {

        try {

            const accountData = await getAccount(accountName)

            if(!amount) {
                console.log(chalk.bgRed.black(' OCORREU UM ERRO, TENTE NOVAMENTE MAIS TARDE... '));
               //return withdraw()
            }

            if (accountData.balance < amount) {
                console.log(chalk.bgRed.black(' SALDO INSUFICIENTE PARA SAQUE! '));
                //return withdraw()
            } else {
                accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

                console.log(chalk.green(` SAQUE DE R$${amount} REALIZADO NA SUA CONTA `));
                operation()
            }

            fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData),
                function(err) {
                    console.log(err);
                },
            )



        } catch (err) {
            console.log(err);
        }
}

async function deleteAccount() {

    try {
        
        const answer = await inquirer.prompt([
            {
                name:'accountName',
                message:'DIGITE O NOME DA CONTA QUE DESEJA EXCLUIR'
            }
        ]);

        const accountName = answer['accountName']

        //verify if account exists

        if (!checkAccount(accountName)) {
            console.log(' CONTA INEXISTENTE NO NOSSO SISTEMA! ');
            deleteAccount();
        } else {
            fs.unlinkSync(`accounts/${accountName}.json`);
            console.log(chalk.green(' CONTA EXCLUÍDA. FOI UM PRAZER TER VOCÊ CONOSCO! '));
        }

        // fs.unlinkSync(`accounts/${accountName}.json`);
        // operation()
    } catch (err) {
        console.log(err);
    }

}