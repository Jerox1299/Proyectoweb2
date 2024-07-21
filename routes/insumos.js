const express = require('express');
const router = express.Router();
const insumosController = require('../controllers/insumosController');

// Obtener todos los insumos
router.get('/', insumosController.getAllInsumos);

// Crear un nuevo insumo
router.post('/', insumosController.createInsumo);

// Actualizar un insumo por ID
router.put('/:id', insumosController.updateInsumo);

// Eliminar un insumo por ID
router.delete('/:id', insumosController.deleteInsumo);

module.exports = router;
