const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

    const items = ["Item a", "Item b", "Item c"]

    res.render('dashboard', {items})
})

app.get('/post', (req, res) => {

    const post = {
        title:'Aprender Node.js',
        category:'JavaScript',
        body:'Já estou enjoado desse professor. (Não por culpa dele)',
        comments: 15,
    }

    res.render('blogpost', {post})
})

app.get('/', (req, res) => {

    const user = {
        name: "Anderson",
        surname: "Emanoel",
        age:30
    }
    const auth = true;
    const palavra = "TESTE"
    const approved = false;


    res.render('home', { user:user, palavra, auth, approved })
})

app.listen(3000, () => {
    console.log('rodando na porta 3000');
})