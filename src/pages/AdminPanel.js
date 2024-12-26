import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
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
