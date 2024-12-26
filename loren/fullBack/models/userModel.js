const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const userSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    }, 
    email: { 
        type: String,
        required: [true, 'El email es obligatorio'],
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    plan: {
        type: String,
        required: [true, 'Seleccionar el plan es obligatorio'],
    },
    sociedad: {
        type: String,
        required: [true, 'La sociedad médica es obligatoria'],
    },
    date: {
        type: Date,
        default: new Date()
    },
});

// Middleware para cifrar contraseñas
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Método para comparar contraseñas
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Índices
userSchema.index({ email: 1 });

module.exports = mongoose.model('User', userSchema);