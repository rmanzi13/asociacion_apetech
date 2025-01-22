import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blog = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/articles`);
                setArticles(response.data);
            } catch (err) {
                setError('Error al cargar los artículos.');
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) {
        return <div>Cargando artículos...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="blog-container">
            <h1>Blog y Noticias</h1>
            <div className="blog-featured">
                {articles.length > 0 ? (
                    articles.map((article) => (
                        <div key={article._id} className="blog-card">
                            <h2>{article.title}</h2>
                            <p>{article.content.slice(0, 100)}...</p>
                            <Link to={`/blog/articulo/${article._id}`} className="btn-primary">
                                Leer más
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron artículos</p>
                )}
            </div>
        </div>
    );
};

export default Blog;