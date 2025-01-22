import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminResources = () => {
  const [resources, setResources] = useState([]);
  const [error, setError] = useState('');

  // Fetch resources from the backend
  const fetchResources = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/resources');
      setResources(response.data);
    } catch (err) {
      setError('Error al cargar los recursos. Inténtalo de nuevo.');
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  // Delete a resource
  const handleDelete = async (id) => {
	// Mostrar ventana de confirmación
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este recurso?');

    console.log(confirmDelete);  // Verifica si se confirma o no la eliminación

    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:4000/api/resources/${id}`);
        setResources(resources.filter((resource) => resource._id !== id));
        alert('Recurso eliminado correctamente');
      } catch (err) {
        setError('Error al eliminar el recurso.');
      }
    } else {
      // Si el usuario cancela, no hace nada
      console.log('Eliminación cancelada');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Administrar Recursos</h1>
      <p>Aquí puedes gestionar los recursos disponibles.</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table border="1" style={{ width: '100%', textAlign: 'left', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>URL</th>
            <th>Icono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource) => (
            <tr key={resource._id}>
              <td>{resource.name}</td>
              <td>{resource.description}</td>
              <td>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  {resource.url}
                </a>
              </td>
              <td>
                <img src={resource.icon} alt={resource.name} style={{ width: '50px', height: '50px' }} />
              </td>
              <td>
                <button className="btn-secondary">
                  <a href={`/admin/resources/edit/${resource._id}`} style={{ textDecoration: 'none' }}>
                    Editar
                  </a>
                </button>
                <button className="btn-danger" onClick={() => handleDelete(resource._id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn-primary">
        <a href="/admin/resources/new" style={{ textDecoration: 'none' }}>
          Añadir Nuevo Recurso
        </a>
      </button>
    </div>
  );
};

export default AdminResources;
