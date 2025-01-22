const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  icon: { type: String },
});

const Resource = mongoose.models.Resource || mongoose.model('Resource', resourceSchema);

module.exports = Resource;


