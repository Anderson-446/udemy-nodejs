const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create( {
    partialsDir:['views/partials'],
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const posts = [
    {
        id:1,
        title:'Felicidade',
        content:'A felicidade é uma conquista, não um estado de espírito.',
        comments:0
    },
    {
        id:2,
        title:'Oceanos',
        content:'Oceanos atemporais se abrem perante mim e sussuram: Jhin, nós somos sua verdadeira face!',
        comments:4
    },
    {
        id:3,
        title:'Dor',
        content:'A dor é um estado de espírito que não pode ser alcançado por meio de guerras.',
        comments:0
    },
    {
        id:4,
        title:'Paz',
        content:'A paz é um estado de espírito que não pode ser alcançado por meio de guerras.',
        comments:0
    }
]
app.get('/', (req, res) => {

    res.render('home', { posts })
})

app.get('/post/:id', (req, res) => {

    const post = posts[parseInt(req.params.id) - 1] // -1 pois o id começa em 1 e o array em 0

    res.render('post', {post})
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})