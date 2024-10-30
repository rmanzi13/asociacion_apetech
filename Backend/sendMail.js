const nodemailer = require('nodemailer');
require('dotenv').config();

const sendMail = (name, email, message) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER, // Aquí debe estar tu email sin errores
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER, // Remitente (tu correo)
    to: 'reto2013@gmail.com',
    subject: `Nuevo mensaje de ${name}`,
    text: message,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error al enviar el correo:', error);  // Imprimir error
        reject(error);  // Rechaza la promesa si hay un error
      } else {
        console.log('Correo enviado:', info.response);
        resolve(info.response);  // Resuelve la promesa si se envió con0 éxito
      }
    });
  });
};

module.exports = sendMail;


