const express = require('express');
const router = express.Router();
const Webinar = require('../models/Webinar');
const { getWebinars, getWebinarById } = require('../controllers/webinarController');
//const { authenticateToken} = require('../middleware/auth');


// Ruta para obtener todos los webinars
router.get('/', getWebinars);

// Ruta para obtener un webinar por ID
router.get('/:id', getWebinarById);

// Ruta para crear un nuevo webinar
router.post('/', async (req, res) => {
  console.log('Datos recibidos:', req.body);  // Añade este log para verificar que los datos llegan correctamente

  const { title, description, date, link } = req.body;

  if (!title || !description || !date || !link) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  try {
    const newWebinar = new Webinar(req.body);
    await newWebinar.save();
    res.status(201).json(newWebinar);
  } catch (error) {
    console.error('Error al crear el webinar:', error);
    res.status(500).json({ message: 'Error al crear el webinar' });
  }
});

// Actualizar webinar
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const webinarData = req.body;
	
	 if (!id) {
        return res.status(400).json({ message: 'ID no proporcionado' });
    }


    try {
        const updatedWebinar = await Webinar.findByIdAndUpdate(id, webinarData, { new: true });
        if (!updatedWebinar) {
            return res.status(404).json({ message: 'Webinar no encontrado' });
        }
        res.json(updatedWebinar);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el webinar' });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    console.log("ID recibido para eliminación:", id);
    try {
        const deletedWebinar = await Webinar.findByIdAndDelete(id);
        if (!deletedWebinar) {
            return res.status(404).json({ message: "Webinar no encontrado" });
        }
        res.status(200).json({ message: "Webinar eliminado exitosamente" });
    } catch (error) {
        console.error("Error al eliminar el webinar:", error);
        res.status(500).json({ message: "Error al eliminar el webinar" });
    }
});



module.exports = router;
