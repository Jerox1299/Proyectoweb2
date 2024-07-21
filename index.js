const express = require('express');
const bodyParser = require('body-parser');

//Llamado de cada Router
const almacenesRoutes = require('./routes/almacenes');
const concesionariosRoutes = require('./routes/concesionarios');
const vehiculosRoutes = require('./routes/vehiculos');
const insumosRoutes = require('./routes/insumos');
const empleadosRoutes = require('./routes/empleados');
const clientesRoutes = require('./routes/clientes');
const comprasRoutes = require('./routes/compras');
const detallesVentaRoutes = require('./routes/detallesVenta');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.json());

// Rutas
app.use('/api/almacenes', almacenesRoutes);
app.use('/api/concesionarios', concesionariosRoutes);
app.use('/api/vehiculos', vehiculosRoutes);
app.use('/api/insumos', insumosRoutes);
app.use('/api/empleados', empleadosRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/compras', comprasRoutes);
app.use('/api/detallesVenta', detallesVentaRoutes);

// Ruta raíz
app.get('/', (req, res) => {
    res.send('Bienvenido a la API del Concesionario de Automóviles');
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
