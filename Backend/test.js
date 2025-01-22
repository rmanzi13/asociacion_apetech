// test.js
const { fetchResources } = require('../services/resourceAPI');

fetchResources()
  .then(data => console.log('Datos obtenidos en test.js:', data))
  .catch(error => console.error('Error en test.js:', error));

