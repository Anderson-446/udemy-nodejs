const express = require('express');
const path = require('path');

const router = express.Router();

const basePath = path.join(__dirname, '../templates')

router.use(
    express.urlencoded({
        extended: true,
    }),
)
router.use(express.json())

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

router.post(`/save`, (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`);

    res.sendFile(`${basePath}/userForm.html`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(`Buscando pelo usuário ${id}`);
    res.sendFile(`${basePath}/users.html`)
})

router.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

module.exports = router;