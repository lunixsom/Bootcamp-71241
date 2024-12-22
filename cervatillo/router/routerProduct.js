const express = require('express');
const router = express.Router();

const Producto = require('../models/productModel');

//CRUD de Productos que responde a la ruta '/product'

router.get("/", async (req, res) => {

    const productos = await Producto.find();

    res.render("listadoProductos", {
        productos
    });
    
});

router.get("/formulario", async (req, res) => {
    res.render("formProductos");
});

router.post("/register", async (req, res) => {

    let { nombreProducto, precioProducto, stockProducto } = req.body;

    precioProducto = parseInt(precioProducto);
    stockProducto = parseInt(stockProducto);

    const producto = {
        nombreProducto,
        precioProducto,
        stockProducto
    }

    console.log(producto);

    const nuevoProducto = new Producto(producto);
    await nuevoProducto.save();

    res.render('productoCreado', {
        mensaje: 'Producto creado con éxito'
    }); 

});






module.exports = router; //ES5