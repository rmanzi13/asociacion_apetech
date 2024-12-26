const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const registerRoutes = require('./routes/register'); 

// Inicializar la aplicación
const app = express();
app.use(express.json({ limit: '10mb' })); // Ajusta el límite a 10mb o el valor que prefieras
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Configuración de CORS en desarrollo local
const cors = require('cors');
app.use(cors({
    origin: 'http://34.136.145.134:3000', // Limitar al dominio local
    methods: ['GET', 'POST'] // Limitar solo a los métodos necesarios
}));

// Rutas de contacto y registro
app.use('/api/contact', require('./routes/contact'));  // Ruta de contacto
app.use('/api/register', registerRoutes);  // Ruta de registro

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '../build')));

// Manejar todas las demás rutas (SPA - Single Page Application)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.error('Error al conectar a MongoDB Atlas:', err));

// Definir el puerto del servidor
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
