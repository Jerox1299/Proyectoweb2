// Simulación de base de datos en memoria
let almacenes = [
    { id: 1, nombre: 'Almacén A', ubicacion: 'Ubicación A' },
    { id: 2, nombre: 'Almacén B', ubicacion: 'Ubicación B' }
];
let proximoId = 3;

/**
 * Obtener todos los almacenes.
 * @param {Request} req - Objeto de solicitud.
 * @param {Response} res - Objeto de respuesta.
 */
function obtenerAlmacenes(req, res) {
    res.json(almacenes);
}

/**
 * Crear un nuevo almacén.
 * @param {Request} req - Objeto de solicitud.
 * @param {Response} res - Objeto de respuesta.
 */
function crearAlmacen(req, res) {
    const { nombre, ubicacion } = req.body;
    const nuevoAlmacen = { id: proximoId++, nombre, ubicacion };
    almacenes.push(nuevoAlmacen);
    res.status(201).json(nuevoAlmacen);
}

/**
 * Actualizar un almacén existente.
 * @param {Request} req - Objeto de solicitud.
 * @param {Response} res - Objeto de respuesta.
 */
function actualizarAlmacen(req, res) {
    const id = parseInt(req.params.id);
    const { nombre, ubicacion } = req.body;
    const index = almacenes.findIndex(a => a.id === id);
    if (index !== -1) {
        almacenes[index] = { id, nombre, ubicacion };
        res.json(almacenes[index]);
    } else {
        res.status(404).json({ error: `No se encontró un almacén con id ${id}` });
    }
}

/**
 * Eliminar un almacén existente.
 * @param {Request} req - Objeto de solicitud.
 * @param {Response} res - Objeto de respuesta.
 */
function eliminarAlmacen(req, res) {
    const id = parseInt(req.params.id);
    const index = almacenes.findIndex(a => a.id === id);
    if (index !== -1) {
        almacenes.splice(index, 1);
        res.sendStatus(204);
    } else {
        res.status(404).json({ error: `No se encontró un almacén con id ${id}` });
    }
}

module.exports = {
    obtenerAlmacenes,
    crearAlmacen,
    actualizarAlmacen,
    eliminarAlmacen
};
