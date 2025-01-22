import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResourceForm = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const [resourceData, setResourceData] = useState({
    name: '',
    description: '',
    url: '',
    icon: '',
  });

  useEffect(() => {
    if (id) {
      // Carga los datos del recurso para editar
      const fetchResource = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/api/resources/${id}`);
          setResourceData(response.data);
        } catch (error) {
          console.error('Error al cargar el recurso:', error);
        }
      };

      fetchResource();
    }
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setResourceData({ ...resourceData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(id);  // Verifica que id no esté vacío

      if (id) {
        // Actualiza el recurso existente
        const response = await axios.put(`http://localhost:4000/api/resources/${id}`, resourceData);
        console.log('Respuesta del PUT:', response.data);
      } else {
        // Crea un nuevo recurso
        await axios.post('http://localhost:4000/api/resources', resourceData);
      }
      alert('Recurso guardado correctamente');
    } catch (error) {
      console.error('Error al guardar el recurso:', error);
    }
  };

  return (
    <div>
      <h1>{id ? 'Editar Recurso' : 'Añadir Nuevo Recurso'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={resourceData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={resourceData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>URL:</label>
          <input
            type="url"
            name="url"
            value={resourceData.url}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Icono (URL):</label>
          <input
            type="text"
            name="icon"
            value={resourceData.icon}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default ResourceForm;
