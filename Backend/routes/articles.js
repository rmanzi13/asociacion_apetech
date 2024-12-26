const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// GET: Obtener todos los artículos
router.get('/', async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los artículos' });
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

// PUT: Actualizar un artículo por ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content, author } = req.body;

    try {
        const updatedArticle = await Article.findByIdAndUpdate(
            id,
            { title, content, author },
            { new: true, runValidators: true }
        );

        if (!updatedArticle) {
            return res.status(404).json({ error: 'Artículo no encontrado' });
        }

        res.json(updatedArticle);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el artículo', details: error.message });
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
