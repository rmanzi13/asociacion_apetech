const express = require('express');
const { authenticateToken, adminOnly } = require('../middleware/auth');
const Article = require('../models/Article');  // Asegúrate de que la ruta sea correcta
const router = express.Router();

// Ruta para listar artículos
router.get('/', authenticateToken, adminOnly, async (req, res) => {
  try {
    const articles = await Article.find();  // Obtener todos los artículos
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los artículos' });
  }
});

// Ruta para crear un artículo
router.post('/', authenticateToken, adminOnly, async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newArticle = new Article({ title, content, author });
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el artículo' });
  }
});

module.exports = router;
