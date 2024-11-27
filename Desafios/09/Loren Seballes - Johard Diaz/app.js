const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

const routerHome = require('./router/routerHome');
const routerContact = require('./router/routerContact');
const routerAbout = require('./router/routerAbout');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use('/', routerHome);
app.use('/contact', routerContact);
app.use('/about', routerAbout);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render("error",
        {
            error: err.message,
        }
    );
});


app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.get("/*", (req, res) => {
    res.status(404).render("error",
        {
            error: "404 - Página no encontrada",
        }
    );
});


module.exports = app;
