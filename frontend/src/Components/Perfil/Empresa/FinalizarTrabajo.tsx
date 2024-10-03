import React, { useEffect } from 'react';
import { EstrellasCalificar } from '@/Components/EstrellasCalificar';
import trabajosLib from '@/lib/trabajos';
import { TypeTrabajos } from '@/types/trabajos';

export const FinalizarTrabajo = ({
  id,
  estado,
  aplicantes,
  trabajo,
  empresa,
  setEstado,
  setAplicantes,
  setTrabajosFinalizados,
  setTrabajosActivos,
}: {
  id: string;
  estado: boolean;
  aplicantes: { usuario: string; puntuacion: number }[];
  trabajo: TypeTrabajos;
  empresa: string;
  setEstado: (estado: boolean) => void;
  setAplicantes: React.Dispatch<
    React.SetStateAction<
      { usuario: string; puntuacion: number; }[]
    >
  >;
  setTrabajosFinalizados: React.Dispatch<React.SetStateAction<TypeTrabajos[]>>;
  setTrabajosActivos: React.Dispatch<React.SetStateAction<TypeTrabajos[]>>;
}) => {
  const [saldo, setSaldo] = React.useState(0);
  const [error, setError] = React.useState('');

  useEffect(() => {
    if (estado) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setAplicantes([]);
      setSaldo(0);
      setError('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [estado]);

  function actualizarPuntuacion(index: number, puntuacion: number) {
    setAplicantes((prevState) => {
      const newState = [...prevState];
      newState[index].puntuacion = puntuacion;
      return newState;
    });
  }

  function actualizarSaldo(e: React.ChangeEvent<HTMLInputElement>) {
    setSaldo(parseInt(e.target.value));
  }

  async function finalizarTrabajo(
    apli?: { usuario: string; puntuacion: number }[]
  ) {
    setError('');
    if (saldo === 0) {
      setError('El saldo no puede ser 0');
      return;
    }
    if (saldo < trabajo['presupuesto-min']) {
      setError(
        'El saldo no puede ser menor al presupuesto mínimo antes propuesto'
      );
      return;
    }
    if (saldo > trabajo['presupuesto-max']) {
      setError(
        'El saldo no puede ser mayor al presupuesto máximo antes propuesto'
      );
      return;
    }

    try {
      if (apli) {
        const response = await trabajosLib.finalizarTrabajo(id, empresa,[] ,saldo, trabajo.puntos, trabajo.titulo ,apli);
        if (response.status === 200) {
          setEstado(false);
        }
      } else {
        const puntuados = aplicantes.map((aplicante) => aplicante.usuario);
        
        const response = await trabajosLib.finalizarTrabajo(id, empresa, puntuados, saldo, trabajo.puntos, trabajo.titulo);
        if (response.status === 200) {
          setEstado(false);
        }
      }

      setTrabajosActivos((prevState) => {
        const newState = prevState.filter((trabajo) => trabajo.id !== id);
        return newState;
      });
      setTrabajosFinalizados((prevState) => {
        const newState = [...prevState, trabajo];
        return newState;
      });
    } catch {
      console.error('Error al finalizar el trabajo');
    }
  }

  return (
    <div
      className={`${
        estado ? 'flex' : 'hidden'
      } fixed top-0 left-0 w-screen h-screen z-[9999] bg-black/60 justify-center items-center`}
    >
      <div className="md:w-1/2 h-auto bg-white p-6 rounded-xl flex flex-col gap-4 md:max-w-[450px] dark:bg-zinc-700 dark:text-white">
        <h2 className="font-semibold text-xl text-center">
          Calificar colaboradores
        </h2>
        {aplicantes.map((aplicante, index) => (
          <div key={index} className="flex flex-col gap-3">
            <h5>
              Califica a{' '}
              <span className="font-semibold">{aplicante.usuario}</span>
            </h5>
            <EstrellasCalificar
              index={index}
              actualizarPuntuacion={actualizarPuntuacion}
              value={aplicante.puntuacion}
            />
          </div>
        ))}
        <div className="flex w-full justify-center mt-4">
          <input
            value={saldo === 0 ? '' : saldo}
            onChange={actualizarSaldo}
            type="number"
            placeholder="Saldo a pagar"
            className="bg-slate-200 pl-4 py-1 rounded w-full outline-none"
          />
        </div>

        <p className="text-red-500 text-center">{error}</p>

        <div className="flex flex-col">
          <button
            onClick={() => finalizarTrabajo(aplicantes)}
            className="bg-principal-600 text-white px-2 rounded py-1 mt-2 dark:bg-zinc-600 dark:border"
          >
            Finalizar
          </button>
          <button
            onClick={() => finalizarTrabajo()}
            className="bg-principal-600 text-white px-2 rounded py-1 mt-2 dark:bg-zinc-600 dark:border"
          >
            Finalizar sin calificar
          </button>
          <button
            onClick={() => setEstado(false)}
            className="border-2 border-principal-600 text-principal-600 px-2 rounded py-1 mt-2 dark:border-white dark:text-white"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
