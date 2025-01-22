import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import { Link } from 'react-router-dom';
import axios from 'axios'; // Importar axios para hacer solicitudes
import WebinarDetails from '../components/WebinarDetails';

const WebinarPage = () => {
  const [webinars, setWebinars] = useState([]); // Inicializa como un array vacío
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate(); // Inicializa useNavigate

  // Función para obtener los webinars desde el backend
  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/webinars");
        setWebinars(response.data); // Guarda los datos obtenidos en el estado
      } catch (error) {
        console.error("Error al obtener los webinars:", error);
      }
    };

    fetchWebinars(); // Llama a la función al montar el componente
  }, []); // El array vacío asegura que solo se ejecute al montar

  // Función para mostrar detalles
  const showDetails = (webinar) => {
    console.log(webinar); // Verifica qué se pasa a showDetails
    if (webinar && webinar._id) {
      // Usamos navigate para redirigir a la página de detalles
      navigate(`/webinar/${webinar._id}`); // Redirige a la URL del webinar con su ID
    } else {
      console.error("El webinar no tiene un id válido", webinar);
    }
  };

  // Función para cerrar detalles
  const closeDetails = () => {
    setSelectedWebinar(null);
    setIsRegistering(false);
  };

  // Función para iniciar registro
  const startRegistration = () => {
    setIsRegistering(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        border: "1px solid red", // Para verificar si los estilos se aplican.
      }}
    >
      <h1>Webinars Disponibles</h1>

      {/* Lista de webinars */}
      {!selectedWebinar ? (
        <div>
          {webinars.map((webinar) => (
            <div key={webinar._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
              <h2>{webinar.title}</h2>
			  {webinar.imageUrl && (
			    <img
				  src={webinar.imageUrl} 
                  alt={webinar.title} 
                  style={{ width: "100px", height: "auto", marginBottom: "10px" }}
			    />
			  )}
              <p>Fecha: {new Date(webinar.date).toLocaleString()}</p>
              <button onClick={() => showDetails(webinar)}>Ver más detalles</button>
            </div>
          ))}
        </div>
      ) : (
	    <WebinarDetails webinar={selectedWebinar} closeDetails={closeDetails} />
	  )}
    </div>
  );
};

export default WebinarPage;




