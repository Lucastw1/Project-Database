const express = require('express');
const router = express.Router();
const db = require('../db'); // Importa el módulo para interactuar con la base de datos

// Ruta para obtener todos los turnos
router.get('/turnos', async (req, res) => {
  try {
    const turnos = await db.query('SELECT * FROM turnos');
    res.json(turnos.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener los turnos.' });
  }
});

// Ruta para agregar un nuevo turno
router.post('/turnos', async (req, res) => {
  const { fecha, hora, nombre, comentario } = req.body;
  try {
    await db.query('INSERT INTO turnos (fecha, hora, nombre, comentario) VALUES ($1, $2, $3, $4)', [fecha, hora, nombre, comentario]);
    res.json({ message: 'Turno agregado con éxito.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al agregar el turno.' });
  }
});

// Otras rutas para actualizar y eliminar turnos

module.exports = router;
