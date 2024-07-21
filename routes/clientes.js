const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// Obtener todos los clientes
router.get('/', clientesController.getAllClientes);

// Crear un nuevo cliente
router.post('/', clientesController.createCliente);

// Actualizar un cliente por ID
router.put('/:id', clientesController.updateCliente);

// Eliminar un cliente por ID
router.delete('/:id', clientesController.deleteCliente);

module.exports = router;
