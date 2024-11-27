const express = require('express');
const hbs =require('hbs');
const bodyParser = require('body-parser');
const path = require('path');
const morgan =require('morgan');
//2.
const app = express();

//4.configuramos middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('combined'));


/* app.get('/error', (req, res)=>{
    throw new Error('Error forzado');
}) */

app.use((err, req, res, next) => {
    console.error(err.stack); 
    res.status(500).render("error", {
        error: err.message, 
    });
});


app.set('view engine','hbs');
app.set('views', path.join(__dirname,'views'));
hbs.registerPartials(path.join(__dirname, "views/partials"));
app.use(express.static(path.join(__dirname, 'public')));

//6. rutas
app.get("/index", (req, res)=>{
    res.render("index");
});

app.get("/contact",(req, res) =>{
    res.render("contact");
});

app.get("/about",(req, res) =>{
    res.render("about");
});

app.use((req, res) => {
    res.status(404).render("error", {
        codigo: 404,
        mensaje: "Página no encontrada",
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render("error", {
        codigo: 500,
        mensaje: "Error interno del servidor",
    });
});

module.exports =app;
