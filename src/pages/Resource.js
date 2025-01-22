import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Resource.css';

const Resource = () => {
  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState({
    name: '',
    description: '',
    url: '',
    icon: ''
  });
  const [isAdmin, setIsAdmin] = useState(false); // Este estado es para verificar si el usuario es administrador

  useEffect(() => {
    // Aquí deberías verificar si el usuario es un administrador, tal vez desde un token o contexto
    const user = localStorage.getItem('user'); // O usar cualquier lógica de autenticación
    if (user && JSON.parse(user).role === 'admin') {
      setIsAdmin(true);
    }

    // Aquí podrías hacer una petición a la API para obtener los recursos si es necesario
    const fetchResources = async () => {
      const response = await axios.get('http://localhost:4000/api/resources');
      setResources(response.data);
    };
    fetchResources();
  }, []);

  const handleChange = (e) => {
    setNewResource({
      ...newResource,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAdmin) {
      alert("No tienes permisos para agregar un recurso.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/resources', newResource);
      setResources([...resources, response.data]); // Añadir el nuevo recurso
      setNewResource({ name: '', description: '', url: '', icon: '' }); // Limpiar formulario
      alert('Recurso creado correctamente!');
    } catch (error) {
      console.error('Error al crear el recurso:', error);
      alert('Error al crear el recurso.');
    }
  };

  return (
    <div className="resource-container">
      <h1>Te puede interesar</h1>
      <p>Explora estos recursos gratuitos para aprender más:</p>
      <div className="resource-grid">
        {resources.map((resource, index) => (
          <div key={index} className="resource-card">
            <img src={resource.icon} alt={resource.name} className="resource-icon" />
            <h2>{resource.name}</h2>
            <p>{resource.description}</p>
            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Ver recurso
            </a>
          </div>
        ))}
      </div>

      {/* Mostrar formulario solo si el usuario es administrador */}
      {isAdmin && (
        <div>
          <h2>Añadir nuevo recurso</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                value={newResource.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Descripción:</label>
              <textarea
                name="description"
                value={newResource.description}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>URL:</label>
              <input
                type="url"
                name="url"
                value={newResource.url}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Icono:</label>
              <input
                type="text"
                name="icon"
                value={newResource.icon}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn-primary">Añadir Recurso</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Resource;

