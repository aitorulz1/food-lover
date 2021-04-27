import React from 'react';
import Recordatorio from '../components/Registro/Recordatorio';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

const cita = jest.fn();

test('<Recordatorio /> Cargar el recordatorio y revisar que todo es correcto', () => {
    
    render(<Recordatorio cita={cita} />);
    
    expect(screen.getByText('Nombre:')).toBeInTheDocument();
    
    expect(screen.getByTestId('etiqueta').tagName).toBe('SPAN')
    expect(screen.getByTestId('etiqueta').textContent).toBe('Time:')
    expect(screen.getByTestId('etiqueta').textContent).not.toBe('Precio:')
    
});


test('<Recordatorio /> Validación botón', () => {

    render(<Recordatorio cita={cita} />);
    
    
    const cuando = screen.queryByTestId('cuando')
    expect(cuando).not.toBeInTheDocument();
    
    const howmuch = screen.queryByTestId('howmuch')
    expect(howmuch).not.toBeInTheDocument();
    
   


    const onSubmit = screen.getByTestId('btn-submit')
    
    expect( onSubmit.tagName).toBe('BUTTON');
    expect( onSubmit.textContent).toBe('Eliminar Restaurante X');
    expect( onSubmit.textContent).not.toBe('Agregar Nueva Cita');


});
