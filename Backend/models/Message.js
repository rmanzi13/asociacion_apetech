const mongoose = require('mongoose');

// Definir el esquema del mensaje
const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }, // Guarda la fecha de cuando se recibe el mensaje
});

const Message = mongoose.model('Message', messageSchema); // El nombre de la colección será 'messages' en plural
module.exports = Message;