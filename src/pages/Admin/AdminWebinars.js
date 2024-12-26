import React, { useState, useEffect } from 'react';

const AdminWebinars = () => {
  const [webinars, setWebinars] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/webinars');
        if (!response.ok) throw new Error('Error al obtener webinars');
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

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este webinar?')) {
      try {
        const response = await fetch(`http://localhost:4000/api/webinars/${id}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Error al eliminar webinar');
        setWebinars(webinars.filter((webinar) => webinar._id !== id));
        alert('Webinar eliminado correctamente');
      } catch (err) {
        alert('Error eliminando webinar: ' + err.message);
      }
    }
  };

  if (loading) return <p>Cargando webinars...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Administrar Webinars</h1>
      <button onClick={() => window.location.href = '/admin/webinars/create'}>Crear Webinar</button>
      <ul>
        {webinars.map((webinar) => (
          <li key={webinar._id}>
            <h2>{webinar.title}</h2>
            <p>{webinar.description}</p>
            <button onClick={() => handleDelete(webinar._id)}>Eliminar</button>
            <button onClick={() => window.location.href = `/admin/webinars/edit/${webinar._id}`}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminWebinars;

