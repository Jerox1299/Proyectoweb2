const compras = [];

// Obtener todas las compras
exports.getAllCompras = (req, res) => {
    res.json(compras);
};

// Crear una nueva compra
exports.createCompra = (req, res) => {
    const compra = {
        id: compras.length + 1,
        fecha: req.body.fecha,
        clienteID: req.body.clienteID,
        empleadoID: req.body.empleadoID,
        precioTotal: req.body.precioTotal,
        detallesVenta: req.body.detallesVenta
    };
    compras.push(compra);
    res.status(201).json(compra);
};

// Actualizar una compra por ID
exports.updateCompra = (req, res) => {
    const id = parseInt(req.params.id);
    const compraIndex = compras.findIndex(c => c.id === id);

    if (compraIndex !== -1) {
        compras[compraIndex] = {
            ...compras[compraIndex],
            ...req.body
        };
        res.json(compras[compraIndex]);
    } else {
        res.status(404).json({ message: "Compra no encontrada" });
    }
};

// Eliminar una compra por ID
exports.deleteCompra = (req, res) => {
    const id = parseInt(req.params.id);
    const compraIndex = compras.findIndex(c => c.id === id);

    if (compraIndex !== -1) {
        const deletedCompra = compras.splice(compraIndex, 1);
        res.json(deletedCompra);
    } else {
        res.status(404).json({ message: "Compra no encontrada" });
    }
};
