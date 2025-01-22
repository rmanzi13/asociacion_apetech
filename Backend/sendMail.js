const nodemailer = require('nodemailer');
require('dotenv').config();

const sendMail = (name, email, message) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER, // Tu email en .env
      pass: process.env.SMTP_PASS, // Tu contraseña en .env
    },
	debug: true, // Habilitar depuración
    logger: true, // Habilitar logs
  });

  const mailOptions = {
    from: process.env.SMTP_USER, // Remitente (tu correo)
    to: 'reto2013@gmail.com', // Correo destinatario
    subject: `Nuevo mensaje de ${name}`,
    text: `Mensaje de: ${name}\nCorreo: ${email}\n\n${message}`, // Incluir más datos si es necesario
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error al enviar el correo:', error);
        reject(error);
      } else {
        console.log('Correo enviado:', info.response);
        resolve(info.response);
      }
    });
  });
};

module.exports = sendMail;


