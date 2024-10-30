// CookieSettings.js
import React, { useState } from 'react';

const CookieSettings = () => {
  const [functionalCookies, setFunctionalCookies] = useState(true);
  const [analyticalCookies, setAnalyticalCookies] = useState(true);
  const [advertisingCookies, setAdvertisingCookies] = useState(true);

  const handleSave = () => {
    // Lógica para guardar las preferencias de cookies
    alert('Tus preferencias de cookies han sido guardadas.');
    // Aquí podrías almacenar las preferencias en localStorage
  };

  return (
    <div className="cookie-settings">
      <h1>Configuración de Cookies</h1>
      <p>Aquí puedes ajustar tus preferencias de cookies:</p>

      <label>
        <input
          type="checkbox"
          checked={functionalCookies}
          onChange={() => setFunctionalCookies(!functionalCookies)}
        />
        Cookies funcionales
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={analyticalCookies}
          onChange={() => setAnalyticalCookies(!analyticalCookies)}
        />
        Cookies analíticas
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={advertisingCookies}
          onChange={() => setAdvertisingCookies(!advertisingCookies)}
        />
        Cookies de publicidad
      </label>
      <br />
      <button onClick={handleSave}>Guardar preferencias</button>
    </div>
  );
};

export default CookieSettings;
