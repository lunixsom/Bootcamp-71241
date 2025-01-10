
//  Importamos los módulos necesarios
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

// importamos las rutas de la aplicación
const userRouter = require('./router/userRouter');
const conexion = require('./conexion/conexion');




// Importamos la variable de entorno
const PORT = process.env.PORT || 3000;
const MONGO_LOCAL = process.env.MONGO_LOCAL;
const MONGO_ATLAS = process.env.MONGO_ATLAS;

//  Creamos una instancia de express
const app = express();


//  Configuaración de middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev')); 
app.use(cors());


// Rutas de la aplicación como middleware
// app.use('/', userRouter);
app.use('/user', userRouter);
/* app.use('/login', userRouter);
app.use('/register', userRouter);
app.use('/reservar-hora', userRouter); */

// Seleccionar la URL de conexión
const URL = MONGO_ATLAS;

if (!URL) {
    console.error('Error: No se encontró ninguna URL de conexión en las variables de entorno.');
    process.exit(1);
}

//conexion();   
conexion(URL);


app.get("/", (req, res) => {
    res.send(`<h1>Bienvenido a la Api Rest</h1>`);
});


// levantar el server y otra forma de manejo del error
const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});

server.on('error', (error) => {
    console.log(`Error en el servidor: ${error}`)
});