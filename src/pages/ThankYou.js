import React, { useState, useEffect } from 'react';
import './ThankYou.css'; // Asegúrate de tener estilos personalizados

const ThankYou = () => {
  const [webinarLink, setWebinarLink] = useState('');

  // Obtener el enlace del webinar desde el backend
  useEffect(() => {
    const fetchWebinarLink = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/webinar-link');
        if (!response.ok) {
          throw new Error('No se pudo obtener el enlace del webinar');
        }
        const data = await response.json();
        setWebinarLink(data.link); // Guardamos el enlace en el estado
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchWebinarLink();
  }, []); // Asegúrate de incluir las dependencias del useEffect

  return (
    <div className="thank-you-page">
      <div className="thank-you-icon">
        🎉 {/* Puedes usar un emoji o un ícono SVG */}
      </div>
      <h1>¡Gracias por registrarte!</h1>
      <p>Estamos emocionados de que formes parte de este evento especial.</p>
      <p>Revisa tu correo en los próximos días para recibir el enlace del webinar y más detalles.</p>
    </div>
  );
};

export default ThankYou;

