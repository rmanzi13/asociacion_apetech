import React from 'react';
import './Interest.css';
import { Link } from 'react-router-dom';

const Interest = () => {
  const resources = [
    {
      name: "Automate the Boring Stuff with Python",
      description: "Un libro y curso para automatizar tareas comunes con Python.",
      url: "https://automatetheboringstuff.com/",
      icon: "https://res.cloudinary.com/dfzzoaw9l/image/upload/v1732734198/icono_py1_mpeq6h.png"
    },
    {
      name: "Curso de Introducción a Python (Google)",
      description: "Curso introductorio a Python por Google Developers.",
      url: "https://developers.google.com/edu/python",
      icon: "https://res.cloudinary.com/dfzzoaw9l/image/upload/v1732734199/icono_py2_juzxjo.png"
    },
    {
      name: "Python for Everybody (Coursera)",
      description: "Especialización completa en Python desde Coursera.",
      url: "https://www.coursera.org/specializations/python",
      icon: "https://res.cloudinary.com/dfzzoaw9l/image/upload/v1732734198/icono_py3_l6v4gq.png"
    },
    {
      name: "Python 101 (Real Python)",
      description: "Aprende Python desde lo básico con este recurso completo.",
      url: "https://realpython.com/python-basics/resources/",
      icon: "https://example.com/real-python-icon.png"
    },
    {
      name: "Curso Python desde Cero (YouTube)",
      description: "Curso gratuito en español para principiantes.",
      url: "https://www.youtube.com/playlist?list=PLas30d-GGNa37H8xdxxRLXcH-4i_w1FeL",
      icon: "https://example.com/youtube-icon.png"
    }
  ];

  const maxVisible = 3; // Número máximo de recursos visibles en la vista principal

  return (
    <div className="interest-container">
      <h1>Te puede interesar</h1>
      <p>Explora estos recursos gratuitos para aprender Python:</p>
      <div className="interest-grid">
        {resources.slice(0, maxVisible).map((resource, index) => (
          <div key={index} className="interest-card">
            <img src={resource.icon} alt={resource.name} className="interest-icon" />
            <h2>{resource.name}</h2>
            <p>{resource.description}</p>
            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Ver recurso
            </a>
          </div>
        ))}
      </div>
      {resources.length > maxVisible && (
        <div className="see-more">
          <Link to="/upcoming-resources" className="btn-secondary">
            Ver todos los recursos
		  </Link>
        </div>
      )}
    </div>
  );
};

export default Interest;

