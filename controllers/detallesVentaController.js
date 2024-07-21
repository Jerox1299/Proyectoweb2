const detallesVenta = [];

// Obtener todos los detalles de venta
exports.getAllDetallesVenta = (req, res) => {
    res.json(detallesVenta);
};

// Crear un nuevo detalle de venta
exports.createDetalleVenta = (req, res) => {
    const detalleVenta = {
        id: detallesVenta.length + 1,
        compraID: req.body.compraID,
        productoID: req.body.productoID,
        tipoProducto: req.body.tipoProducto,
        cantidad: req.body.cantidad,
        precioUnitario: req.body.precioUnitario
    };
    detallesVenta.push(detalleVenta);
    res.status(201).json(detalleVenta);
};

// Actualizar un detalle de venta por ID
exports.updateDetalleVenta = (req, res) => {
    const id = parseInt(req.params.id);
    const detalleVentaIndex = detallesVenta.findIndex(dv => dv.id === id);

    if (detalleVentaIndex !== -1) {
        detallesVenta[detalleVentaIndex] = {
            ...detallesVenta[detalleVentaIndex],
            ...req.body
        };
        res.json(detallesVenta[detalleVentaIndex]);
    } else {
        res.status(404).json({ message: "Detalle de venta no encontrado" });
    }
};

// Eliminar un detalle de venta por ID
exports.deleteDetalleVenta = (req, res) => {
    const id = parseInt(req.params.id);
    const detalleVentaIndex = detallesVenta.findIndex(dv => dv.id === id);

    if (detalleVentaIndex !== -1) {
        const deletedDetalleVenta = detallesVenta.splice(detalleVentaIndex, 1);
        res.json(deletedDetalleVenta);
    } else {
        res.status(404).json({ message: "Detalle de venta no encontrado" });
    }
};
