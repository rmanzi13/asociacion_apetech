import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
    return (
        <div className="blog-container">
            <h1>Blog y Noticias</h1>
            <div className="blog-featured">
                <div className="blog-card">
                    <img 
                        src="https://res.cloudinary.com/dfzzoaw9l/image/upload/v1732732299/banner_mtzvjl.png" 
                        alt="Transformando vidas con tecnología" 
                        className="featured-image"
                    />
                    <h2>Transformando Vidas a Través de la Educación Tecnológica</h2>
                    <p>
                        Descubre cómo la educación tecnológica está impactando vidas y promoviendo la inclusión...
                    </p>
                    <Link to="/blog/articulo" className="btn-primary">Leer más</Link>
                </div>
            </div>
            <div className="blog-upcoming">
                <h3>Próximos Artículos</h3>
                <p>Estamos trabajando en contenido nuevo para ti. ¡Vuelve pronto!</p>
            </div>
        </div>
    );
};

export default Blog;
