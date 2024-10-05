import trabajosLib from '@/lib/trabajos';
import { TypeEmpresa } from '@/types/empresas';
import { TypeTrabajos } from '@/types/trabajos';
import { useEffect, useState } from 'react';
import { MostrarTrabajos } from './MostrarTrabajos';

export const Empresa2 = ({ empresa }: { empresa: TypeEmpresa }) => {
  const [trabajos, getTrabajos] = useState<TypeTrabajos[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await trabajosLib.obtenerTrabajosPorEmpresa(
          empresa.id
        );

        if (response.status === 200) {
          getTrabajos(response.data);
        }
      } catch {
        // eslint-disable-next-line no-console
        console.log('error');
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mt-12 w-full mx-auto dark:text-white">
      {trabajos.length === 0 ? (
        <h3 className="font-semibold text-center text-xl mt-8 dark:text-white">
          Sin ofertas públicadas
        </h3>
      ) : (
        <MostrarTrabajos trabajos={trabajos} />
      )}
    </div>
  );
};
