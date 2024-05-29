import React, { useEffect, useState } from 'react';
import styles from './Dashboard.module.css';
import Link from 'next/link';

interface FormData {
  nivel: string;
  desafio: string;
  tema: string;
  fecha_creacion: string;
  descripcion: string;
}

export default function Dashboard() {
  const [data, setData] = useState<FormData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:3100/foros');
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError('Error al cargar los datos. Por favor, inténtalo de nuevo.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>
      {isLoading ? (
        <p className={styles.loading}>Cargando...</p>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : (
        <ul className={styles.list}>
          {data.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <label><strong>Desafío:</strong></label>
              <textarea
                value={item.desafio}
                readOnly
                className={styles.desafioTextarea} 
              />
              <p><strong>Nivel:</strong> {item.nivel}</p>
              <p><strong>Tema:</strong> {item.tema}</p>
              <p><strong>Fecha de Creación:</strong> {item.fecha_creacion}</p>
              <label><strong>Descripción:</strong></label>
              <textarea
                value={item.descripcion}
                readOnly
                className={styles.descripcionTextarea} 
              />
            </li>
          ))}
        </ul>
      )}
      <Link href="/formul" className={styles.link}>Crear Nuevo Desafío</Link>
    </div>
  );
}
