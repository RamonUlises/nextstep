import { TypeTrabajos } from '@/types/trabajos';
import { Check, X } from 'lucide-react';

export const MostrarTrabajos = ({ trabajos }: { trabajos: TypeTrabajos[] }) => {
  const trabajosActivos = trabajos.filter(
    (trabajo) => trabajo.estado === 'activa'
  );
  const trabajosFinalizados = trabajos.filter(
    (trabajo) => trabajo.estado === 'finalizada'
  );
  const trabajosCaducados = trabajos.filter(
    (trabajo) => trabajo.estado === 'caducada'
  );
  return (
    <>
      <div>
        {trabajosActivos.length > 0 && (
          <div>
            <h2 className="font-semibold text-xl mt-8 dark:text-white">
              Ofertas activas
            </h2>
            <hr className="border-black border-2 mt-4 dark:border-zinc-400" />
            {trabajosActivos.map((trabajo) => (
              <div key={trabajo.id}>
                <div
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
                  <div className="w-8 h-8 border-[6px] border-green-600 rounded-full dark:border-white"></div>
                </div>
                {
                  (trabajo.aceptados.length > 0) && (
                    <div className='flex justify-center'>
                      <div className='bg-slate-200 dark:bg-zinc-600 w-1/2 px-4'>
                        <h5 className='text-center text-base font-medium mb-2 dark:text-white'>Aplicantes</h5>
                        <div>
                          {
                            trabajo.aceptados.map((aceptado, index) => (
                              <div key={index} className='mb-2 flex flex-col gap-1'>
                                <p className='dark:text-white'>{aceptado}</p>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
            ))}
          </div>
        )}
        {trabajosFinalizados.length > 0 && (
          <div>
            <h2 className="font-semibold text-xl mt-8 dark:text-white">
              Ofertas finalizadas
            </h2>
            <hr className="border-black border-2 mt-4 dark:border-zinc-400" />
            {trabajosFinalizados.map((trabajo) => (
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
                <div className="w-8 h-8 border-[3px] border-green-600 flex items-center justify-center dark:border-white">
                  <Check className="text-green-600 dark:text-white" />
                </div>
              </div>
            ))}
          </div>
        )}
        {trabajosCaducados.length > 0 && (
          <div>
            <h2 className="font-semibold text-xl mt-8 dark:text-white">
              Ofertas caducadas
            </h2>
            <hr className="border-black border-2 mt-4 dark:border-zinc-400" />
            {trabajosCaducados.map((trabajo) => (
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
                <div className="w-8 h-8 border-[3px] border-red-600 rounded-full flex items-center justify-center dark:border-white">
                  <X className="text-red-600 dark:text-white" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
