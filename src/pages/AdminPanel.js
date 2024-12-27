import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const AdminPanel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const isAdmin = JSON.parse(localStorage.getItem('isAdmin')); // Obtener el rol de admin del localStorage

    // Verificar si hay token y si el usuario tiene permisos de admin
    if (!token || !isAdmin) {
      navigate.push('/login'); // Redirigir al login si no está autenticado o no es admin
    }
  }, [navigate]);

  return (
    <div className="admin-panel">
      <h1>Panel de Administración</h1>
      <ul>
        <li><Link to="/admin/webinars">Administrar Webinars</Link></li>
        <li><Link to="/admin/articles">Administrar Artículos</Link></li>
        {/* Agrega más enlaces según sea necesario */}
      </ul>
    </div>
  );
};

export default AdminPanel;

