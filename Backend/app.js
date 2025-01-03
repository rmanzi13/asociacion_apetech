const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Article = require('./models/Article'); // Ajusta la ruta según tu estructura
const articlesRoutes = require('./routes/articles');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const { authenticateToken, adminOnly } = require('./middleware/auth');
const adminWebinars = require('./routes/adminWebinars');
const adminArticles = require('./routes/adminArticles');  // Importa la nueva ruta para artículos

//Vamos a comenzar el deploy para actualizar los archivos de la VM

// Inicializa 'app' antes de usarlo
const app = express();

// Middleware y rutas después de la inicialización de 'app'
app.use('/api/admin/webinars', authenticateToken, adminOnly, adminWebinars); // Ruta protegida de webinars
app.use('/api/articles', authenticateToken, adminOnly, adminArticles);

mongoose.connect('mongodb+srv://rmanzimerica:kN5KAvZtayS9V24v@cluster0.3c6rc.mongodb.net/apetech_db?retryWrites=true&w=majority', {
  connectTimeoutMS: 10000 // Opcional, si necesitas ajustar el tiempo de espera
})
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error("Error al conectar con MongoDB:", err));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Configuración de CORS
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000', // Permitir solicitudes desde tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
}));

// Rutas de la API
app.use('/api/contact', require('./routes/contact'));
app.use('/api/register', require('./routes/register'));
// Ruta para gestionar los artículos
app.use('/api/articles', require('./routes/articles'));
app.use('/api/webinars', require('./routes/webinars'));



// Servir archivos estáticos de la carpeta build (Frontend)
app.use(express.static(path.join(__dirname, '../build')));

// Manejar todas las demás rutas con el archivo index.html del frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Ruta para crear un artículo
app.post('/api/articles', async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const newArticle = new Article({ title, content, author });
        await newArticle.save();
        res.status(201).json(newArticle);
    } catch (error) {
        console.error('Error al guardar el artículo:', error);
        res.status(500).json({ error: 'Error al guardar el artículo' });
    }
});

app.get("/api/articles/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findById(id); // MongoDB busca por ID.
        if (!article) {
            return res.status(404).json({ error: "Artículo no encontrado" });
        }
        res.json(article);
    } catch (error) {
        res.status(500).json({ error: "Error del servidor" });
    }
});


const port = process.env.PORT || 4000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

