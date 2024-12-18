/* const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.post('/', inventoryController.createInventory); // POST - Crear inventario
router.get('/', inventoryController.getInventories);  // GET - Obtener inventarios
router.delete('/:id', inventoryController.deleteInventory); // DELETE - Eliminar inventario
router.put('/:id', inventoryController.updateInventory); // PUT - Actualizar inventario

module.exports = router;
 */


const express = require('express');
const router = express.Router();

// importamos body de express-validator para validar los campos
const { body, validationResult } = require('express-validator');

//importamos el esquema del usuario
const Product = require('../models/productModel');

// responde a la ruta '/product'

// ruta para loguear un usuario
/* router.post("/login", async (req, res) => {

    const { email, password } = req.body

    console.log(email, password); */

    // vemos si ya existe el usuario
/*     const usuarioExiste = await Product.findOne({ email })
    console.log(usuarioExiste);

}); */

// obtenemos todos los usuarios
router.get("/", async (req, res) => {
    try {
        const productos = await Product.find();
        return res.status(200).json(productos);
    } catch (error) {
        console.log('Error al obtener los usuarios:', error);
        return res.status(400).json({ message: 'Error al obtener los productos' });
    }
});

// eliminamos un usuario
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


// ruta para registrar un usuario
router.post("/register",
    [
        body('nombreProducto')
            .notEmpty().withMessage('El nombre es obligatorio')
            .isString().withMessage('El nombre debe ser de tipo texto')
            .trim(),
        body('precio')
            .isNumeric().withMessage('El valor ingresado debe ser numerico')
            .notEmpty().withMessage('El nombre es obligatorio')
            .trim(),
        body('cantidad')
            .isNumeric().withMessage('El valor ingresado debe ser numerico')
            .notEmpty().withMessage('El nombre es obligatorio')
            .trim(),

    ]
    , async (req, res) => {

        const errores = validationResult(req);

        const { nombreProducto, precio, cantidad } = req.body;


        console.log(errores)


        const producto = {
            nombreProducto,
            precio,
            cantidad
        }

        console.log(producto);


        try {

            if (!errores.isEmpty()) {
                return res.status(404).json({ message: 'Error al enviar los datos' });
            }
            
            const productoExiste = await Product.findOne({ nombreProducto })
            console.log(productoExiste);

            const newProduct = new Product(producto);

            await newProduct.save(); 

            return res.status(201).json({ message: 'Producto registrado correctamente' });


        } catch (error) {

            console.log('Error al registrar el Producto:', error);
            return res.status(400).json({ message: 'Error al registrar el producto' });
        }

    });

module.exports = router; //ES5