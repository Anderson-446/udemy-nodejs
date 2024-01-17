const express = require('express');
const exphbs = require('express-handlebars');
const { partials } = require('handlebars');

const app = express();

const hbs = exphbs.create( {
    partialsDir:['views/partials'],
})

app.engine('handlebars', hbs.engine);
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

app.get('/blog', (req, res) => {
    const posts = [
        {
            title:"Utilizando partials",
            category:"A categoria é tristeza, amigos",
            body:"Não é verdade.",
            comments:4
        },
        {
            title:"Utilizando parciais",
            category:"A categoria é felicidade, amigos",
            body:"Não é mentira.",
            comments:2
        },
        {
            title:"Utilizando poemas",
            category:"poesia",
            body:"A vida não é uma mentira",
            comments:6
        }
    ]

    res.render('blog', { posts })
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