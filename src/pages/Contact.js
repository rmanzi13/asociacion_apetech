import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState('');  // Estado para el mensaje de éxito o error

const handleSubmit = async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  try {
	/*const response = await fetch('http://localhost:3000/api/contact', {*/
    const response = await fetch('https://apetech-uruguay.org/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    await response.json();
    setStatusMessage('Mensaje enviado con éxito');
  } catch (error) {
    setStatusMessage('Error: ' + error.message);
  }
};

  return (
    <div className="contact-page">
      <h1>Contacto</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" placeholder="Tu nombre" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" placeholder="Tu correo" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" placeholder="Tu mensaje" required></textarea>
        </div>
        <button type="submit" className="btn-submit">Enviar</button>
		<div>{statusMessage && <p>{statusMessage}</p>}</div> {/* Mensaje de estado */}
      </form>
    </div>
  );
};

export default Contact;