const insumos = [];

// Obtener todos los insumos
exports.getAllInsumos = (req, res) => {
    res.json(insumos);
};

// Crear un nuevo insumo
exports.createInsumo = (req, res) => {
    const insumo = {
        id: insumos.length + 1,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        almacenID: req.body.almacenID
    };
    insumos.push(insumo);
    res.status(201).json(insumo);
};

// Actualizar un insumo por ID
exports.updateInsumo = (req, res) => {
    const id = parseInt(req.params.id);
    const insumoIndex = insumos.findIndex(i => i.id === id);

    if (insumoIndex !== -1) {
        insumos[insumoIndex] = {
            ...insumos[insumoIndex],
            ...req.body
        };
        res.json(insumos[insumoIndex]);
    } else {
        res.status(404).json({ message: "Insumo no encontrado" });
    }
};

// Eliminar un insumo por ID
exports.deleteInsumo = (req, res) => {
    const id = parseInt(req.params.id);
    const insumoIndex = insumos.findIndex(i => i.id === id);

    if (insumoIndex !== -1) {
        const deletedInsumo = insumos.splice(insumoIndex, 1);
        res.json(deletedInsumo);
    } else {
        res.status(404).json({ message: "Insumo no encontrado" });
    }
};
