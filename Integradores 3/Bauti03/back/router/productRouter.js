const express = require('express');
const router = express.Router();

// importamos body de express-validator para validar los campos
const { body, validationResult } = require('express-validator');

// librería para encriptar contraseñas
const bcrypt = require('bcrypt');

//importamos el esquema del usuario
const Product = require('../models/productModel');

// responde a la ruta '/producto'

// ruta para loguear un usuario
router.post("/login", async (req, res) => {

    const {nombre, precio} = req.body

    console.log(nombre, precio);

    // vemos si ya existe el usuario
    const productoExiste = await Product.findOne({ nombre })
    console.log(productoExiste);

});

// obtenemos todos los usuarios
router.get("/", async (req, res) => {
    try {
        const producto = await Product.find();
        return res.status(200).json(producto);
    } catch (error) {
        console.log('Error al obtener los productos:', error);
        return res.status(400).json({ message: 'Error al obtener los productos' });
    }
});

// obtener producto por id
router.get("/:id", async (req, res) => {
    try {
        const producto = await Product.findById(req.params.id);
        if(!producto) return res.status(404).json({ message: 'Producto no encontrado'});
        res.json(producto)
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener el producto' });
    }
});

// eliminamos un usuario
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        console.log(id);
        
        await Product.findByIdAndDelete(id);
        return res.status(200).json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        console.log('Error al eliminar el producto:', error);
        return res.status(400).json({ message: 'Error al eliminar el producto' });
    }
});


// ruta para registrar un usuario
router.post("/register",
    [
        body('nombre')
            .isLength({ min: 2, max: 20 }).withMessage('El producto debe tener entre 2 y 20 caracteres')
            .notEmpty().withMessage('El nombre es obligatorio')
            .isString().withMessage('El nombre debe ser de tipo texto')
            .trim(),
        body('precio')
            .notEmpty().withMessage('El precio es obligatorio')
            .isNumeric().withMessage('El precio tiene que existir'),
        body('stock')
            .isNumeric().withMessage('El stock debe ser de tipo numerico')
            .notEmpty().withMessage('El stock es obligatorio'),
        body('descripcion')
            .notEmpty().withMessage('La descripción es obligatorio')
            .isString().withMessage('La descripción debe ser de tipo texto')
            .trim(),
        body('imagen')
            .notEmpty().withMessage('La imagen es obligatoria')
            .isString().withMessage('La imagen debe ser de tipo texto')

    ]
    , async (req, res) => {

        const errores = validationResult(req);

        const { nombre, precio, stock, descripcion, imagen } = req.body;


        console.log(errores)


        const producto = {
            nombre,
            precio,
            stock,
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

            return res.status(201).json({ message: 'Producto cargado correctamente' });


        } catch (error) {

            console.log('Error al cargar el producto:', error);
            return res.status(400).json({ message: 'Error al cargar el producto' });
        }

    });


    router.put("/editar/:id", 
        [
            body('nombre')
            .isLength({ min: 2, max: 20 }).withMessage('El producto debe tener entre 2 y 20 caracteres')
            .notEmpty().withMessage('El nombre es obligatorio')
            .isString().withMessage('El nombre debe ser de tipo texto')
            .trim(),
        body('precio')
            .notEmpty().withMessage('El precio es obligatorio')
            .isNumeric().withMessage('El precio tiene que existir'),
        body('stock')
            .isNumeric().withMessage('El stock debe ser de tipo numerico')
            .notEmpty().withMessage('El stock es obligatorio'),
        body('descripcion')
            .notEmpty().withMessage('La descripción es obligatorio')
            .isString().withMessage('La descripción debe ser de tipo texto')
            .trim(),
        body('imagen')
            .notEmpty().withMessage('La imagen es obligatoria')
            .isString().withMessage('La imagen debe ser de tipo texto')
        ], 
        async (req, res) => {
            const { id } = req.params;
            const { nombre, precio, stock, descripcion, imagen } = req.body;
    
            // Validar los posibles errores en los datos enviados
            const errores = validationResult(req);
            if (!errores.isEmpty()) {
                return res.status(400).json({ errores: errores.array() });
            }
    
            try {
                // Buscar el producto a editar
                const producto = await Product.findById(id);
                if (!producto) {
                    return res.status(404).json({ message: 'Producto no encontrado' });
                }
    
                // Actualizar los campos del usuario
                producto.nombre = nombre || producto.nombre;
                producto.precio = precio || producto.precio;
                producto.stock = stock || producto.stock;
                producto.descripcion = descripcion || producto.descripcion;
                producto.imagen = imagen || producto.imagen;
    
                // Guardar el producto actualizado
                await producto.save();
    
                return res.status(200).json({ message: 'Producto actualizado correctamente' });
            } catch (error) {
                console.log('Error al actualizar el producto:', error);
                return res.status(400).json({ message: 'Error al actualizar el Producto' });
            }
        }
    );


module.exports = router; //ES5