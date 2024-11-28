import React from 'react';
import './Programacion.css'; // Estilos para esta página

const Programacion = () => {
  return (
    <div className="programacion-container">
      <h1>Programación</h1>
      <p>Explora nuestros webinars y cursos relacionados con el desarrollo y la programación.</p>
      
      <div className="webinar-list">
        {/* Introducción a Python */}
        <div className="webinar-card">
          <img src="https://res.cloudinary.com/dfzzoaw9l/image/upload/v1732664695/python-webinar_f1mxnd.png" alt="Introducción a Python" className="webinar-image" />
          <h2>Introducción a Python</h2>
          <p>Fundamentos de Python. <strong>Fecha: Por determinar</strong>.</p>
        </div>

        {/* Introducción a Power BI */}
        <div className="webinar-card">
          <img src="https://res.cloudinary.com/dfzzoaw9l/image/upload/v1732663814/powerbi-webinar_-_copia_lr4ogb.png" alt="Introducción a Power BI" className="webinar-image" />
          <h2>Introducción a Power BI</h2>
          <p>Explora el análisis de datos con Power BI. <strong>Fecha: Por determinar</strong>.</p>
        </div>

        {/* Introducción a Notion */}
        <div className="webinar-card">
          <img src="https://res.cloudinary.com/dfzzoaw9l/image/upload/v1732663814/notion-webinar_-_copia_ssucld.png" alt="Introducción a Notion" className="webinar-image" />
          <h2>Introducción a Notion</h2>
          <p>Organización y productividad con Notion. <strong>Fecha: Por determinar</strong>.</p>
        </div>
      </div>
    </div>
  );
};

export default Programacion;
