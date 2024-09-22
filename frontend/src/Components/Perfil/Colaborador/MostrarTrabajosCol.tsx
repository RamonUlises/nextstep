import { TypeTrabajos } from '@/types/trabajos';
import { Check } from 'lucide-react';

export const MostrarTrabajosCol = ({
  trabajos,
  type,
}: {
  trabajos: TypeTrabajos[];
  type: string;
}) => {
  return (
    <div>
      {trabajos.length > 0 && (
        <div>
          <h2 className="font-semibold text-xl mt-8 dark:text-white">
            Trabajos
          </h2>
          <hr className="border-black border-2 mt-4 dark:border-zinc-400" />
          {trabajos.map((trabajo) => (
            <div
              key={trabajo.id}
              className="mt-12 bg-slate-200 px-4 py-4 rounded-xl flex justify-between items-center dark:bg-zinc-600 shadow-xl"
            >
              <div>
                <h3 className="font-medium text-lg dark:text-white">
                  {trabajo.titulo}
                </h3>
                <p className="text-base dark:text-white">
                  {trabajo.descripcion}
                </p>
              </div>
              {type === 'activa' ? (
                <div className="w-8 h-8 border-[6px] border-green-600 rounded-full dark:border-white"></div>
              ) : (
                <div className="w-8 h-8 border-[3px] border-green-600 flex items-center justify-center dark:border-white">
                  <Check className="text-green-600 dark:text-white" />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
