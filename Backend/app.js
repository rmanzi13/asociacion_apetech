const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser'); // Para parsear cuerpos JSON

// Importar rutas
const Article = require('./models/Article');
const articlesRoutes = require('./routes/articles');
const Webinar = require('./models/Webinar');
const webinarRoutes = require('./routes/webinars'); 
const Lead = require ('./models/Lead');
const Resource = require('./models/Resource'); // Ajusta la ruta si es necesario
const leadRoutes = require('./routes/lead'); // Importa el archivo de rutas para leads
const contactRoutes = require('./routes/contact'); // Ruta de contacto
const resourceRoutes = require('./routes/resourceRoutes');
const { getWebinars, getWebinarById } = require('./controllers/webinarController');  // Asegúrate de que la ruta sea correcta

dotenv.config();

const app = express();

// Middleware para parsear JSON y configurar CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json()); // Para parsear las solicitudes con JSON

mongoose.connect('mongodb+srv://rmanzimerica:kN5KAvZtayS9V24v@cluster0.3c6rc.mongodb.net/apetech_db?retryWrites=true&w=majority', {
    connectTimeoutMS: 10000
})
    .then(() => {
        console.log("Conectado a MongoDB");
        mongoose.connection.db.listCollections().toArray(function(err, names) {
            if (err) {
                console.error("Error listando colecciones:", err);
            } else {
                console.log("Colecciones en la base de datos:", names);  // Ver qué colecciones existen
            }
        });
    }) // Aquí falta el paréntesis de cierre

// Ruta GET para obtener todos los recursos
app.get('/api/resources', async (req, res) => {
  try {
    const resources = await Resource.find(); // Obtener todos los recursos
    res.status(200).json(resources); // Responder con los recursos
  } catch (error) {
    console.error('Error al obtener los recursos:', error.message);
    res.status(500).json({ error: 'Error al obtener los recursos' });
  }
});

// Ruta para crear un nuevo recurso
app.post('/api/resources', async (req, res) => {
  try {
    const newResource = new Resource(req.body);
    await newResource.save();
    res.status(201).json(newResource);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el recurso', error });
  }
});

// Ruta de autenticación
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === '12345') {
        const token = 'your_token_here';
        const role = 'admin'; // Simulando el rol aquí

        return res.json({ token, role });
    } else {
        return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
    }
});

// Rutas de la API
app.use('/api/leads', leadRoutes);  // Asegúrate de que esta ruta esté registrada correctamente
app.use('/api/webinars', webinarRoutes);
app.use('/api', articlesRoutes);
console.log('Registrando rutas...');
app.use('/api/contact', contactRoutes); 
app.use('/api/register', require('./routes/register'));
app.use('/api/resources', resourceRoutes); 

// Ruta principal
app.get('/', (req, res) => {
    res.send('Servidor corriendo correctamente.');
});

// Servir archivos estáticos desde el build de React
app.use(express.static(path.join(__dirname, '../build')));

// Cualquier otra ruta redirige al index.html del build
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Algo salió mal, por favor intente de nuevo más tarde.' });
});

// Iniciar el servidor
const port = process.env.PORT || 4000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});







