const express = require('express')
const path = require('path')

const routes = express.Router();

const basePath = path.join(__dirname, 'templates')

routes.use(express.static('public'))

routes.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

routes.get('/404', (req, res) => {
    res.status(404).sendFile(`${basePath}/404.html`);
});

routes.use((req, res) => {
    res.redirect('/404');
})

module.exports = routes;