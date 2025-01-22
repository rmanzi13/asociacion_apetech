// controllers/webinarController.js
const Webinar = require('../models/Webinar'); // Asegúrate de que la ruta sea correcta
const { ObjectId } = require('mongodb');

// Función para inicializar los datos de ejemplo
const initializeWebinars = async () => {
  const existingWebinars = await Webinar.find(); // Busca webinars existentes
  if (existingWebinars.length === 0) {
    // Solo inserta si no hay webinars existentes
    await Webinar.insertMany([
      {
        title: "Nombre del Webinar",
        description: "Descripción del webinar",
        date: "2025-02-10T14:00:00Z",
        content: ["Tema 1", "Tema 2", "Tema 3"],
        speakerName: "Nombre del Ponente",
        speakerBio: "Breve biografía del ponente",
        speakerLinkedIn: "https://linkedin.com/in/speaker",
        speakerImage: "https://ruta.de.la.imagen",
        link: "https://link-al-webinar.com",
      },
      // Agrega más webinars si es necesario
    ]);
    console.log("Webinars inicializados en la base de datos.");
  } else {
    console.log("Webinars ya existentes en la base de datos.");
  }
};

// Llama a la función en la inicialización del servidor
initializeWebinars();

// Controlador para obtener todos los webinars
const getWebinars = async (req, res) => {
  try {
    console.log('Entrando en el controlador getWebinars');
    const webinars = await Webinar.find(); // Consulta todos los webinars desde la base de datos
    console.log('Webinars obtenidos:', webinars);
    res.status(200).json(webinars);
  } catch (error) {
    console.error('Error al obtener los webinars:', error.message);
    res.status(500).json({ error: 'Error al obtener los webinars' });
  }
};

// Controlador para obtener un webinar por ID
const getWebinarById = async (req, res) => {
  try {
    const webinarId = req.params.id;
    // Convertimos el id en ObjectId si es un string numérico
    if (!ObjectId.isValid(webinarId)) {
      return res.status(400).json({ error: 'ID inválido' });
    }

    const webinar = await Webinar.findById(webinarId); // Busca un webinar por ID
    if (!webinar) return res.status(404).json({ error: 'Webinar no encontrado' });
    res.status(200).json(webinar);
  } catch (error) {
    console.error('Error al obtener el webinar:', error.message);
    res.status(500).json({ error: 'Error al obtener el webinar' });
  }
};

module.exports = { getWebinars, getWebinarById };
