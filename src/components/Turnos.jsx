import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Turnos() {
  const [turnos, setTurnos] = useState([]);
  const [nuevoTurno, setNuevoTurno] = useState({
    fecha: '',
    hora: '',
    nombre: '',
    comentario: '',
  });

  // Función para obtener la lista de turnos
  const obtenerTurnos = async () => {
    try {
      const response = await axios.get('/api/turnos'); // Ruta de la API
      setTurnos(response.data);
    } catch (error) {
      console.error('Error al obtener los turnos', error);
    }
  };

  useEffect(() => {
    obtenerTurnos();
  }, []);

  // Función para agregar un nuevo turno
  const agregarTurno = async () => {
    try {
      await axios.post('/api/turnos', nuevoTurno); // Ruta de la API
      obtenerTurnos();
      setNuevoTurno({
        fecha: '',
        hora: '',
        nombre: '',
        comentario: '',
      });
    } catch (error) {
      console.error('Error al agregar el turno', error);
    }
  };

  return (
    <div>
      <h1>Turnos</h1>
      <ul>
        {turnos.map((turno) => (
          <li key={turno.id}>
            Fecha: {turno.fecha}, Hora: {turno.hora}, Nombre: {turno.nombre}, Comentario: {turno.comentario}
          </li>
        ))}
      </ul>
      <h2>Agregar Turno</h2>
      <input
        type="date"
        placeholder="Fecha"
        value={nuevoTurno.fecha}
        onChange={(e) => setNuevoTurno({ ...nuevoTurno, fecha: e.target.value })}
      />
      <input
        type="time"
        placeholder="Hora"
        value={nuevoTurno.hora}
        onChange={(e) => setNuevoTurno({ ...nuevoTurno, hora: e.target.value })}
      />
      <input
        type="text"
        placeholder="Nombre y apellido"
        value={nuevoTurno.nombre}
        onChange={(e) => setNuevoTurno({ ...nuevoTurno, nombre: e.target.value })}
      />
      <input
        type="text"
        placeholder="Comentario"
        value={nuevoTurno.comentario}
        onChange={(e) => setNuevoTurno({ ...nuevoTurno, comentario: e.target.value })}
      />
      <button onClick={agregarTurno}>Agregar Turno</button>
    </div>
  );
}

export default Turnos;
