const express = require('express');
const router = express.Router();
const saveMessage = require('../saveMessage');
const sendMail = require('../sendMail');
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  try {
      // Guardar el mensaje en la base de datos
	await saveMessage(name, email, message);  // Guardar mensaje en la base de datos
    await sendMail(name, email, message);  // Enviar correo
      /*const newMessage = new Message({ name, email, message });
      await newMessage.save();*/

    // Enviar el correo
    /*await sendMail(name, email, message);*/

    res.status(200).json({ message: 'Mensaje enviado con éxito' });
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);  // Imprimir el error completo
    res.status(500).json({ error: 'Error al enviar el mensaje.' });
  }
});

module.exports = router;

