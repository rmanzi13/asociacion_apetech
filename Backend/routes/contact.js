const express = require('express');
const router = express.Router();
const saveMessage = require('../saveMessage');
const sendMail = require('../sendMail');
const Message = require('../models/Message');

// Definir la ruta POST
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  console.log('Recibidos datos:', { name, email, message });

  if (!name || !email || !message) {
    console.log('Faltan campos obligatorios.');
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  try {
    console.log('Guardando mensaje en la base de datos...');
    await saveMessage(name, email, message);
    console.log('Mensaje guardado en la base de datos.');

    console.log('Enviando correo...');
    await sendMail(name, email, message);
    console.log('Correo enviado.');

    res.status(200).json({ message: 'Mensaje enviado con éxito' });
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ error: 'Error al enviar el mensaje.' });
  }
});


module.exports = router;

