const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');




// importamos body de express-validator para validar los campos
const { body, validationResult } = require('express-validator');


//importamos el esquema del usuario
const User = require('../models/userModel');


// ruta para loguear un usuario
router.post("/login", async (req, res) => {

    const { email, password } = req.body

    console.log(email, password);

    try {
        // Verificar si el usuario existe en la base de datos
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        // Comparar la contraseña ingresada con la almacenada
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        // Generar un token de autenticación
        const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
            expiresIn: '1h', // El token expira en 1 hora
        });

        // Responder al frontend con el token y la información del usuario
        res.status(200).json({
            token,
            user: {
                id: user._id,
                nombre: user.nombre,
                email: user.email,
            },
        });
    } catch (error) {
        console.error('Error al intentar iniciar sesión:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});


// obtener usuario por id
router.get("/:id", async (req, res) => {
    try {
        const usuario = await User.findById(req.params.id);
        if(!usuario) return res.status(404).json({ message: 'Usuario no encontrado'});
        res.json(usuario)
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener el usuario' });
    }
});


// obtenemos todos los usuarios
router.get("/", async (req, res) => {
    try {
        const usuarios = await User.find();
        return res.status(200).json(usuarios);
    } catch (error) {
        console.log('Error al obtener los usuarios:', error);
        return res.status(400).json({ message: 'Error al obtener los usuarios' });
    }
});


// eliminamos un usuario
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        console.log(id);
        
        await User.findByIdAndDelete(id);
        return res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.log('Error al eliminar el usuario:', error);
        return res.status(400).json({ message: 'Error al eliminar el usuario' });
    }
});


// ruta para registrar un usuario
router.post("/register",
    [
        body('nombre')
            .isLength({ min: 3, max: 20 }).withMessage('El nombre debe tener entre 3 y 20 caracteres')
            .notEmpty().withMessage('El nombre es obligatorio')
            .isString().withMessage('El nombre debe ser de tipo texto')
            .trim(),
        body('email')
            .isLength({ min: 3, max: 45 }).withMessage('El email debe tener entre 3 y 45 caracteres')
            .notEmpty().withMessage('El nombre es obligatorio')
            .isEmail().withMessage('El correo tiene que existir')
            .trim(),
        body('password')
            .isLength({ min: 8 }).withMessage('El password debe tener como mínimo 8 caracteres')
            .notEmpty().withMessage('El nombre es obligatorio')
            .isString().withMessage('El password debe ser de tipo texto')
            .trim(),
        body('plan')
            .notEmpty().withMessage('Obligatorio'),
        body('sociedad')
            .notEmpty().withMessage('Obligatorio')
            .isString().withMessage('Debe ser de tipo texto')
            .trim(),
            

    ]
    , async (req, res) => {

        const errores = validationResult(req);

        const { nombre, email, password, plan, sociedad } = req.body;


        console.log(errores)


        const persona = {
            nombre,
            email,
            password,
            plan,
            sociedad
        }

        console.log(persona);


        try {

            if (!errores.isEmpty()) {
                return res.status(404).json({ message: 'Error al enviar los datos' });
            }
            
            const usuarioExiste = await User.findOne({ email })
            console.log(usuarioExiste);

            
            const salt = bcrypt.genSaltSync(10);
            console.log(salt);

            persona.password = await bcrypt.hashSync(password, salt);
            console.log(persona.password);

            const newUser = new User(persona);

            await newUser.save(); 

            return res.status(201).json({ message: 'Usuario registrado correctamente' });


        } catch (error) {

            console.log('Error al registrar el usuario:', error);
            return res.status(400).json({ message: 'Error al registrar el usuario' });
        }

    });

    //Ruta para editar un usuario

    router.put("/:id", 
        [
            body('nombre')
                .optional()
                .isLength({ min: 3, max: 20 }).withMessage('El nombre debe tener entre 3 y 20 caracteres')
                .isString().withMessage('El nombre debe ser de tipo texto')
                .trim(),
            body('email')
                .optional()
                .isLength({ min: 3, max: 45 }).withMessage('El email debe tener entre 3 y 45 caracteres')
                .isEmail().withMessage('El correo tiene que existir')
                .trim(),
            body('password')
                .optional()
                .isLength({ min: 8 }).withMessage('El password debe tener como mínimo 8 caracteres')
                .isString().withMessage('El password debe ser de tipo texto')
                .trim(),
            body('plan')
                .optional()
                .notEmpty().withMessage('Obligatorio'),
            body('sociedad')
                .optional()
                .notEmpty().withMessage('Obligatorio')
                .isString().withMessage('Debe ser de tipo texto')
                .trim(),
        ], 
        async (req, res) => {
            const { id } = req.params;
            const { nombre, email, password, plan, sociedad } = req.body;
    
            // Validar los posibles errores en los datos enviados
            const errores = validationResult(req);
            if (!errores.isEmpty()) {
                return res.status(400).json({ errores: errores.array() });
            }
    
            try {
                // Buscar el usuario a editar
                const usuario = await User.findById(id);
                if (!usuario) {
                    return res.status(404).json({ message: 'Usuario no encontrado' });
                }
    
                // Si se pasa un nuevo password, lo encriptamos
                if (password) {
                    const salt = bcrypt.genSaltSync(10);
                    usuario.password = await bcrypt.hashSync(password, salt);
                }
    
                // Actualizar los campos del usuario
                usuario.nombre = nombre || usuario.nombre;
                usuario.email = email || usuario.email;
                usuario.plan = plan || usuario.plan;
                usuario.sociedad = sociedad || usuario.sociedad;
    
                // Guardar el usuario actualizado
                await usuario.save();
    
                return res.status(200).json({ message: 'Usuario actualizado correctamente' });
            } catch (error) {
                console.log('Error al actualizar el usuario jaja:', error);
                return res.status(400).json({ message: 'Error al actualizar el usuario' });
            }
        }
    );



module.exports = router; //ES5