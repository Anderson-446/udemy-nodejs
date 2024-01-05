

const EventEmitter = require('events') 

const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
    console.log("Durante");
})

console.log("Antes")

eventEmitter.emit('start')

console.log("a");

// Podemos utilizar esse eventEmitter para emitir logs de erros em uma aplicação real
