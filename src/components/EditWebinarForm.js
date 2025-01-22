import React, { useState, useEffect } from 'react';

const EditWebinarForm = ({ webinarToEdit, fetchWebinars, onCancel }) => {
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
	imageUrl: '', // Nueva propiedad para la URL de la imagen
  };

  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatDateForInput = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Devuelve en formato yyyy-MM-dd
  };

  useEffect(() => {
	console.log('webinarToEdit recibido:', webinarToEdit); // Muestra webinarToEdit al inicializar
    if (webinarToEdit) {
      setFormData({
        ...webinarToEdit,
        date: webinarToEdit.date ? formatDateForInput(webinarToEdit.date) : '',
      });
    } else {
      setFormData(initialState);
    }
  }, [webinarToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const webinarId = webinarToEdit?._id; // Usa _id para obtener el identificador
  console.log('webinarId:', webinarId);

  if (!webinarId) {
    console.error('El id del webinar no está definido');
    setIsSubmitting(false);
    return;
  }

  const token = localStorage.getItem('token');

  try {
    const response = await fetch(`http://localhost:4000/api/webinars/${webinarId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    console.log('Respuesta del servidor:', response);

    if (!response.ok) {
      throw new Error('Error al actualizar el webinar');
    }

    console.log('Webinar actualizado exitosamente');
    fetchWebinars(); // Actualizar la lista de webinars
  } catch (error) {
    console.error('Error al actualizar el webinar:', error);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div>
      <h2>{webinarToEdit ? 'Editar Webinar' : 'Crear Webinar'}</h2>
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
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="URL de la imagen del webinar"
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
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Guardando...' : webinarToEdit ? 'Actualizar Webinar' : 'Crear Webinar'}
        </button>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default EditWebinarForm;



