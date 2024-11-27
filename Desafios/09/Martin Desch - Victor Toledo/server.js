const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurando el motor de plantillas hbs
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
//--------------------------------------

// Configurando la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas para HTML estático
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Rutas para las plantillas HBS  OPCIONAL (No tiene logica dinamica implementada(no se pidio))
app.get('/hbs/index', (req, res) => {
    res.render('index');
});

app.get('/hbs/about', (req, res) => {
    res.render('about');
});

app.get('/hbs/contact', (req, res) => {
    res.render('contact');
});

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).send('404: Página no encontrada');
});

// Manejo de errores 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('500: Error interno del servidor');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});