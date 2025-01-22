const express = require('express');
const router = express.Router();
const Resource = require('../models/resource'); // Ajusta el path según tu estructura

// Obtener un recurso específico por ID
router.get('/:id', async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ message: 'Recurso no encontrado' });
    }
    res.json(resource);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener el recurso', error: err.message });
  }
});
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedResource = req.body;

    console.log('Datos recibidos para actualizar:', updatedResource);  // Verifica los datos que llegan

    const result = await Resource.findByIdAndUpdate(id, updatedResource, { new: true });

    if (!result) {
      return res.status(404).json({ message: 'Recurso no encontrado' });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error('Error al actualizar el recurso:', error);  // Más detalles en el backend
    res.status(500).json({ message: 'Error al actualizar el recurso', error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Buscar y eliminar el recurso
    const result = await Resource.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: 'Recurso no encontrado' });
    }

    res.status(200).json({ message: 'Recurso eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el recurso' });
  }
});



module.exports = router;
