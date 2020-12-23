import React, { useState, useEffect } from 'react'

import './Recordatorio.css'

export default function Recordatorio({cita, eliminarCita}) {

    
    const { nombre, fecha, hora, time, categoria, sensacion, precio, direccion, notas, id } = cita;
    
    const [ empty, guardarEmpty ] = useState(false);
    const [ price, showPrice ] = useState(false);
    const [ observ, guardarObserv ] = useState(false);

    useEffect(() => {
        if(!fecha || !hora) {
            guardarEmpty(true)
        }else if (notas.length === 0) {
            guardarObserv(true)
        }else if(price.length === 0) {
            showPrice(true)
        }
    }, [fecha, hora, notas, sensacion, precio])


    return (

        <div className="card">  

            <div className="data">
 
                <div className="nombre"><span className="title">Nombre:</span> {nombre}</div>

                {empty ? null : 
                (<div className="cuando"><span className="title">Fecha:</span> {fecha} <span className="title">Hora:</span> {hora}</div>)
                }

                <div className="nombre"><span className="title">Time:</span> {time}</div>
                
                <div className="nombre"><span className="title">Categoría:</span> {categoria}</div>

                {!price ? null :
                (<div className="cuando"><span className="title">Precio:</span> {precio}</div>)
                }
                
                <div className="nombre"><span className="title">Percepción:</span> {sensacion}</div>

                <div className="direccion"><span className="title">Dirección:</span> {direccion}</div>

                {observ ? 'Observaciones: Nada que decir...' : 
                (<div className="observaciones"><span className="title">Observaciones:</span> {notas}</div>)}

            </div>

            <button className="delete" onClick={() => eliminarCita(id)}>
                Eliminar Restaurante X
            </button>
        </div>
    )
}
