const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// GET: Obtener todos los artículos
router.get('/api/articles', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los artículos' });
  }
});

// GET: Obtener un artículo por ID
router.get('/:id', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "Artículo no encontrado." });
    }
    res.json(article); // Envía el artículo encontrado
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el artículo." });
  }
});

// POST: Crear un nuevo artículo
router.post('/', async (req, res) => {
    const { title, content, author } = req.body;

    try {
        const newArticle = new Article({ title, content, author });
        await newArticle.save();
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el artículo', details: error.message });
    }
});

// Ruta para actualizar un artículo en el backend
router.put('/api/articles/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    // Buscamos el artículo por su ID y actualizamos
    const updatedArticle = await Article.findByIdAndUpdate(
      id, 
      { title, content }, 
      { new: true } // Devolver el artículo actualizado
    );
    
    if (!updatedArticle) {
      return res.status(404).json({ error: 'Artículo no encontrado' });
    }
    
    res.json(updatedArticle); // Devolvemos el artículo actualizado
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el artículo' });
  }
});

// DELETE: Eliminar un artículo por ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedArticle = await Article.findByIdAndDelete(id);

        if (!deletedArticle) {
            return res.status(404).json({ error: 'Artículo no encontrado' });
        }

        res.json({ message: 'Artículo eliminado correctamente', article: deletedArticle });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el artículo', details: error.message });
    }
});

module.exports = router;


