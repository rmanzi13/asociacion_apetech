import React, { useState } from 'react';

const CreateArticle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArticle = { title, description, author };
    try {
      const response = await fetch('http://localhost:4000/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newArticle),
      });
      if (!response.ok) throw new Error('Error creando article');
      alert('Article creado correctamente');
      window.location.href = '/admin/articles';
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Crear Article</h1>
      <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="text" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <button type="submit">Crear</button>
    </form>
  );
};

export default CreateArticle;