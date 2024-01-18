const express = require('express')
const exphbs = require('express-handlebars')
const { Client } = require('pg')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})


const conn = new Client( {
    user:'postgres',
    host:'localhost',
    password:'root',
    database:'nudemy',
    port: 5432,
});

(async () => {

    try {

         conn.connect();
         console.log('Conectado ao banco com sucesso');

     } catch (error) {
     
         console.log('Erro ao conectar ao banco de dados:', error);
         conn.end();
         process.exit(1);
     }

})(); //(invoca a função imediatamente)


app.listen(3000, () => {
    console.log('rodando na porta 3000');
})