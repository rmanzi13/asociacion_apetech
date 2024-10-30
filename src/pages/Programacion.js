import React from 'react';
import './Programacion.css'; // Estilos para esta página

const Programacion = () => {
  return (
    <div className="programacion-container">
      <h1>Programación</h1>
      <p>Aquí encontrarás todos los webinars y cursos relacionados con el desarrollo y programación.</p>
      <div className="programacion-webinar">
        <h2>Introducción a Python</h2>
        <img src="/assets/python-webinar.jpg" alt="Introducción a Python" className="programacion-image" />
        <p>Un webinar que cubre los fundamentos de Python. Próximamente.</p>
      </div>
    </div>
  );
};

export default Programacion;
