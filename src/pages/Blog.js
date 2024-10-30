import React from 'react';
import './Blog.css'; // Asegúrate de crear los estilos correspondientes

const Blog = () => {
  return (
    <section className="blog">
      <div className="blog-header">
        <h1>Blog y Noticias</h1>
        <p>Conoce las últimas novedades de nuestra asociación y del mundo de la educación tecnológica.</p>
      </div>
      <div className="blog-grid">
        {/* Aquí puedes añadir más artículos o noticias */}
        <div className="blog-post">
          <img src="/assets/blog1.jpg" alt="Imagen artículo 1" />
          <h3>Título del Artículo</h3>
          <p>Breve introducción al artículo o noticia...</p>
          <a href="/blog/articulo1" className="read-more">Leer más</a>
        </div>
        <div className="blog-post">
          <img src="/assets/blog2.jpg" alt="Imagen artículo 2" />
          <h3>Título del Artículo</h3>
          <p>Breve introducción al artículo o noticia...</p>
          <a href="/blog/articulo2" className="read-more">Leer más</a>
        </div>
        {/* Añade más artículos según el contenido */}
      </div>
    </section>
  );
};

export default Blog;
