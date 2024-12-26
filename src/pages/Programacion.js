import React, { useState, useEffect } from 'react';
import './Programacion.css'; // Estilos para esta página

const Programacion = () => {
	const [webinars, setWebinars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWebinars = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/webinars');
                if (!response.ok) throw new Error('Error al obtener los webinars');
                const data = await response.json();
                setWebinars(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWebinars();
    }, []);

    if (loading) return <p>Cargando webinars...</p>;
    if (error) return <p>Error: {error}</p>;
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
