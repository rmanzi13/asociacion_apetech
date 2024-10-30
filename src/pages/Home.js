import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-content">
        <h1>Unimos Culturas, Transformamos Futuro</h1>
        <p>Educación tecnológica accesible para todos, impulsando la inclusión social y el talento multicultural.</p>
        <p>
          En APETECH, creemos en el poder transformador de la educación tecnológica. Nuestro objetivo es brindar acceso universal a las herramientas digitales, fomentando la integración social y el desarrollo de talento en un mundo multicultural. 
          Formamos una comunidad diversa de estudiantes, profesionales y empresas que colaboran para construir un futuro más inclusivo y tecnológicamente avanzado.
        </p>
        <img src="https://res.cloudinary.com/dfzzoaw9l/image/upload/v1728509170/imagen_ezlp16.jpg" alt="Diversidad tecnológica" className="hero-image" />
        <div className="cta-buttons">
          <button className="register-btn">
            <a href="/registro">Regístrate ahora</a>
          </button>
        </div>
        <a href="/webinar" className="cta-btn">Nuestros Cursos</a>
      </div>
    </div>
  );
};

export default Home;


