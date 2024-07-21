const express = require('express');
const router = express.Router();
const almacenesController = require('../controllers/almacenesController');

// Rutas para la entidad Almacén
router.get('/', almacenesController.obtenerAlmacenes);
router.post('/', almacenesController.crearAlmacen);
router.put('/:id', almacenesController.actualizarAlmacen);
router.delete('/:id', almacenesController.eliminarAlmacen);

module.exports = router;
