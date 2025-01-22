const mongoose = require('mongoose');

const webinarSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
	imageUrl: { type: String }, // Nuevo campo para la URL de la imagen
    link: { type: String, required: true },
    content: [{ type: String }], // Lista de contenido opcional
    speakerName: { type: String, required: false },
    speakerBio: { type: String, required: false },
    speakerImage: { type: String, required: false },
    speakerLinkedIn: { type: String, required: false },
});

module.exports = mongoose.model('Webinar', webinarSchema);





