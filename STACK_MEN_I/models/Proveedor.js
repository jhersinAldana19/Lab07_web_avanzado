const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema({
    idproveedor: { type: Number, required: true, unique: true },
    nombrecia: { type: String, required: true }
});

module.exports = mongoose.model('Proveedores', proveedorSchema);

