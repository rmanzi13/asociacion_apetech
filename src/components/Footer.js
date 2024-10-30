import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>© 2024 Asociación Transformando Vidas. Todos los derechos reservados.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-link">
          <a href="https://drive.google.com/file/d/1knBP9F6e6wA1g1e_hojkQYV6rd8vUwKq/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            Políticas de privacidad
          </a>
        </div>
        <div className="footer-link">
          <a href="https://drive.google.com/file/d/1S23_pFLkrv5_Fw3IKA_uOACW45HN2xGz/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            Términos y Condiciones
          </a>
        </div>
        <div className="footer-link">
          <a href="https://drive.google.com/file/d/1pnK7WrfgEVEFr-cs1hc7WAOJpeRDxlQB/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            Políticas de Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


