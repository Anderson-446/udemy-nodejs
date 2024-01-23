const express = require('express')
const exphbs = require('express-handlebars')
const { Client } = require('pg')

const app = express()

//configurar express para ler o body
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())

//configurar engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//configurar style.css
app.use(express.static('public'))


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

//rotas -> deveria estar criando um arquivo à parte
app.get('/', (req, res) => {
    res.render('home')
})

//CREATE
app.post('/books/insertbook', (req, res) => {

    const title = req.body.title;
    const num_p = req.body.num_p;

    (async () => {

        try {

            const query = 'INSERT INTO books (title, num_p) VALUES ($1, $2) RETURNING *';
            const values = [title, num_p];

            const result = await conn.query(query, values);

            console.log('Dados inseridos:', result.rows[0]);
            res.redirect('/')
        } catch (error) {
            console.log(error);
            res.redirect('/')
        }
    })();
  
})
//READ -> SELECT
app.get('/books', (req, res) => {

    (async () => {
        try {

            const query = 'SELECT * FROM books ORDER BY books_id ASC';
            const result = await conn.query(query);
            const books = result.rows;
            console.log(books);
            res.render('books', { books });
    
        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    })();

})
//SELECT INDIVIDUAL
app.get('/books/:id', (req, res) => {
    
    (async () => {

        const id = req.params.id
        try {

            const query = `SELECT * FROM books WHERE books_id = ${id}`
            const result = await conn.query(query)
            const book = result.rows[0];
            res.render('book', { book })
            
        } catch (error) {
            console.log(error);
        }
    })();

});
//EDIT
app.get('/books/edit/:id', (req, res) => {

    (async () => {

        const id = req.params.id;
        try {

            const query = `SELECT * FROM books WHERE books_id = ${id}`;
            const result = await conn.query(query);
            const book = result.rows[0];
            res.render('editBook', { book })

        } catch (error) {

            console.log(error);

        }

    })();
})
//POST PARA UPDATE
app.post('/books/updateBook', (req,res) => {
    
    (async () => {
        const id = req.body.id;
        const title = req.body.title;
        const num_p = req.body.num_p;

        try {
            const query = `UPDATE books SET title = $1, num_p = $2 WHERE books_id = $3 `;
            const values = [title, num_p, id];
            await conn.query(query, values);
            res.redirect('/books')
        } catch (error) {
            console.log(error);
        }

    })();

})

app.listen(3000, () => {
    console.log('rodando na porta 3000');
})