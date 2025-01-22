import React, { useState, useEffect } from 'react';
import WebinarForm from './EditWebinarForm';
import { useNavigate } from 'react-router-dom';

const WebinarAdmin = () => {
  const [webinars, setWebinars] = useState([]);
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const navigate = useNavigate();

  const fetchWebinars = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/webinars');
      const data = await response.json();
      setWebinars(data);
    } catch (error) {
      console.error('Error al obtener los webinars:', error);
    }
  };

  useEffect(() => {
    fetchWebinars();
  }, []);

  const handleCreate = () => {
	navigate('/admin/webinars/create'); // Redirige a la página de crear webinar
    setSelectedWebinar(null);
    setIsFormVisible(true);
  };

  const handleEdit = (webinar) => {
    setSelectedWebinar(webinar);
    setIsFormVisible(true);
  };

  const handleDelete = async (webinarId) => {
    if (!webinarId) {
        console.error('El id del webinar no está definido');
        return;
    }
    console.log('Intentando eliminar webinar con ID:', webinarId);

    if (window.confirm('¿Estás seguro de que deseas eliminar este webinar?')) {
        const token = localStorage.getItem('token');
        console.log('Token:', token); // Verifica que el token también esté presente
        try {
            const response = await fetch(`http://localhost:4000/api/webinars/${webinarId}`, {
                method: 'DELETE',
                headers: {
					'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                console.error('Error en la respuesta del servidor:', await response.text());
                throw new Error('No se pudo eliminar el webinar');
            }

            console.log('Webinar eliminado exitosamente');
            setWebinars((prev) => prev.filter((webinar) => webinar._id !== webinarId));
        } catch (error) {
            console.error('Error al eliminar el webinar:', error);
        }
    }
};


  return (
    <div>
      <h2>Administrar Webinars</h2>
	  {/* Botón para crear un nuevo webinar */}
      <button onClick={handleCreate}>Crear Webinar</button>
	  
      <div>
        <h3>Lista de Webinars</h3>
        <ul>
          {webinars.map(webinar => (
            <li key={webinar._id}>
              <h4>{webinar.title}</h4>
              <button onClick={() => handleEdit(webinar)}>Editar</button>
              <button onClick={() => handleDelete(webinar._id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
      {isFormVisible && (
        <WebinarForm
          webinarToEdit={selectedWebinar}
          fetchWebinars={fetchWebinars}
          onCancel={() => setIsFormVisible(false)}
        />
      )}
    </div>
  );
};

export default WebinarAdmin;

