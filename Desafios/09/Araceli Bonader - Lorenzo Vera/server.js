const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const PORT = 3000;


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


// Middleware que permite usar archivos estáticos en la carpeta Public

app.use(express.static(path.join(__dirname, 'public'))); 


app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});


app.get("/index", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.use((req, res) => {
    res.status(404).send("<h1>Error 404: Página no encontrada</h1>");
});


app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send("<h1>Error 500: Ocurrió un error interno en el servidor</h1>");
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

