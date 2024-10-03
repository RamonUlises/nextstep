import React, { useState } from 'react';
import { EstrellasCalificar } from '../EstrellasCalificar';
import empresas from '@/lib/empresas';
import { TypeCalificar } from '@/types/calificar';

export const Calificar = ({
  id,
  empresa,
  setEstado,
  setCalificar,
}: {
  id: string;
  empresa: string;
  setEstado: React.Dispatch<React.SetStateAction<boolean>>;
  setCalificar: React.Dispatch<React.SetStateAction<TypeCalificar[]>>;
}) => {
  const [puntuacion, setPuntuacion] = useState<number>(0);

  function actualizarPuntuacion(_index: number, puntuacion: number) {  
    setPuntuacion(puntuacion);
  }
  async function calificarEmpresa() {
    try {
      const response = await empresas.calificarEmpresa(empresa, puntuacion, id);

      if (response.status === 200){
        setCalificar((prev) => {
          const newCalificar = prev.filter((cal) => cal.id !== id);
          return newCalificar;
        });
        
        setEstado(false);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='fixed top-0 left-0 bg-black/70 w-screen h-screen flex justify-center items-center'>
      <div className='bg-white p-8 rounded-md dark:bg-zinc-700 dark:text-white'>
        <h2 className='text-xl font-semibold text-center mb-4 '>Calificar</h2>
        <EstrellasCalificar value={puntuacion} index={0} actualizarPuntuacion={actualizarPuntuacion} />
        <button onClick={calificarEmpresa} className='bg-principal-600 text-white px-2 py-1 font-medium rounded mt-8 dark:bg-zinc-600 dark:border'>
          aceptar
        </button>
      </div>
    </div>
  );
};
