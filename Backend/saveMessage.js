const Message = require('./models/Message');

const saveMessage = async (name, email, message) => {
  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    console.log('Mensaje guardado correctamente');
  } catch (error) {
    console.error('Error al guardar el mensaje:', error);  // Imprime el error
    throw error;  // Re-lanzar el error para manejarlo en `contact.js`
  }
};

module.exports = saveMessage;




0