const sendMail = require('./sendMail');

sendMail('Test User', 'test@example.com', 'This is a test message.')
  .then(response => {
    console.log('Correo enviado correctamente:', response);
  })
  .catch(error => {
    console.error('Error al enviar el correo:', error);
  });
