import React, { useState } from 'react';

const WebinarForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    description: '',
    date: '',
    content: '',
    speakerName: '',
    speakerBio: '',
    speakerImage: '',
    speakerLinkedIn: '',
	imageUrl: '', // Campo para la URL de la imagen
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialState = {
    title: '',
    link: '',
    description: '',
    date: '',
    content: '',
    speakerName: '',
    speakerBio: '',
    speakerImage: '',
    speakerLinkedIn: '',
  };
  
  const [imageUrl, setImageUrl] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Desactiva el botón al iniciar la solicitud
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/webinars`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) { // Cambiado para manejar respuestas no exitosas
        throw new Error('Error al crear el webinar');
      }

      const result = await response.json();
      console.log('Webinar creado exitosamente:', result);

      setFormData(initialState); // Limpia el formulario después de guardar
    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
    } finally {
      setIsSubmitting(false); // Reactiva el botón al finalizar
    }
  };

  return (
    <div>
      <h2>Crear Webinar</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Título"
        />
        <input
          type="text"
          name="link"
          value={formData.link}
          onChange={handleChange}
          placeholder="Enlace"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descripción"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Contenido"
        />
        <input
          type="text"
          name="speakerName"
          value={formData.speakerName}
          onChange={handleChange}
          placeholder="Nombre del ponente"
        />
        <textarea
          name="speakerBio"
          value={formData.speakerBio}
          onChange={handleChange}
          placeholder="Biografía del ponente"
        />
        <input
          type="text"
          name="speakerImage"
          value={formData.speakerImage}
          onChange={handleChange}
          placeholder="Imagen del ponente"
        />
        <input
          type="text"
          name="speakerLinkedIn"
          value={formData.speakerLinkedIn}
          onChange={handleChange}
          placeholder="LinkedIn del ponente"
        />
		<input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="URL de la imagen del webinar"
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Guardando...' : 'Guardar Webinar'}
        </button>
      </form>
    </div>
  );
};

export default WebinarForm;

