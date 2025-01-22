import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-container">
      <div className="header-top">
        <img src="https://res.cloudinary.com/dfzzoaw9l/image/upload/v1729074740/logo_xsus7r.png" alt="Logo APETECH" className="logo" />
        
        <button className="burger-menu" onClick={toggleMenu}>
          &#9776;
        </button>

        {/* Solo mostrar el botón en la versión web */}
        <div className="resource-button desktop-only">
          <Link to="/resource" className="btn-resource">Te puede interesar</Link>
        </div>
      </div>

      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/nosotros" onClick={closeMenu}>Nosotros</Link></li>
          <li><Link to="/webinar" onClick={closeMenu}>Webinar</Link></li>
          <li><Link to="/colaboradores" onClick={closeMenu}>Colaboradores</Link></li>
		  <li><Link to="/noticias" onClick={closeMenu}>Noticias</Link></li> {/* Aquí se añade el Noticias */}
          <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
          {/* Añadir "Te puede interesar" en el menú móvil */}
          <li className="mobile-only"><Link to="/resource" onClick={closeMenu}>Te puede interesar</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


