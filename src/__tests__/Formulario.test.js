import React from 'react';
import Formulario from '../components/Form/Formulario';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

// Así no da fallo render formulario crearCita
const almacenarRecordatorio = jest.fn();

test('<Formulario /> Cargar el formulario y revisar que todo es correcto', () => {

    render(<Formulario almacenarRecordatorio={almacenarRecordatorio} />);
    expect( screen.getByText('Nombre')).toBeInTheDocument();
 
    expect( screen.getByTestId('titulo').tagName).toBe('label');
    

});

test('<Formulario /> Validación Input de formulario', () => {

    render(<Formulario almacenarRecordatorio={almacenarRecordatorio} />);

     userEvent.type(screen.getByTestId('nombre'), 'DonZoko');
});