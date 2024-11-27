// Importamos las librerías necesarias
const express = require('express');
const dotenv = require('dotenv');
const hbs = require('hbs');

// Ejecutamos la configuración de dotenv para cargar las variables de entorno
dotenv.config();

// Creamos una instancia de express
const app = express();

// Definimos el puerto donde escuchará el servidor
const PORT = process.env.PORT_SERVER || 3000; // Establece un valor por defecto si no está definido en .env

// Configuramos Handlebars (hbs) como el motor de plantillas
app.set('view engine', 'hbs');

// Configuramos la carpeta de las vistas
app.set('views', __dirname + '/views');

// Rutas de la aplicación
app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/contacto', (req, res) => {
    res.render('contacto');
});

// Ruta que simula un error 500
app.get('/error500', (req, res, next) => {
    // Simulamos un error 500 lanzando una excepción
    const error = new Error('¡Algo salió mal en el servidor!');
    error.status = 500;
    next(error);  // Pasa el error al siguiente middleware
});

// Ruta que no existe arrojará un error 404
app.get('*', (req, res) => {
    res.status(404).send('<h1>Error 404: Página no encontrada</h1>');
});

// Middleware para manejar el error 500 en la misma página
app.use((err, req, res, next) => {
    // Imprime el error en la consola para depuración
    console.error(err.stack);  
    // Responde con una página de error personalizada
    res.status(err.status || 500).render('error', { 
        errorMessage: err.message || 'Error 500: Algo salió mal en el servidor' 
    });
});

// Iniciamos el servidor para escuchar en el puerto definido
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
