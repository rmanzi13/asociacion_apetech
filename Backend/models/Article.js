const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Título del artículo
    content: { type: String, required: true }, // Contenido del artículo
	author: { type: String, required: true },
	image: { type: String }, // Nueva propiedad para almacenar la URL de la imagen
}, { timestamps: true });


module.exports = mongoose.model('Article', ArticleSchema);
