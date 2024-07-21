const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleadosController');

// Obtener todos los empleados
router.get('/', empleadosController.getAllEmpleados);

// Crear un nuevo empleado
router.post('/', empleadosController.createEmpleado);

// Actualizar un empleado por ID
router.put('/:id', empleadosController.updateEmpleado);

// Eliminar un empleado por ID
router.delete('/:id', empleadosController.deleteEmpleado);

module.exports = router;
