

function a() {
    console.log("executando a()");
}

function b() {
    console.log("executando b()");
}

function c() {
    console.log("executando c()");
    a()
    b()
}

c()

//Espera a função c ser executada para executar a() e depois b()