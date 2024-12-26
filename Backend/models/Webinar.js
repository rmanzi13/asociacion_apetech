const mongoose = require('mongoose');

const webinarSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  link: { type: String, required: true },
  image: { type: String, required: true },
});

const Webinar = mongoose.model('Webinar', webinarSchema); // Aquí se define Webinar correctamente

module.exports = Webinar; // Exporta el modelo Webinar

