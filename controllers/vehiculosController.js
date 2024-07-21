const vehiculos = [];

// Obtener todos los vehículos
exports.getAllVehiculos = (req, res) => {
    res.json(vehiculos);
};

// Crear un nuevo vehículo
exports.createVehiculo = (req, res) => {
    const vehiculo = {
        id: vehiculos.length + 1,
        marca: req.body.marca,
        modelo: req.body.modelo,
        año: req.body.año,
        precio: req.body.precio,
        concesionarioID: req.body.concesionarioID
    };
    vehiculos.push(vehiculo);
    res.status(201).json(vehiculo);
};

// Actualizar un vehículo por ID
exports.updateVehiculo = (req, res) => {
    const id = parseInt(req.params.id);
    const vehiculoIndex = vehiculos.findIndex(v => v.id === id);

    if (vehiculoIndex !== -1) {
        vehiculos[vehiculoIndex] = {
            ...vehiculos[vehiculoIndex],
            ...req.body
        };
        res.json(vehiculos[vehiculoIndex]);
    } else {
        res.status(404).json({ message: "Vehículo no encontrado" });
    }
};

// Eliminar un vehículo por ID
exports.deleteVehiculo = (req, res) => {
    const id = parseInt(req.params.id);
    const vehiculoIndex = vehiculos.findIndex(v => v.id === id);

    if (vehiculoIndex !== -1) {
        const deletedVehiculo = vehiculos.splice(vehiculoIndex, 1);
        res.json(deletedVehiculo);
    } else {
        res.status(404).json({ message: "Vehículo no encontrado" });
    }
};
