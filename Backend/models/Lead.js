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

// Esto puede ayudar a depurar
leadSchema.set('toJSON', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

const Lead = mongoose.model('Lead', leadSchema);
module.exports = Lead;
