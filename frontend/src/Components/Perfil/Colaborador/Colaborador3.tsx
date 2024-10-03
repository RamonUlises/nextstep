import trabajosLib from '@/lib/trabajos';
import { TypeTrabajos } from '@/types/trabajos';
import { useEffect, useState } from 'react';
import { MostrarTrabajosCol } from './MostrarTrabajosCol';

export const Colaborador3 = ({ usuario }: { usuario: string }) => {
  const [trabajos, setTrabajos] = useState<TypeTrabajos[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await trabajosLib.obtenerTrabajosPorUsuario(usuario, 'finalizada');

        if (response.status === 200) {
          setTrabajos(response.data);
        }
      } catch (error) {
        console.error('error', error);
      }
    })();
  }, []);

  return (
    <div className="lg:max-w-[70%] mx-auto dark:text-white mt-14 sm:mt-0">
      <div className="grid grid-cols-1 gap-4 mt-4">
        {trabajos.length === 0 ? (
          <h3 className="font-semibold text-center text-xl mt-8 dark:text-white">
            Sin historial de trabajos
          </h3>
        ) : (
          <MostrarTrabajosCol type='Finalizadas' trabajos={trabajos} />
        )}
      </div>
    </div>
  );
};
