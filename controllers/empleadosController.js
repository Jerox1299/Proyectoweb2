const empleados = [];

// Obtener todos los empleados
exports.getAllEmpleados = (req, res) => {
    res.json(empleados);
};

// Crear un nuevo empleado
exports.createEmpleado = (req, res) => {
    const empleado = {
        id: empleados.length + 1,
        nombre: req.body.nombre,
        cargo: req.body.cargo,
        salario: req.body.salario,
        concesionarioID: req.body.concesionarioID
    };
    empleados.push(empleado);
    res.status(201).json(empleado);
};

// Actualizar un empleado por ID
exports.updateEmpleado = (req, res) => {
    const id = parseInt(req.params.id);
    const empleadoIndex = empleados.findIndex(e => e.id === id);

    if (empleadoIndex !== -1) {
        empleados[empleadoIndex] = {
            ...empleados[empleadoIndex],
            ...req.body
        };
        res.json(empleados[empleadoIndex]);
    } else {
        res.status(404).json({ message: "Empleado no encontrado" });
    }
};

// Eliminar un empleado por ID
exports.deleteEmpleado = (req, res) => {
    const id = parseInt(req.params.id);
    const empleadoIndex = empleados.findIndex(e => e.id === id);

    if (empleadoIndex !== -1) {
        const deletedEmpleado = empleados.splice(empleadoIndex, 1);
        res.json(deletedEmpleado);
    } else {
        res.status(404).json({ message: "Empleado no encontrado" });
    }
};
