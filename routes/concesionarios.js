const express = require('express');
const router = express.Router();
const concesionariosController = require('../controllers/concesionariosController');

// Obtener todos los concesionarios
router.get('/', concesionariosController.getAllConcesionarios);

// Crear un nuevo concesionario
router.post('/', concesionariosController.createConcesionario);

// Actualizar un concesionario por ID
router.put('/:id', concesionariosController.updateConcesionario);

// Eliminar un concesionario por ID
router.delete('/:id', concesionariosController.deleteConcesionario);

module.exports = router;
