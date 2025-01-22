import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('role'); // Eliminar el rol
    navigate('/login'); // Redirigir a la página de login
  };

  useEffect(() => {
    const token = localStorage.getItem('role');
    if (!token) {
      navigate('/login'); // Redirigir si no hay rol en localStorage
    }
  }, [navigate]);

  return (
    <div>
      <h1>Panel de Administración</h1>
      <p>Bienvenido, elige una opción para gestionar:</p>
      <ul>
        <li>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </li>
        <li>
          <a href="/admin/webinars">Gestionar Webinars</a>
        </li>
        <li>
          <a href="/admin/resources">Gestionar Recursos</a>
        </li>
		<li>
          <a href="/admin/webinars/create">Crear Webinar</a> {/* Agrega este enlace */}
        </li>
      </ul>
    </div>
  );
};

export default AdminPage;



