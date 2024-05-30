import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
// Eliminar la siguiente línea
// import '@testing-library/jest-dom/extend-expect'; // Importar jest-dom para las pruebas
import Dashboard from '@/components/Dashboard';
// Eliminar la siguiente línea
// import '@testing-library/jest-dom';


global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([
      {
        nivel: '3',
        desafio: 'Multiplicación y División',
        tema: 'Multiplicación y División Básicas',
        fecha_creacion: '2023-05-01',
        descripcion: 'Resolver problemas básicos de multiplicación y división.',
        nombre_usuario: 'Angie'
      }
    ]),
  })
) as jest.Mock; // Añade un punto y coma aquí

describe('Dashboard', () => {
  test('recupera y muestra los datos correctamente', async () => {
    render(<Dashboard />);
    expect(screen.getByText(/Cargando.../i)).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText(/Nombre de usuario:/i)).toBeInTheDocument());
    expect(screen.getByText(/Angie/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Multiplicación y División/i)).toHaveLength(3);
});
});
