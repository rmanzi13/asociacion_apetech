import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminWebinars = () => {
  const [webinars, setWebinars] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();  // Usamos useHistory para redirigir

  useEffect(() => {
    const token = localStorage.getItem('token');
    const isAdmin = JSON.parse(localStorage.getItem('isAdmin')); // Obtener el rol de admin del localStorage

    // Verificar si hay token y si el usuario tiene permisos de admin
    if (!token || !isAdmin) {
      navigate.push('/login'); // Redirigir al login si no está autenticado o no es admin
      return;
    }

    const fetchWebinars = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/admin/webinars', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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
  }, [navigate]);

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este webinar?')) {
      try {
        const response = await fetch(`http://localhost:4000/api/admin/webinars/${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
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

