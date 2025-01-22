import React from "react";
import { Link } from "react-router-dom";
import '../pages/Noticias.css';

const Noticias = () => {
    return (
        <div className="noticias-container">
            <h1>Noticias</h1>
            <div className="noticias-featured">
                <div className="noticias-card">
                    <img 
                        src="https://res.cloudinary.com/dfzzoaw9l/image/upload/v1732732299/banner_mtzvjl.png" 
                        alt="Transformando vidas con tecnología" 
                        className="featured-image"
                    />
                    <h2>Transformando Vidas a Través de la Educación Tecnológica</h2>
                    <p>
                        Descubre cómo la educación tecnológica está impactando vidas y promoviendo la inclusión...
                    </p>
                    {/* Cambiamos a una URL fija para esta noticia */}
                    <Link to="/noticias/articulo" className="btn-primary">Leer más</Link>
                </div>
            </div>
        </div>
    );
};

export default Noticias;

















