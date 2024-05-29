'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Formulario.module.css'; // Importamos los estilos

interface FormState {
  nivel: string;
  desafio: string;
  tema: string;
  fecha_creacion: string;
  descripcion: string;
}

// Definimos los temas disponibles para cada nivel
const temasPorNivel: { [key: string]: string[] } = {
  '1': ['Números y Conteo', 'Sumas y restas básicas', 'Formas y patrones'],
  '2': ['Sumas y Restas con Llevadas', 'Introducción a la Multiplicación', 'Medición'],
  '3': ['Multiplicación y División Básicas', 'Fracciones Simples', 'Conceptos de Tiempo'],
  '4': ['Operaciones con Múltiples Dígitos', 'Fracciones y Decimales', 'Geometría Básica'],
  '5': ['Fracciones y Decimales', 'Porcentajes', 'Estadística'],
  '6': ['Álgebra básica', 'Proporciones y Razones', 'Probabilidad y Gráficos'],
};

export default function Formulario() {
  const [form, setForm] = useState<FormState>({
    nivel: '',
    desafio: '',
    tema: '',
    fecha_creacion: '',
    descripcion: ''
  });

  const [temasDisponibles, setTemasDisponibles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'nivel') {
      setForm({
        ...form,
        nivel: value,
        tema: '' // Reiniciamos el tema seleccionado
      });
      setTemasDisponibles(temasPorNivel[value]);
    } else {
      setForm({
        ...form,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    console.log(JSON.stringify(form));

    try {
      const response = await fetch('http://localhost:3100/foros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const result = await response.json();
      console.log('Formulario enviado:', result);

      alert('Se guardó correctamente ✅');

      setForm({
        nivel: '',
        desafio: '',
        tema: '',
        fecha_creacion: '',
        descripcion: ''
      });
      setTemasDisponibles([]);
    } catch (error) {
      console.error('Error:', error);
      setError('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <img src='/numeros.jpg' alt='Numeros' className={styles.logo}/>
      <img src='/figuras.jpg' alt='Figuras' className={styles.logo}/>
      <img src='/numeros.jpg' alt='Numeros' className={styles.logo}/>
      <h1 className={styles.title}>Foro</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="nivel">Nivel:</label>
          <select
            id="nivel"
            name="nivel"
            value={form.nivel}
            onChange={handleChange}
            required
            className={styles.select}
          >
            <option value="">Seleccione un nivel</option>
            <option value="1">Nivel 1</option>
            <option value="2">Nivel 2</option>
            <option value="3">Nivel 3</option>
            <option value="4">Nivel 4</option>
            <option value="5">Nivel 5</option>
            <option value="6">Nivel 6</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="tema">Tema:</label>
          <select
            id="tema"
            name="tema"
            value={form.tema}
            onChange={handleChange}
            required
            className={styles.select}
          >
            <option value="">Seleccione un tema</option>
            {temasDisponibles.map((tema, index) => (
              <option key={index} value={tema}>{tema}</option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="desafio">Desafío:</label>
          <input
            type="text"
            id="desafio"
            name="desafio"
            value={form.desafio}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="fecha">Fecha de realización:</label>
          <input
            type="date"
            id="fecha"
            name="fecha_creacion"
            value={form.fecha_creacion}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            required
            className={styles.textarea}
          ></textarea>
        </div>
        <button type="submit" className={styles.button} disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Registrar'}
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
      <a href="/" className={styles.link}>Regresar</a>
    </div>
  );
}
