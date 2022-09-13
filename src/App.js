import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'
import Proptypes from 'prop-types'

function App() {

  //citas in local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if (!citasIniciales) {
    citasIniciales = [];
  }

  // Array citas
  const [citas, guardarCitas] = useState(citasIniciales);

  useEffect(() => {
     if(citasIniciales){
       localStorage.setItem('citas', JSON.stringify(citas))
     }else{
       localStorage.setItem('citas', JSON.stringify([]));
     }
  }, [citas, citasIniciales])

  // Function witch push in citias Array
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  const eliminarCita = id => {

    const nuevasCitas = citas.filter(x => x.id !== id)

    guardarCitas(nuevasCitas);
  }

  const titulo = citas.length === 0 ? "Agregar Cita" : "Administra tus Citas";

  return (
    <div className="App">
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            ></Formulario>
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              ></Cita>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
Formulario.Proptypes = {
  crearCita: Proptypes.func.isRequired
}


export default App;
