import React from 'react';
import Formulario from '../components/Form/Formulario';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';


const almacenarRecordatorio = jest.fn();

test('<Formulario /> Cargar el formulario y revisar que todo es correcto', () => {

    render(<Formulario almacenarRecordatorio={almacenarRecordatorio} />);
    
    expect(screen.getByText('Nombre')).toBeInTheDocument();

    //label
    const etiqueta = screen.getByTestId('etiqueta');
    expect(etiqueta.tagName).toBe('LABEL')
    expect(screen.getByTestId('etiqueta').tagName).not.toBe('H1')
    expect(screen.getByTestId('etiqueta').textContent).toBe('Nombre');

    //button
    expect(screen.getByTestId('btn-reservar').tagName).toBe('BUTTON')
    expect(screen.getByTestId('btn-reservar').textContent).toBe('¿Reservar?')
    expect(screen.getByTestId('btn-reservar').textContent).not.toBe('¿Reservar Hora?')

    
});


test('<Formulario /> Validación de formulario', () => {

    render(<Formulario almacenarRecordatorio={almacenarRecordatorio} />);

    // Click en el botón de submit
     const btnSubmit = screen.getByTestId('btn-submit');
    userEvent.click(btnSubmit);

    // Revisar por la alerta
    const alerta = screen.queryByTestId('alerta')
    expect(alerta).not.toBeInTheDocument();
});


test('<Formulario /> Validación Input de formulario', () => {

    render(<Formulario almacenarRecordatorio={almacenarRecordatorio} />);

    const alerta = screen.queryByTestId('alerta')
    expect(alerta).not.toBeInTheDocument();

    const onSubmit = screen.getByTestId('onclick')
    userEvent.click(onSubmit);

    userEvent.type(screen.getByTestId('nombre'), 'DonZoko');
});