const express = require('express');
const router = express.Router();
const comprasController = require('../controllers/comprasController');

// Obtener todas las compras
router.get('/', comprasController.getAllCompras);

// Crear una nueva compra
router.post('/', comprasController.createCompra);

// Actualizar una compra por ID
router.put('/:id', comprasController.updateCompra);

// Eliminar una compra por ID
router.delete('/:id', comprasController.deleteCompra);

module.exports = router;
