/* const mongoose = require('mongoose');
const User = require('./userModel');  // Importar el modelo User

// Definir el esquema del inventario
const inventorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }  // Relación con el modelo User
  // Otros campos del inventario...
});

// Crear y exportar el modelo Inventory
const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
 */