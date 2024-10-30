import React from 'react';
import ReactDOM from 'react-dom/client';  // Cambiado para la nueva API de React
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Crear la raíz utilizando createRoot de React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Opcional: para medir rendimiento
reportWebVitals();



