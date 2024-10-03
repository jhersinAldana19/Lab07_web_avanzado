// routes/proveedores.js
const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

router.get('/', proveedorController.mostrar);
router.post('/crear', proveedorController.crear);
router.post('/editar', proveedorController.editar);
router.get('/borrar/:id', proveedorController.borrar);

module.exports = router;
