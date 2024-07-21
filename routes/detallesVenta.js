const express = require('express');
const router = express.Router();
const detallesVentaController = require('../controllers/detallesVentaController');

// Obtener todos los detalles de venta
router.get('/', detallesVentaController.getAllDetallesVenta);

// Crear un nuevo detalle de venta
router.post('/', detallesVentaController.createDetalleVenta);

// Actualizar un detalle de venta por ID
router.put('/:id', detallesVentaController.updateDetalleVenta);

// Eliminar un detalle de venta por ID
router.delete('/:id', detallesVentaController.deleteDetalleVenta);

module.exports = router;
