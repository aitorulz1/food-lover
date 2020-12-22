import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Form/Formulario';
import Recordatorio from './components/Registro/Recordatorio';
import Header from './components/Main/Header';

import './App.css';

function App() {

  // Localstorage
  let citasLocalStorage = JSON.parse(localStorage.getItem('citas'));
  if(!citasLocalStorage) {
    citasLocalStorage = [];
  }

  const [ citas, guardarCitas ] = useState(citasLocalStorage);

  // Mantener citas refrescando página
  useEffect(() => {
    if(citasLocalStorage){
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas])

  



  // Crear citas obteniendo cita
  const almacenarRecordatorio = recordatorio => {
    guardarCitas([
      ...citas,
      recordatorio
    ])
  }


  // Eliminar Recordatorio
  const eliminarCita = id => {
    const restantes = citas.filter(c => c.id !== id);
    guardarCitas(restantes)
  }



  // Cambio de título
  const titulo = citas.length === 0 ? 'Dóndeo puedo ir?' : 'Y por qué no a...';





  return (
    <Fragment>

        <div className="wrapper">

                <Header />

            <div className="half">

                <Formulario 
                  almacenarRecordatorio= { almacenarRecordatorio }
                />

            </div>
            
            <div className="half-sec">
              
                <div className="titulo">{titulo}</div>
        
                  {citas.map(cita => (
                    <Recordatorio
                        key={cita.id}
                        cita={cita}
                        eliminarCita={eliminarCita}
                    />
                  ))}
        
              </div>

        </div>

    </Fragment>
  );
}

export default App;

