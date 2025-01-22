const express = require('express');
const nodemailer = require('nodemailer');
const Lead = require('../models/Lead'); // Modelo de usuario
const router = express.Router();

// Configuración de nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rmanzimerica@gmail.com',
    pass: 'yond lbfk twie mecp', // Asegúrate de usar una contraseña segura o un App Password de Gmail
  },
});

// Ruta para registrar usuarios
router.post('/', async (req, res) => {
  const { firstName, lastName, email, country, region, interests } = req.body;

  if (!firstName || !lastName || !email || !country || !region) {
    return res.status(400).json({ message: 'Faltan datos obligatorios' });
  }
  
  // Validar que los intereses sean un array
  if (!Array.isArray(interests) || interests.length === 0) {
    return res.status(400).json({ message: 'Intereses son requeridos y deben ser un array' });
  }

  try {
    // Crear nuevo usuario
    const newLead = new Lead({
      firstName,
      lastName,
      email,
      country,
      region,
	  interests, // Asegúrate de incluir los intereses aquí
    });

    // Guardar en la base de datos
    await newLead.save();

    // Enviar correo de confirmación
   const confirmationEmail = {
  from: 'rmanzimerica@gmail.com',
  to: email,
  subject: 'Confirmación de registro en APETECH',
  html: `<p>Hola ${firstName} ${lastName},</p>
         <p>¡Gracias por registrarte en APETECH!</p>
         <p>Estamos encantados de que te unas a nuestra comunidad. Próximamente recibirás un correo con el enlace de acceso al webinar. Te recomendamos estar atento a tu bandeja de entrada.</p>
         <p>Si tienes alguna consulta, no dudes en contactarnos.</p>
         <p>Saludos cordiales,</p>
         <p>El equipo de Asociación APETECH</p>`,
};
    await transporter.sendMail(confirmationEmail);

    res.status(201).json({ message: 'Usuario registrado con éxito y correo de confirmación enviado' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ message: 'Hubo un error al registrar el usuario' });
  }
});

module.exports = router;

































