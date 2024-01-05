const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})


readline.question("Qual a sua linguagem? ", (language) => {

    if(language === "java") {
        console.log("Boa Sorte");
    } else {
        console.log(`minha linguagem preferida é: ${language}`)
    }
    
    readline.close()
})