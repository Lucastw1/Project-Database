import React, { useEffect, useState } from 'react';


function App() {
  const [listaTurnos, setListaTurnos] = useState([]); // Cambia el nombre aquí

  useEffect(() => {
    // Realizar una solicitud GET al servidor para obtener los turnos
    fetch('/turnos')
      .then((response) => response.json())
      .then((data) => {
        setListaTurnos(data); // Cambia el nombre aquí
      })
      .catch((error) => {
        console.error('Error al obtener los turnos:', error);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Turnos</h1>
        <ul>
          {listaTurnos.map((turno) => (
            <li key={turno.id}>
              Fecha: {turno.fecha}, Hora: {turno.hora}, Nombre: {turno.nombre}, Comentario: {turno.comentario}
            </li>
          ))}
        </ul>
      </div>
      <div> <Turnos /> </div>
    </>
  );
}

export default App;
