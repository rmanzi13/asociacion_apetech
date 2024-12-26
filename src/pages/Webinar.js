import React, { useEffect, useState } from 'react';
import './Webinar.css';

const Webinar = () => {
  const [webinars, setWebinars] = useState([]); // Estado para los webinars
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/webinars'); // Cambia la URL si es necesario
        if (!response.ok) throw new Error('Error al obtener los webinars');
        const data = await response.json();
        setWebinars(data); // Guardar webinars en el estado
      } catch (err) {
        setError(err.message); // Manejar error
      } finally {
        setLoading(false); // Finalizar carga
      }
    };
    fetchWebinars();
  }, []);

  if (loading) return <p>Cargando webinars...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="webinar-container">
      <h1>Webinars Destacados</h1>
      <p className="webinar-subtitle">Próximos eventos educativos relacionados con tecnología.</p>
      <div className="webinar-list">
        {webinars.length > 0 ? (
          webinars.map((webinar) => (
            <div key={webinar._id} className="webinar-card">
              <img
                src={webinar.image || "https://res.cloudinary.com/dfzzoaw9l/image/upload/v1732664695/python-webinar_f1mxnd.png"}
                alt="Introducción a Python"
                className="webinar-image"
              />
              <h2 className="webinar-title">{webinar.title}</h2>
              <p className="webinar-text">
                {webinar.description}. <strong>Fecha: {webinar.date || "Por determinar"}</strong>.
              </p>
              <a href={webinar.link || "/programacion"} className="btn-primary">Ver más</a>
            </div>
          ))
        ) : (
          <>
            <div className="webinar-card">
              <img
                src="https://res.cloudinary.com/dfzzoaw9l/image/upload/v1732663814/powerbi-webinar_-_copia_lr4ogb.png"
                alt="Introducción a Power BI"
                className="webinar-image"
              />
              <h2>Introducción a Power BI</h2>
              <p>Explora el análisis de datos con Power BI. <strong>Fecha: Por determinar</strong>.</p>
              <a href="/programacion" className="btn-primary">Ver más</a>
            </div>
            <div className="webinar-card">
              <img
                src="https://res.cloudinary.com/dfzzoaw9l/image/upload/v1732663814/notion-webinar_-_copia_ssucld.png"
                alt="Introducción a Notion"
                className="webinar-image"
              />
              <h2>Introducción a Notion</h2>
              <p>Organización y productividad con Notion. <strong>Fecha: Por determinar</strong>.</p>
              <a href="/programacion" className="btn-primary">Ver más</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Webinar;


