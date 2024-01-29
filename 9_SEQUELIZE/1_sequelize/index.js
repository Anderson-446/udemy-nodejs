const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn.js')
const User = require('./models/User.js')

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

//rotas
app.get('/', async (req, res) => {

    const users = await User.findAll({raw: true})

    console.log(users);

    res.render('home', {users: users})
});

app.get('/users/create', (req, res) => {
    res.render('adduser')
});

app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter ==="on") {
        newsletter = true;
    } else {
        newsletter = false;
    }

    console.log(req.body);
    await User.create({name, occupation, newsletter})
    res.redirect('/')
})

async function startServer() {
    try {
        await conn.sync();
        app.listen(3000);
    } catch (err) {
        console.log(err);
    }
}startServer()