import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './Formulario.module.css'; // Importamos los estilos

interface FormState {
  nivel: string;
  desafio: string;
  tema: string;
  fecha: string;
  descripcion: string;
}

// Definimos los temas disponibles para cada nivel
const temasPorNivel: { [key: string]: string[] } = {
  '1': ['Figuras', 'Tema 2 del Nivel 1', 'Tema 3 del Nivel 1'],
  '2': ['Tema 1 del Nivel 2', 'Tema 2 del Nivel 2', 'Tema 3 del Nivel 2'],
  '3': ['Tema 1 del Nivel 3', 'Tema 2 del Nivel 3', 'Tema 3 del Nivel 3'],
  '4': ['Tema 1 del Nivel 4', 'Tema 2 del Nivel 4', 'Tema 3 del Nivel 4'],
  '5': ['Tema 1 del Nivel 5', 'Tema 2 del Nivel 5', 'Tema 3 del Nivel 5'],
  '6': ['Tema 1 del Nivel 6', 'Tema 2 del Nivel 6', 'Tema 3 del Nivel 6'],
};

export default function Formulario() {
  const [form, setForm] = useState<FormState>({
    nivel: '',
    desafio: '',
    tema: '',
    fecha: '',
    descripcion: ''
  });

  const [temasDisponibles, setTemasDisponibles] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Si el campo cambiado es el nivel, actualizamos los temas disponibles
    if (name === 'nivel') {
      setForm({
        ...form,
        tema: '', // Reiniciamos el tema seleccionado
        [name]: value
      });
      setTemasDisponibles(temasPorNivel[value]);
    } else {
      setForm({
        ...form,
        [name]: value
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', form);
    // Muestra la alerta
    alert('Se guardó correctamente ✅');
    // Limpiar el formulario
    setForm({
      nivel: '',
      desafio: '',
      tema: '',
      fecha: '',
      descripcion: ''
    });
    setTemasDisponibles([]);
  };

  return (
    <div className={styles.container}>
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
            name="fecha"
            value={form.fecha}
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
        <button type="submit" className={styles.button}>Registrar</button>
      </form>
      <a href="/Dashboard" className={styles.link}>Regresar</a>
    </div>
  );
}
