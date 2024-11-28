import React from 'react';
import './Webinar.css';

const Webinar = () => {
  return (
    <div className="webinar-container">
      <h1>Webinars Destacados</h1>
      <p className="webinar-subtitle">Próximos eventos educativos relacionados con tecnología.</p>
      <div className="webinar-list">
        {/* Introducción a Python */}
        <div className="webinar-card">
          <img src="https://res.cloudinary.com/dfzzoaw9l/image/upload/v1732664695/python-webinar_f1mxnd.png" alt="Introducción a Python" className="webinar-image" />
		  <h2 className="webinar-title">Introducción a Python</h2>
		  <p className="webinar-text">Fundamentos de Python. <strong>Fecha: Por determinar</strong>.</p>
		  <a href="/programacion" className="btn-primary">Ver más</a>
        </div>

        {/* Introducción a Power BI */}
        <div className="webinar-card">
          <img src="https://res.cloudinary.com/dfzzoaw9l/image/upload/v1732663814/powerbi-webinar_-_copia_lr4ogb.png" alt="Introducción a Power BI" className="webinar-image" />
          <h2>Introducción a Power BI</h2>
          <p>Explora el análisis de datos con Power BI. <strong>Fecha: Por determinar</strong>.</p>
          <a href="/programacion" className="btn-primary">Ver más</a> {/* Cambié el enlace y texto */}
        </div>

        {/* Introducción a Notion */}
        <div className="webinar-card">
          <img src="https://res.cloudinary.com/dfzzoaw9l/image/upload/v1732663814/notion-webinar_-_copia_ssucld.png" alt="Introducción a Notion" className="webinar-image" />
          <h2>Introducción a Notion</h2>
          <p>Organización y productividad con Notion. <strong>Fecha: Por determinar</strong>.</p>
          <a href="/programacion" className="btn-primary">Ver más</a> {/* Cambié el enlace y texto */}
        </div>
      </div>
    </div>
  );
};

export default Webinar;


