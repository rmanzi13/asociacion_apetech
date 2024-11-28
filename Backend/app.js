const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Configuración de CORS
const cors = require('cors');
app.use(cors({
    origin: 'http://apetech-uruguay.org:3000', // O el dominio en producción si lo tienes
    methods: ['GET', 'POST']
}));

// Rutas de la API
app.use('/api/contact', require('./routes/contact'));
app.use('/api/register', require('./routes/register'));

// Servir archivos estáticos de la carpeta build
app.use(express.static(path.join(__dirname, '../build')));

// Manejar todas las demás rutas con el archivo index.html de build
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.error('Error al conectar a MongoDB Atlas:', err));

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
