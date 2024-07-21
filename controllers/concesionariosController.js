const concesionarios = [];

// Obtener todos los concesionarios
exports.getAllConcesionarios = (req, res) => {
    res.json(concesionarios);
};

// Crear un nuevo concesionario
exports.createConcesionario = (req, res) => {
    const concesionario = {
        id: concesionarios.length + 1,
        nombre: req.body.nombre,
        direccion: req.body.direccion
    };
    concesionarios.push(concesionario);
    res.status(201).json(concesionario);
};

// Actualizar un concesionario por ID
exports.updateConcesionario = (req, res) => {
    const id = parseInt(req.params.id);
    const concesionarioIndex = concesionarios.findIndex(c => c.id === id);

    if (concesionarioIndex !== -1) {
        concesionarios[concesionarioIndex] = {
            ...concesionarios[concesionarioIndex],
            ...req.body
        };
        res.json(concesionarios[concesionarioIndex]);
    } else {
        res.status(404).json({ message: "Concesionario no encontrado" });
    }
};

// Eliminar un concesionario por ID
exports.deleteConcesionario = (req, res) => {
    const id = parseInt(req.params.id);
    const concesionarioIndex = concesionarios.findIndex(c => c.id === id);

    if (concesionarioIndex !== -1) {
        const deletedConcesionario = concesionarios.splice(concesionarioIndex, 1);
        res.json(deletedConcesionario);
    } else {
        res.status(404).json({ message: "Concesionario no encontrado" });
    }
};
