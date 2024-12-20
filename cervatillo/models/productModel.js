

const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    nombreProducto: {
        type: String,
        required: true,
    }, 
    precioProducto: { 
        type: Number,
        required: true,
    },
    stockProducto: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: new Date()
    },
});

module.exports = mongoose.model('Productos', productSchema);