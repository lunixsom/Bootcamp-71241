const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = 3000;

// Configuración del motor de plantillas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Configuración de la carpeta pública para archivos estáticos
/* app.use(express.static(path.join(__dirname, 'public'))); */

// Rutas
app.get('/index', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Manejo de rutas no válidas (error 404)
app.use((req, res, next) => {
  res.status(404).send('<h1>Error 404: Página no encontrada</h1>');
});

// Manejo de errores internos (error 500)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('<h1>Error 500: Algo salió mal en el servidor</h1>');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});