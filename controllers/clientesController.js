const clientes = [];

// Obtener todos los clientes
exports.getAllClientes = (req, res) => {
    res.json(clientes);
};

// Crear un nuevo cliente
exports.createCliente = (req, res) => {
    const cliente = {
        id: clientes.length + 1,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        concesionarioID: req.body.concesionarioID
    };
    clientes.push(cliente);
    res.status(201).json(cliente);
};

// Actualizar un cliente por ID
exports.updateCliente = (req, res) => {
    const id = parseInt(req.params.id);
    const clienteIndex = clientes.findIndex(c => c.id === id);

    if (clienteIndex !== -1) {
        clientes[clienteIndex] = {
            ...clientes[clienteIndex],
            ...req.body
        };
        res.json(clientes[clienteIndex]);
    } else {
        res.status(404).json({ message: "Cliente no encontrado" });
    }
};

// Eliminar un cliente por ID
exports.deleteCliente = (req, res) => {
    const id = parseInt(req.params.id);
    const clienteIndex = clientes.findIndex(c => c.id === id);

    if (clienteIndex !== -1) {
        const deletedCliente = clientes.splice(clienteIndex, 1);
        res.json(deletedCliente);
    } else {
        res.status(404).json({ message: "Cliente no encontrado" });
    }
};
