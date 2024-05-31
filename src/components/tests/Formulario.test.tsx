import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// Eliminar la siguiente línea
// import '@testing-library/jest-dom/extend-expect'; // Importar jest-dom para las pruebas
import Formulario from '@/components/Formulario';
// Eliminar la siguiente línea
// import '@testing-library/jest-dom';


global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ message: 'Success' }),
  })
) as jest.Mock; // Añade un punto y coma aquí

describe('Formulario', () => {
  test('envía los datos correctamente al servicio web', async () => {
    render(<Formulario />);

    fireEvent.change(screen.getByLabelText(/Nombre de usuario:/i), { target: { value: 'Angie' } });
    fireEvent.change(screen.getByLabelText(/Nivel:/i), { target: { value: '3' } });
    fireEvent.change(screen.getByLabelText(/Tema:/i), { target: { value: 'Multiplicación y División Básicas' } });
    fireEvent.change(screen.getByLabelText(/Desafío:/i), { target: { value: 'Multiplicación y División' } });
    fireEvent.change(screen.getByLabelText(/Fecha de realización:/i), { target: { value: '2023-05-01' } });
    fireEvent.change(screen.getByLabelText(/Descripción:/i), { target: { value: 'Resolver problemas básicos de multiplicación y división.' } });

    fireEvent.click(screen.getByText(/Registrar/i));

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    expect(global.fetch).toHaveBeenCalledWith('https://vercel.com/angi-noemis-projects/proyecto-final', expect.objectContaining({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nivel: '3',
        desafio: 'Multiplicación y División',
        tema: 'Multiplicación y División Básicas',
        fecha_creacion: '2023-05-01',
        descripcion: 'Resolver problemas básicos de multiplicación y división.',
        nombre_usuario: 'Angie'
      })
    }));
  });

  test('renderiza el formulario con los datos esperados', () => {
    render(<Formulario />);
    expect(screen.getByLabelText(/Nombre de usuario:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nivel:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Tema:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Desafío:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Fecha de realización:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Descripción:/i)).toBeInTheDocument();
  });
});
