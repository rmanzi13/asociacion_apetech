const express = require('express');
const { authenticateToken, adminOnly } = require('../middleware/auth'); // Asegúrate de que la ruta sea correcta
const router = express.Router();

// Ruta para listar webinars
router.get('/', authenticateToken, adminOnly, (req, res) => {
  // Lógica para listar webinars
  res.json({ message: 'Lista de webinars' });
});

// Ruta para crear un webinar
router.post('/', authenticateToken, adminOnly, (req, res) => {
  // Lógica para crear un webinar
  res.json({ message: 'Webinar creado' });
});

// Ruta para editar un webinar
router.put('/:id', authenticateToken, adminOnly, (req, res) => {
  // Lógica para editar un webinar
  res.json({ message: `Webinar con ID ${req.params.id} actualizado` });
});

// Ruta para eliminar un webinar
router.delete('/:id', authenticateToken, adminOnly, (req, res) => {
  // Lógica para eliminar un webinar
  res.json({ message: `Webinar con ID ${req.params.id} eliminado` });
});

module.exports = router;
