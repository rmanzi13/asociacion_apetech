import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import RegistrationForm from './RegistrationForm';

const WebinarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [webinar, setWebinar] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    if (!id) {
      console.error("El ID del webinar no está definido");
      return;
    }

    console.log(`${process.env.REACT_APP_API_URL}/webinars/${id}`); // Verificar la URL generada

    const fetchWebinarDetails = async (webinarId) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/webinars/${webinarId}`);
        console.log("Datos obtenidos del webinar:", response.data); // Verificar la respuesta de la API
        setWebinar(response.data);
      } catch (error) {
        console.error("Error al obtener los detalles del webinar:", error);
        if (error.response) {
          console.error("Respuesta del servidor:", error.response.data);
        } else if (error.request) {
          console.error("No se recibió respuesta del servidor:", error.request);
        } else {
          console.error("Error al configurar la solicitud:", error.message);
        }
      }
    };

    fetchWebinarDetails(id);
  }, [id]);

  if (!webinar) {
    return <div>Cargando...</div>;
  }

  const startRegistration = () => {
    setIsRegistering(true);
  };
  
  // Función para manejar el envío del formulario de registro
  const handleRegistration = async (formData) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/register`, formData);
      if (response.status === 200) {
        // Redirigir a la página de agradecimiento
        navigate('/thank-you');
      }
    } catch (error) {
      console.error('Error al registrarse:', error);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div style={styles.container}>
      {!isRegistering ? (
        <div style={styles.gridContainer}>
          {/* Columna del ponente */}
          <div style={styles.speakerColumn}>
            <img
              src={webinar.speakerImage}
              alt={webinar.speakerName}
              style={styles.image}
            />
            <h3 style={styles.speakerTitle}>{webinar.speakerName}</h3>
            <p style={styles.speakerBio}>{webinar.speakerBio}</p>
            <a
              href={webinar.speakerLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Perfil de LinkedIn
            </a>
          </div>

          {/* Columna central */}
          <div style={styles.detailsColumn}>
            <h1 style={styles.title}>{webinar.title}</h1>
            <p style={styles.description}>{webinar.description}</p>
            <p style={styles.text}><strong>Fecha:</strong> {new Date(webinar.date).toLocaleString()}</p>

            <h3 style={styles.subtitle}>Contenido del Webinar:</h3>
            <ul style={styles.list}>
              {webinar.content.map((item, index) => (
                <li key={index} style={styles.listItem}>{item}</li>
              ))}
            </ul>

            <div style={styles.buttonContainer}>
              <button onClick={goBack} style={styles.button}>Volver</button>
              <button onClick={startRegistration} style={styles.button}>Registrarse</button>
            </div>
          </div>
        </div>
      ) : (
        <div style={styles.formContainer}>
          <h2 style={styles.title}>Registro para {webinar.title}</h2>
          <RegistrationForm webinarTitle={webinar.title} />
          <button onClick={() => setIsRegistering(false)} style={styles.button}>
            Volver
          </button>
        </div>
      )}
    </div>
  );
};

export default WebinarDetails;

// Estilos en línea
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    padding: '20px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr', // Dos columnas: 1 para el ponente, 3 para detalles
    gap: '20px',
    alignItems: 'start',
  },
  speakerColumn: {
    textAlign: 'center',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    maxWidth: '200px', // Tamaño máximo de la foto
    height: 'auto',
    borderRadius: '50%',
    marginBottom: '15px',
  },
  speakerTitle: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  speakerBio: {
    fontSize: '0.9em',
    marginBottom: '10px',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
    fontSize: '0.9em',
  },
  detailsColumn: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '2em',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1.2em',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1em',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.5em',
    margin: '20px 0 10px',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
  listItem: {
    marginBottom: '10px',
  },
  buttonContainer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};







