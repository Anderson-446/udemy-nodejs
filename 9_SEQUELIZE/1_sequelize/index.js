const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn.js')
const User = require('./models/User.js')
const Address = require('./models/Address.js')

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

//create
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
//read one
app.get('/users/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({ raw: true, where: {id: id} })

    res.render('userview', {user})
})

//delete
app.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id

    await User.destroy({ where: {id: id} })

    res.redirect('/')
})

//edit
app.get('/users/edit/:id', async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findOne({ include: Address, where: {id: id} })

        res.render('useredit', {user: user.get({ plain: true })})

    } catch (error) {
        console.log(error);
    }

})

app.post('/users/update', async (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    const userData = {
        name:name,
        occupation:occupation,
        newsletter:newsletter
    }

    await User.update(userData, { where: {id: id} })

    res.redirect('/')

})
//adicionar endereço com relação por id
app.post('/address/create', async (req, res) =>{
    const UserId = req.body.UserId
    const street = req.body.street
    const number = req.body.number
    const city = req.body.city
    
    const address = {
        UserId,
        street,
        number,
        city,
    }

    await Address.create(address)

    res.redirect(`/users/edit/${UserId}`)
})

app.post('/address/delete', async (req, res) => {
    const UserId = req.body.UserId
    const id = req.body.id

    try {

        await Address.destroy({
            where: { id:id }
        })
        res.redirect(`/users/edit/${UserId}`)
    } catch (error) {
        console.log(error);
    }
})

//start
async function startServer() {
    try {
        await conn.sync();
        app.listen(3000);
    } catch (err) {
        console.log(err);
    }
}

startServer();