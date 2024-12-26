import React, { useState } from 'react';

const CreateWebinar = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newWebinar = { title, description, date, link, image };
    try {
      const response = await fetch('http://localhost:4000/api/webinars', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newWebinar),
      });
      if (!response.ok) throw new Error('Error creando webinar');
      alert('Webinar creado correctamente');
      window.location.href = '/admin/webinars';
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Crear Webinar</h1>
      <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="url" placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)} required />
      <input type="url" placeholder="Imagen" value={image} onChange={(e) => setImage(e.target.value)} required />
      <button type="submit">Crear</button>
    </form>
  );
};

export default CreateWebinar;
