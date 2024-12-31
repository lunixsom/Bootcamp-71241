const express = require('express');
const router = express.Router();

const Product = require('../models/productModel');

const { body, validationResult } = require('express-validator');

router.get("/", async (req, res) => {
    try {
        const productos = await Product.find();
        return res.status(200).json(productos);
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


router.put("/editar/:id", 
[
    body('nombre')
        .optional()
        .isLength({ min: 3, max: 20 }).withMessage('El nombre debe tener entre 3 y 20 caracteres')
        .isString().withMessage('El nombre debe ser de tipo texto')
        .trim(),
    body('precio')
        .isNumeric().withMessage('El valor debe ser tipo numerico')
        .trim(),
    body('imagen')
        .isString().withMessage('El campo debe ser de tipo texto')
        .trim(),
], 
async (req, res) => {
    const { id } = req.params;
    const { nombre, precio, imagen } = req.body;

    // Validar los posibles errores en los datos enviados
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    try {
        // Buscar el usuario a editar
        const producto = await Product.findById(id);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        // Si se pasa un nuevo password, lo encriptamos
/*                 if (password) {
            const salt = bcrypt.genSaltSync(10);
            usuario.password = await bcrypt.hashSync(password, salt);
        } */

        // Actualizar los campos del usuario
        producto.nombre = nombre || producto.nombre;
        producto.precio = precio || producto.precio;
        producto.imagen = imagen || producto.imagen;

        // Guardar el usuario actualizado
        await producto.save();

        return res.status(200).json({ message: 'Producto actualizado correctamente' });
    } catch (error) {
        console.log('Error al actualizar el producto jaja:', error);
        return res.status(400).json({ message: 'Error al actualizar el producto' });
    }
}
);


// eliminamos un producto
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        console.log(id);
        
        await Product.findByIdAndDelete(id);
        return res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.log('Error al eliminar el usuario:', error);
        return res.status(400).json({ message: 'Error al eliminar el usuario' });
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
        body('imagen')
            .notEmpty().withMessage('El campo imagen es obligatorio')
            .isString().withMessage('El link debe ser de tipo texto')
            .trim(),

    ]
    , async (req, res) => {

        const errores = validationResult(req);

        const { nombre, precio, imagen } = req.body;


        console.log(errores)


        const producto = {
            nombre,
            precio,
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