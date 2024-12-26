import React, { useState, useEffect } from 'react';

const AdminArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/articles');
                const data = await response.json();
                setArticles(data);
            } catch (error) {
                console.error('Error al obtener los artículos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    const deleteArticle = async (id) => {
        try {
            await fetch(`http://localhost:4000/api/articles/${id}`, { method: 'DELETE' });
            setArticles(articles.filter((article) => article._id !== id));
        } catch (error) {
            console.error('Error al eliminar el artículo:', error);
        }
    };

    if (loading) return <p>Cargando artículos...</p>;

    return (
        <div>
            <h1>Administrar Artículos</h1>
			<button onClick={() => window.location.href = '/admin/articles/create'}>Crear Articulo</button>
            <ul>
                {articles.map((article) => (
                    <li key={article._id}>
                        <h2>{article.title}</h2>
                        <button onClick={() => deleteArticle(article._id)}>Eliminar</button>
						<button onClick={() => window.location.href = `/admin/articles/edit/${article._id}`}>Editar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminArticles;
