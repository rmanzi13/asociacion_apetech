const express = require('express');
const router = express.Router();
const Webinar = require('../models/Webinar');

// Obtener todos los webinars
router.get('/', async (req, res) => {
  try {
    const webinars = await Webinar.find();
    res.json(webinars);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los webinars' });
  }
});

// Obtener un webinar por ID
router.get('/:id', async (req, res) => {
  try {
    const webinar = await Webinar.findById(req.params.id);
    if (!webinar) return res.status(404).json({ error: 'Webinar no encontrado' });
    res.json(webinar);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el webinar' });
  }
});

// Crear un nuevo webinar
router.post('/', async (req, res) => {
  try {
    const { title, description, date, link, image } = req.body;
    const webinar = new Webinar({ title, description, date, link, image });
    await webinar.save();
    res.status(201).json(webinar);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el webinar' });
  }
});

// Actualizar un webinar por ID
router.put('/:id', async (req, res) => {
  try {
    const webinar = await Webinar.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!webinar) return res.status(404).json({ error: 'Webinar no encontrado' });
    res.json(webinar);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el webinar' });
  }
});

// Eliminar un webinar por ID
router.delete('/:id', async (req, res) => {
  try {
    const webinar = await Webinar.findByIdAndDelete(req.params.id);
    if (!webinar) return res.status(404).json({ error: 'Webinar no encontrado' });
    res.json({ message: 'Webinar eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el webinar' });
  }
});

module.exports = router;
