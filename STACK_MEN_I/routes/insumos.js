// routes/insumos.js
const express = require('express');
const router = express.Router();
const insumoController = require('../controllers/insumoController');

router.get('/', insumoController.mostrar);
router.post('/crear', insumoController.crear);
router.post('/editar', insumoController.editar);
router.get('/borrar/:id', insumoController.borrar);

module.exports = router;

