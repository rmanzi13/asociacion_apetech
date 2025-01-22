import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Collaborators from './pages/Collaborators';
import Noticias from './pages/Noticias';
import Articulo from './pages/Articulo';
import WebinarPage from './pages/WebinarPage';
import WebinarDetails from './components/WebinarDetails';
import WebinarForm from './components/WebinarForm';
import RegistrationForm from './components/RegistrationForm';
import ThankYou from './pages/ThankYou';
import Resource from './pages/Resource';
import ProtectedRoute from './components/ProtectedRoute';  // Asegúrate de que el path sea correcto
import AdminResources from './components/AdminResources';
import ResourceForm from './components/ResourceForm'; // Formulario de añadir/editar recursos
import Navbar from './components/Navbar';
import UpcomingResources from './pages/UpcomingResources';
import CookieConsent from './components/CookieConsent';
import CookieSettings from './pages/CookieSettings';
import AdminPage from './components/AdminPage';
import WebinarAdmin from './components/WebinarAdmin';
import EditWebinarForm from './components/EditWebinarForm';
import Login from './components/Login';
import './styles/styles.css';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false); // Usamos el estado para controlar el rol
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Función de login
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '12345') {
      localStorage.setItem('role', 'admin'); // Guarda el rol en localStorage
      setIsAdmin(true); // Actualiza el estado
    } else {
      alert('Credenciales incorrectas');
    }
  };

  // Función de logout
  const handleLogout = () => {
    localStorage.removeItem('role'); // Elimina el rol
    setIsAdmin(false); // Actualiza el estado
  };

  return (
    <Router>
      <div className="App">
        {/* Encabezado y cookie consent visibles siempre */}
        <CookieConsent />
        <Header />

        {/* Botón de cerrar sesión visible solo si está logueado */}
        {isAdmin && (
          <div style={{ textAlign: 'right', padding: '10px' }}>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
        )}

        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/colaboradores" element={<Collaborators />} />
          <Route path="/registro" element={<RegistrationForm />} />
          <Route path="/resource" element={<Resource />} />
		  <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/articulo" element={<Articulo />} />
          <Route path="/webinar" element={<WebinarPage />} />
          <Route path="/webinar/:id" element={<WebinarDetails />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/upcoming-resources" element={<UpcomingResources />} />
          <Route path="/configuracion-cookies" element={<CookieSettings />} />
		  <Route path="/login" element={<Login />} />

          {/* Rutas de login */}
          <Route
            path="/login"
            element={
              isAdmin ? (
                <Navigate to="/admin" />
              ) : (
                <div id="login-form">
                  <h2>Login Administrador</h2>
                  <form onSubmit={handleLogin}>
                    <input
                      type="text"
                      placeholder="Usuario"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                    <input
                      type="password"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button type="submit">Ingresar</button>
                  </form>
                </div>
              )
            }
          />

          {/* Rutas protegidas */}
		  <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPage /> {/* Página principal del panel de administrador */}
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/resources"
            element={
              <ProtectedRoute>
                <AdminResources />
              </ProtectedRoute>
            }
          />
		  <Route
		    path="/admin/resources/new"
		    element={
			  <ProtectedRoute>
			    <ResourceForm />
			  </ProtectedRoute>
		    }
		  />
		  <Route
		    path="/admin/resources/edit/:id"
		    element={
			  <ProtectedRoute>
			    <ResourceForm />
			  </ProtectedRoute>
		    }
		  />
          <Route
            path="/admin/webinars"
            element={
              <ProtectedRoute>
                <WebinarAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/webinars/create"
            element={
              <ProtectedRoute>
                <WebinarForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/webinars/edit/:id"
            element={
              <ProtectedRoute>
                <EditWebinarForm />
              </ProtectedRoute>
            }
          />

          {/* Ruta por defecto */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

















