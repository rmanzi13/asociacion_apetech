const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead'); // Importa el modelo Lead

// Ruta para obtener todos los leads
router.get('/', async (req, res) => {
    try {
        console.log("Buscando leads...");
        const leads = await Lead.find();
        console.log("Leads encontrados:", leads);  // Aquí podrás ver si se están obteniendo datos
        if (leads.length === 0) {
            return res.status(404).json({ message: 'No leads found' });
        }
        res.status(200).json(leads); 
    } catch (error) {
        console.error('Error al obtener leads:', error);  // Aquí podrás ver si ocurre algún error en la consulta
        res.status(500).json({ message: 'Error al obtener los leads', error: error.message });
    }
});

// Exporta las rutas
module.exports = router;
