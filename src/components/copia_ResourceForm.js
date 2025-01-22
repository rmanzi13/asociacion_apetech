import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResourceForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resource, setResource] = useState({ name: '', description: '', url: '', icon: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      // Fetch existing resource details for editing
      axios.get(`http://localhost:4000/api/resources/${id}`)
        .then((response) => setResource(response.data))
        .catch(() => setError('Error al cargar el recurso.'));
    }
  }, [id]);

  const handleChange = (e) => {
    setResource({ ...resource, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Update existing resource
        await axios.put(`http://localhost:4000/api/resources/${id}`, resource);
      } else {
        // Create new resource
        await axios.post('http://localhost:4000/api/resources', resource);
      }
      navigate('/admin/recursos');
    } catch (err) {
      setError('Error al guardar el recurso. Verifica los campos.');
    }
  };

  return (
    <div>
      <h1>{id ? 'Editar Recurso' : 'Añadir Nuevo Recurso'}</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="name" value={resource.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Descripción:</label>
          <input type="text" name="description" value={resource.description} onChange={handleChange} required />
        </div>
        <div>
          <label>URL:</label>
          <input type="url" name="url" value={resource.url} onChange={handleChange} required />
        </div>
        <div>
          <label>Icono (URL):</label>
          <input type="text" name="icon" value={resource.icon} onChange={handleChange} />
        </div>
        <button type="submit">{id ? 'Actualizar' : 'Añadir'}</button>
      </form>
    </div>
  );
};

export default ResourceForm;
