import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditWebinar = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWebinar = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/webinars/${id}`);
        if (!response.ok) {
		  console.error(`Error: ${response.statusText}`);
          throw new Error('Error al obtener el webinar');
        }
        const data = await response.json();
		console.log('Webinar obtenido:', data); // Verifica los datos recibidos
        setTitle(data.title || '');
        setDescription(data.description || '');
        setDate(data.date ? data.date.slice(0, 10) : ''); // Formato YYYY-MM-DD
        setLink(data.link || '');
        setImage(data.image || '');
      } catch (err) {
		  console.error('Error fetching webinar:', err.message); // Agrega este log
        setError(err.message);
      }
    };

    fetchWebinar();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/webinars/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, date, link, image }),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el webinar');
      }

      alert('Webinar actualizado correctamente');
    } catch (err) {
      setError(err.message);
    }
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Editar Webinar</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enlace"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL de la imagen"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Actualizar Webinar</button>
      </form>
    </div>
  );
};

export default EditWebinar;


