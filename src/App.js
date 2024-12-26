import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importa Router, Routes, Route
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
import Articulo from "./pages/Articulo";
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
import Navbar from "./components/Navbar";
import CookieConsent from './components/CookieConsent'; // Componente del aviso
import CookieSettings from './pages/CookieSettings'; // Página de configuración
import './styles/styles.css';  // Importa el archivo de estilos globales

function App() {
  return (
    <Router>
      <div className="App">
	    <CookieConsent /> {/* Mostrar el aviso en todas las páginas */}
        <Header />
		<Navbar /> {/* Aquí colocas el Navbar para que esté siempre visible */}
        <Routes>
		  <Route path="/admin/webinars" element={<AdminWebinars />} />
		  <Route path="/admin" element={<AdminPanel />} />
		  <Route path="/admin/articles" element={<AdminArticles />} />
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
		  <Route path="/admin/webinars/create" element={<CreateWebinar />} />
          <Route path="/admin/webinars/edit/:id" element={<EditWebinar />} />
          <Route path="/admin/articles/create" element={<CreateArticle />} />
          <Route path="/admin/articles/edit/:id" element={<EditArticle />} />
		  <Route path="/configuracion-cookies" element={<CookieSettings />} /> {/* Ruta de configuración */}
          <Route path="*" element={<NotFound />} /> {/* Ruta para páginas no encontradas */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


