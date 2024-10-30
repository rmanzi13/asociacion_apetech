import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Sobre Nosotros</h1>
        <p>
          Nuestra misión es democratizar el acceso a la educación tecnológica, 
          fomentando la inclusión social y preparando a la próxima generación para los retos de un futuro digital.
        </p>
      </div>

      <div className="section">
        <h2>Nuestra Historia</h2>
        <p>
          La Asociación APETECH fue fundada en 2024 con un enfoque en la educación disruptiva y la inclusión tecnológica.
          Surgimos con el propósito de ser un puente para todos aquellos que, sin importar su contexto social o económico,
          desean acceder a oportunidades de formación tecnológica de calidad. Creemos que la educación no debe tener barreras
          ni restricciones, y estamos convencidos de que cada persona tiene el potencial de aprender y crecer si cuenta con 
          el acceso adecuado a los recursos y a una comunidad que los apoye.
        </p>
        <p>
          Desde nuestros inicios, hemos formado una comunidad diversa de estudiantes, profesionales y entusiastas de la tecnología
          que creen en el aprendizaje continuo y el apoyo mutuo. Para nosotros, aprender no es solo adquirir conocimientos, 
          es también colaborar, compartir y construir en conjunto un futuro mejor para todos.
        </p>
      </div>

      <div className="section">
        <h2>Misión y Visión</h2>
        <p>
          <strong>Misión:</strong> Transformar el acceso a la educación tecnológica, creando una plataforma donde todos puedan
          aprender a su propio ritmo, explorar nuevas habilidades y conectar con una comunidad que valore la colaboración, la innovación
          y la inclusión. No creemos en jerarquías educativas, sino en la curiosidad, la creatividad y la capacidad individual para 
          auto-superarse.
        </p>
        <p>
          <strong>Visión:</strong> Ser una organización reconocida por nuestro enfoque inclusivo y centrado en la comunidad, 
          donde el aprendizaje es accesible para todos y el crecimiento personal está impulsado por el apoyo colectivo y la autonomía. 
          Aspiramos a ser el referente en el desarrollo de talento tecnológico en diversas áreas, generando impacto a nivel global a 
          través de nuestras alianzas y programas educativos.
        </p>
      </div>

      <div className="section">
        <h2>Nuestros Valores</h2>
        <p>
          En APETECH, estamos guiados por los siguientes principios:
        </p>
        <ul>
          <li><strong>Inclusión:</strong> Creemos que la tecnología es para todos. Por eso, trabajamos para eliminar las barreras
          al aprendizaje, ofreciendo educación accesible y gratuita para aquellos que lo necesitan.</li>
          <li><strong>Autonomía:</strong> Fomentamos el aprendizaje autodirigido, permitiendo a cada persona avanzar a su propio ritmo, 
          descubriendo su propio camino y desarrollando habilidades clave para el mundo digital de hoy y del mañana.</li>
          <li><strong>Colaboración:</strong> Nadie crece solo. En nuestra comunidad, el aprendizaje ocurre a través del intercambio
          de conocimientos, la mentoría entre iguales y el apoyo mutuo. Creemos que aprender es tanto una experiencia individual
          como colectiva.</li>
          <li><strong>Innovación:</strong> Estamos comprometidos con la innovación continua. A través de la curiosidad y la creatividad,
          buscamos nuevas formas de acercar la tecnología a las personas y de hacer que el aprendizaje sea una experiencia emocionante y transformadora.</li>
        </ul>
      </div>

      <div className="section">
        <h2>Nuestro Compromiso</h2>
        <p>
          Nos comprometemos a seguir colaborando con instituciones, organizaciones y comunidades locales e internacionales
          para expandir el acceso a la educación tecnológica de alta calidad. Creemos que, mediante la tecnología, podemos
          crear un futuro más inclusivo, equitativo y próspero. Sabemos que el conocimiento empodera y transforma, y estamos aquí 
          para asegurarnos de que todas las personas tengan la oportunidad de aprender y crecer, sin importar de dónde vienen.
        </p>
        <p>
          Nuestro compromiso es con cada persona que, llena de curiosidad y determinación, se une a nuestra comunidad para 
          explorar el mundo de la tecnología. Estamos aquí para acompañarlos en cada paso de su viaje de aprendizaje, brindando
          no solo conocimientos, sino también un espacio donde puedan colaborar, compartir y crecer juntos.
        </p>
      </div>
    </div>
  );
};

export default About;

