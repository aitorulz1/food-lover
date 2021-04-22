import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import './Recordatorio.css';

export default function Recordatorio({ cita, eliminarCita }) {


    const { nombre, fecha, hora, time, categoria, sensacion, precio, direccion, notas, id } = cita;

    const [empty, guardarEmpty] = useState(false);
    const [price, showPrice] = useState(false);
    const [feeling, showFeeling] = useState(false);
    const [observ, guardarObserv] = useState(false);

    useEffect(() => {
        if (!fecha || !hora) {
            guardarEmpty(true)
        } if (!notas) {
            guardarObserv(true)
        } if (!price) {
            showPrice(true)
        } if (!sensacion) {
            showFeeling(true)
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

                {price ? null :
                    (<div className="cuando"><span className="title">Precio:</span> {precio}</div>)
                }

                {feeling ? null :
                    (<div className="nombre"><span className="title">Percepción:</span> {sensacion}</div>)
                }

                <div className="direccion"><span className="title">Dirección:</span> {direccion}</div>

                {observ ? null :
                    (<div className="observaciones"><span className="title">Observaciones:</span> {notas}</div>)}

            </div>

            <button className="delete" onClick={() => eliminarCita(id)}>
                Eliminar Restaurante X
            </button>
        </div>
    )
}

Recordatorio.protoTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}