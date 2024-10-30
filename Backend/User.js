const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  country: String,
  region: String,
  interests: [String]
});

module.exports = mongoose.model('User', userSchema);

