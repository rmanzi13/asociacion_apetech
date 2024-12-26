import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/articles/${id}`);
        if (!response.ok) throw new Error('Error obteniendo article');
        const data = await response.json();
        setArticle(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchArticle();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/articles/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(article),
      });
      if (!response.ok) throw new Error('Error actualizando article');
      alert('Article actualizado correctamente');
      window.location.href = '/admin/articles';
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  if (error) return <p>Error: {error}</p>;
  if (!article) return <p>Cargando article...</p>;

  return (
    <form onSubmit={handleUpdate}>
      <h1>Editar Article</h1>
      <input type="text" value={article.title} onChange={(e) => setArticle({ ...article, title: e.target.value })} />
      <textarea value={article.description} onChange={(e) => setArticle({ ...article, description: e.target.value })} />
	  <input type="text" value={article.author} onChange={(e) => setArticle({ ...article, author: e.target.value })} />
      <button type="submit">Actualizar</button>
    </form>
  );
};

export default EditArticle;
