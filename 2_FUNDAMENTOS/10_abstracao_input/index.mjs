import inquirer from 'inquirer';

inquirer.prompt([{
    name: 'pergunta1',
    message: 'Qual a primeira nota?',
},
{
    name: 'pergunta2',
    message: 'Qual a segunda nota?',
},
])
.then((answers) => {
    console.log(answers)
    const media = ((parseInt(answers.pergunta1) + parseInt(answers.pergunta2)) / 2)

    console.log(`média = ${media}`)
})
.catch((err) => console.log(err))