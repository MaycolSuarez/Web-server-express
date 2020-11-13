const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

//express hbs engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'maycol',

    });

    //res.send('Hello World')
});

app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'May',

    });

    //res.send('Hello World')
});

app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
});