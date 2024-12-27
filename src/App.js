import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Webinar from './pages/Webinar';
import Programacion from './pages/Programacion';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Collaborators from './pages/Collaborators';
import Blog from './pages/Blog';
import Articulo from './pages/Articulo';
import RegistrationForm from './components/RegistrationForm';
import Interest from './pages/Interest';
import UpcomingResources from './pages/UpcomingResources';
import AdminPanel from './pages/AdminPanel';
import AdminWebinars from './pages/Admin/AdminWebinars';
import AdminArticles from './pages/Admin/AdminArticles';
import CreateArticle from './pages/Admin/CreateArticle';
import EditArticle from './pages/Admin/EditArticle';
import CreateWebinar from './pages/Admin/CreateWebinar';
import EditWebinar from './pages/Admin/EditWebinar';
import Navbar from './components/Navbar';
import CookieConsent from './components/CookieConsent';
import CookieSettings from './pages/CookieSettings';
import './styles/styles.css';
import ProtectedRoute from './components/ProtectedRoute';

// Simulación de autenticación
const isAuthenticated = true; // Cambia por tu lógica real
const userRole = 'admin'; // Cambia según el usuario

function App() {
  return (
    <Router>
      <div className="App">
        <CookieConsent />
        <Header />
        <Navbar />
        <Routes>
          {/* Rutas protegidas */}
          <Route
            path="/admin/webinars"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} userRole={userRole}>
                <AdminWebinars />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} userRole={userRole}>
                <AdminPanel />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/articles"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} userRole={userRole}>
                <AdminArticles />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/webinars/create"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} userRole={userRole}>
                <CreateWebinar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/webinars/edit/:id"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} userRole={userRole}>
                <EditWebinar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/articles/create"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} userRole={userRole}>
                <CreateArticle />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/articles/edit/:id"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} userRole={userRole}>
                <EditArticle />
              </ProtectedRoute>
            }
          />

          {/* Rutas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/webinar" element={<Webinar />} />
          <Route path="/programacion" element={<Programacion />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/colaboradores" element={<Collaborators />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/articulo" element={<Articulo />} />
          <Route path="/registro" element={<RegistrationForm />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/upcoming-resources" element={<UpcomingResources />} />
          <Route path="/configuracion-cookies" element={<CookieSettings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


