import React from 'react';
import './Webinar.css';

const Webinar = () => {
  return (
    <div className="webinar-container">
      <div className="webinar-content">
        <h1>Introducción a Python</h1>
        <p>Próximamente</p>
        <img src="https://res.cloudinary.com/dfzzoaw9l/image/upload/v1728508684/python-webinar_qa9gql.jpg" alt="Python Webinar" className="webinar-image" />
        
        <div className="webinar-buttons">
          <a href="/programacion" className="btn-primary">Ver más sobre Programación</a>
          <a href="/registro" className="btn-secondary">Regístrate para recibir el enlace del webinar</a>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
