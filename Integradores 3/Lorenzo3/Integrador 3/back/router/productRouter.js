const express = require('express');
const router = express.Router();

// importamos body de express-validator para
const { body, validationResult } = require('express-validator');

//importamos el esquema del producto
const Product = require('../models/productModel');

router.get("/", async (req, res) => {
    try {
        const productos = await Product.find();
        return res.status(200).json(productos);
    } catch (error) {
        console.log('Error al obtener los usuarios:', error);
        return res.status(400).json({ message: 'Error al obtener los productos' });
    }
});

router.post("/register",
    [
        body('nombre')
            .isLength({ min: 3, max: 20 }).withMessage('El nombre debe tener entre 3 y 20 caracteres')
            .notEmpty().withMessage('El nombre es obligatorio')
            .isString().withMessage('El nombre debe ser de tipo texto')
            .trim(),
        body('precio')
            .isNumeric().withMessage('El valor debe ser numerico')
            .notEmpty().withMessage('El nombre es obligatorio')
            .trim(),
        body('descripcion')
            .notEmpty().withMessage('El campo descripcion es obligatorio')
            .isString().withMessage('El campo debe ser de tipo texto')
            .trim(),
        body('imagen')
            .notEmpty().withMessage('El campo imagen es obligatorio')
            .isString().withMessage('El link debe ser de tipo texto')
            .trim(),

    ]
    , async (req, res) => {

        const errores = validationResult(req);

        const { nombre, precio, descripcion, imagen } = req.body;


        console.log(errores)


        const producto = {
            nombre,
            precio,
            descripcion,
            imagen
        }

        console.log(producto);


        try {

            if (!errores.isEmpty()) {
                return res.status(404).json({ message: 'Error al enviar los datos' });
            }
            
            const productoExiste = await Product.findOne({ nombre })
            console.log(productoExiste);

            const newProduct = new Product(producto);

            await newProduct.save(); 

            return res.status(201).json({ message: 'Producto registrado correctamente' });


        } catch (error) {

            console.log('Error al registrar el producto:', error);
            return res.status(400).json({ message: 'Error al registrar el producto' });
        }

    });

    
module.exports = router; //ES5