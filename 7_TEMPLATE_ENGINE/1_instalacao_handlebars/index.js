const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars') //define o mecanismo de visualização para handlebars
//então sempre que renderizarmos uma página, o express irá procurar por um arquivo chamado nome.handlebars

app.get('/', (req, res) => {
    res.render('home', { layout: false })
})//utilizamos o layout: false porque não temos layout ainda, mas iremos remover no futuro

app.listen(3000, () => {
    console.log('rodando na porta 3000');
})