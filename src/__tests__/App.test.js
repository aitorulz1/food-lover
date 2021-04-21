import React from 'react';
import App from '../App';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('<App /> La aplicación funciona bien la primera vez', () => {
    render(<App/>);

    expect( screen.getByTestId('titulo-dinamico').textContent).toBe('Dóndeo puedo ir?');
    expect( screen.getByTestId('titulo-dinamico').textContent).not.toBe('Y por qué no a...');
});
