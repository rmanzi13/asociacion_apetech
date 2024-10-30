const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');  // Cambiado de User a Lead

router.post('/', async (req, res) => {
  const { firstName, lastName, email, country, region, interests } = req.body;
  
  // Validar que todos los campos requeridos estén presentes
  if (!firstName || !lastName || !email || !country || !region) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }
  try {
    const newLead = new Lead({
      firstName,
      lastName,
      email,
      country,
      region,
      interests
    });

    await newLead.save();
    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
	console.error('Error al registrar usuario:', error); // Imprimir el error
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
});

module.exports = router;
