// CookieConsent.js
import React, { useState } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  const handleAccept = () => {
    // Lógica para aceptar todas las cookies
    setShowConsent(false);
    localStorage.setItem('cookieConsent', 'true');
  };

  const handleConfigure = () => {
    // Lógica para llevar al usuario a la página de configuración de cookies
    window.location.href = '/configuracion-cookies';
  };

  if (localStorage.getItem('cookieConsent')) {
    return null; // Si el usuario ya aceptó las cookies, no mostrar el aviso
  }

  return (
    showConsent && (
      <div className="cookie-consent">
        <p>
          Utilizamos cookies propias y de terceros para conocer los usos de nuestra tienda online y poder mejorarla, adaptar el contenido a tus gustos y personalizar nuestros anuncios. Para más información, puedes consultar nuestra <a href="https://drive.google.com/file/d/1pnK7WrfgEVEFr-cs1hc7WAOJpeRDxlQB/view?usp=drive_link">Política de cookies</a>.
        </p>
        <div className="cookie-buttons">
          <button onClick={handleAccept} className="accept-btn">Aceptar</button>
          <button onClick={handleConfigure} className="configure-btn">Configuración de cookies</button>
        </div>
      </div>
    )
  );
};

export default CookieConsent;
