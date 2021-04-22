import React, { Fragment, useState } from 'react';
import shortid from 'shortid';

import Error from '../Error/Error';

import PropTypes from 'prop-types';

import './Formulario.css';

export default function Formulario({ almacenarRecordatorio }) {


    const [recordatorio, guardarRecordatorio] = useState({
        nombre: '',
        fecha: '',
        hora: '',
        time: '',
        categoria: '',
        sensacion: '',
        precio: '',
        direccion: '',
        notas: ''
    })

    const [setprecio, setPrecio] = useState('');

    const { nombre, fecha, hora, time, categoria, direccion, sensacion, precio, notas, id } = recordatorio;

    const [error, guardarError] = useState(false);

    const [verreserva, guardarVer] = useState(false);
    const [button, showButton] = useState(true);
    const [verprice, guardarVerPrice] = useState(false);
    const [priceButton, showPriceButton] = useState(true);






    const onClickVer = () => {
        guardarVer(true)
        showButton(false)
    }

    const onClickVerPrice = () => {
        guardarVerPrice(true)
        showPriceButton(false)
    }


    const onChange = e => {
        guardarRecordatorio({
            ...recordatorio,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        if (nombre.trim() === '' || categoria.trim() === '') {
            guardarError(true)
            return;
        }

        guardarError(false);

        recordatorio.sensacion = setprecio;
        recordatorio.id = shortid.generate();


        guardarRecordatorio({
            nombre: '',
            fecha: '',
            hora: '',
            time: '',
            categoria: '',
            sensacion: '',
            precio: '',
            direccion: '',
            notas: '',
        }
        )



        almacenarRecordatorio(recordatorio);
        guardarVer(false);
        showButton(true);
        guardarVerPrice(false);
        showPriceButton(true);

    }


    return (
        <Fragment>

            { error ? <Error data-testid='alerta' message='Debe de rellenar todos los campos' /> : null}

            <form
                data-testid='onclick'
                onSubmit={onSubmit}
            >

                <div className="block-half">

                    <div className="label">
                        <label data-testid='etiqueta'>Nombre</label>
                    </div>

                    <input
                        data-testid='nombre'
                        type="text"
                        placeholder="nombre del restaurante"
                        name='nombre'
                        value={nombre}
                        onChange={onChange}
                        className="citainput"
                    />

                    {button ? (

                        <button
                            data-testid='btn-reservar'
                            type='button'
                            className='button'
                            onClick={onClickVer}
                        >¿Reservar?</button>

                    )
                        : null}



                    {verreserva ? (

                        <form>
                            <div className="time">

                                <div className="label">
                                    <label data-testid='fecha'>Fecha</label>
                                </div>

                                <input
                                    type="date"
                                    placeholder="fecha"
                                    name='fecha'
                                    value={fecha}
                                    onChange={onChange}
                                    className="citainput"
                                />

                            </div>

                            <div className="time">

                                <div className="label">
                                    <label>Hora</label>
                                </div>

                                <input
                                    type="time"
                                    placeholder="hora"
                                    name='hora'
                                    value={hora}
                                    onChange={onChange}
                                    className="citainput"
                                />

                            </div>

                        </form>
                    )
                        :

                        null
                    }



                    <div className="label">
                        <label>Para...</label>
                    </div>

                    <select
                        name='time'
                        value={time}
                        onChange={onChange}
                        className="citainput"
                    >
                        <option value="">-- Select --</option>
                        <option type="checkbox" value="desayuno">Desayuno/Brunch</option>
                        <option type="checkbox" value="comida">Comida</option>
                        <option type="checkbox" value="cena">Cena</option>

                    </select>


                    <div className="label">
                        <label>Categoría</label>
                    </div>

                    <select
                        name='categoria'
                        value={categoria}
                        onChange={onChange}
                        className="citainput"
                    >

                        <option value="">-- Select --</option>
                        <option value="americano">Americano</option>
                        <option value="griego">Griego</option>
                        <option value="indio">Indio</option>
                        <option value="italiano">Italiano</option>
                        <option value="japones">Japonés</option>
                        <option value="libanes">Libanés</option>
                        <option value="mexicano">Mexicano</option>
                        <option value="">Chino</option>

                    </select>

                </div>




                <div className="block-half">

                    <div className="label">
                        <label>Dirección</label>
                    </div>

                    <input
                        type="text"
                        placeholder="guarda la dirección"
                        name='direccion'
                        value={direccion}
                        onChange={onChange}
                        className="citainput"
                    />


                    {priceButton ? (

                        <button
                            type='button'
                            className='button'
                            onClick={onClickVerPrice}
                        >Precio</button>

                    )
                        : null}

                    {verprice ? (

                        <form className="radius">

                            <div className="label-radius">
                                <label>Me resultó...</label>
                            </div>


                            <div className="radio"><input className="radio" type="radio" name='sensacion' checked={setprecio === 'barato'} value='barato' onChange={e => setPrecio(e.target.value)} />Barato</div>
                            <div className="radio"><input className="radio" type="radio" name='sensacion' checked={setprecio === 'medio'} value='medio' onChange={e => setPrecio(e.target.value)} />Medio</div>
                            <div className="radio"><input className="radio" type="radio" name='sensacion' checked={setprecio === 'caro'} value='caro' onChange={e => setPrecio(e.target.value)} />Caro</div>

                            <input
                                type="number"
                                placeholder="precio/persona"
                                name='precio'
                                value={precio}
                                onChange={onChange}
                                className="citainput-precio"
                            />

                        </form>



                    ) : null}

                    <div className="label">
                        <label>Notas</label>
                    </div>
                    <input
                        type="text"
                        placeholder="Qué tienes que decir?"
                        name='notas'
                        value={notas}
                        onChange={onChange}
                        className="citainput-notas"
                    />

                </div>


                <input
                    data-testid='btn-submit'
                    type="submit"
                    value='Subir Restaurante'
                    className="buttoncita"
                />

            </form>

        </Fragment>

    )
}


Formulario.propTypes = {
    almacenarRecordatorio: PropTypes.func.isRequired
}