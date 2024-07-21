const express = require('express');
const router = express.Router();
const vehiculosController = require('../controllers/vehiculosController');

// Obtener todos los vehículos
router.get('/', vehiculosController.getAllVehiculos);

// Crear un nuevo vehículo
router.post('/', vehiculosController.createVehiculo);

// Actualizar un vehículo por ID
router.put('/:id', vehiculosController.updateVehiculo);

// Eliminar un vehículo por ID
router.delete('/:id', vehiculosController.deleteVehiculo);

module.exports = router;
