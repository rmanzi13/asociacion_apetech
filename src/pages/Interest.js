import React from 'react';

const Interest = () => {
  const resources = [
    { name: "Curso Gratis de Python (Udemy)", url: "https://www.udemy.com/course/python-total/" },
    { name: "Curso de Introducción a Python (Google)", url: "https://developers.google.com/edu/python" },
    { name: "Python for Everybody (Coursera)", url: "https://www.coursera.org/specializations/python" },
    { name: "Automate the Boring Stuff with Python (Libro y Curso)", url: "https://automatetheboringstuff.com/" },
    { name: "Python 101 (Real Python)", url: "https://realpython.com/python-basics/resources/" },
    { name: "Curso Python desde Cero (YouTube)", url: "https://www.youtube.com/playlist?list=PLas30d-GGNa37H8xdxxRLXcH-4i_w1FeL" }
  ];

  return (
    <div className="interest-container">
      <h1>Te puede interesar</h1>
      <p>Aquí encontrarás enlaces útiles a recursos y cursos gratuitos:</p>
      <ul className="interest-list">
        {resources.sort((a, b) => a.name.localeCompare(b.name)).map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Interest;
