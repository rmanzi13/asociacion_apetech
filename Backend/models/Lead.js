// models/Lead.js
const mongoose = require('mongoose');

// Definir el esquema para almacenar los datos del registro
const leadSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    region: { type: String, required: true },
    interests: [String],
    date: { type: Date, default: Date.now }
});

const Lead = mongoose.model('Lead', leadSchema);
module.exports = Lead;
