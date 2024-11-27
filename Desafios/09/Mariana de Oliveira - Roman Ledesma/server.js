const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

//html
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/contact.html'));
});

//hbs
app.get('/hbs/index', (req, res) => {
    res.render('index', { title: 'Index Page' });
});

app.get('/hbs/about', (req, res) => {
    res.render('about', { title: 'About Page' });
});

app.get('/hbs/contact', (req, res) => {
    res.render('contact', { title: 'Contact Page' });
});

//error 404
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public/404.html'));
});


//error 505, hay que modificar archivo en server.js para que salga el error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('<h1>Error 500: Error interno del servidor</h1>');
});

// Inicia el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
