import trabajosLib from '@/lib/trabajos';
import { TypeTrabajos } from '@/types/trabajos';
import { Check, X } from 'lucide-react';
import { useState } from 'react';
import { FinalizarTrabajo } from './FinalizarTrabajo';

export const MostrarTrabajos = ({ trabajos, empresa }: { trabajos: TypeTrabajos[]; empresa: string }) => {
  const [trabajosActivos, setTrabajosActivos] = useState(
    trabajos.filter((trabajo) => trabajo.estado === 'activa')
  );
  const [trabajosFinalizados, setTrabajosFinalizados] = useState(
    trabajos.filter((trabajo) => trabajo.estado === 'finalizada')
  );
  const [trabajosCaducados, setTrabajosCaducados] = useState(
    trabajos.filter((trabajo) => trabajo.estado === 'caducada')
  );
  
  const [estado, setEstado] = useState(false);
  const [aplicantes, setAplicantes] = useState<{usuario: string, puntuacion: number }[]>([]);
  const [idTrabajo, setIdTrabajo] = useState('');
  const [trabajo, setTrabajo] = useState<TypeTrabajos>({} as TypeTrabajos);

  async function caducarTrabajo(id: string, trabajo: TypeTrabajos) {
    try {
      const response = await trabajosLib.caducarTrabajo(id);

      if (response.status === 200) {
        const trabajosActivosTemp = trabajosActivos.filter(
          (trabajo) => trabajo.id !== id
        );
        setTrabajosActivos(trabajosActivosTemp);
        setTrabajosCaducados([...trabajosCaducados, trabajo]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function finalizarTrabajo(aceptados: string[], id: string, trabajo: TypeTrabajos) {
    setEstado(true);
    setAplicantes(aceptados.map((usuario) => ({ usuario, puntuacion: 0 })));
    setIdTrabajo(id);
    setTrabajo(trabajo);
  }
  return (
    <>
      <FinalizarTrabajo trabajo={trabajo} id={idTrabajo} setEstado={setEstado} estado={estado} aplicantes={aplicantes} setAplicantes={setAplicantes} setTrabajosActivos={setTrabajosActivos} setTrabajosFinalizados={setTrabajosFinalizados} empresa={empresa} />
      <div>
        {trabajosActivos.length > 0 && (
          <div>
            <h2 className="font-semibold text-xl mt-8 dark:text-white">
              Ofertas activas
            </h2>
            <hr className="border-black border-2 mt-4 dark:border-zinc-400" />
            {trabajosActivos.map((trabajo) => (
              <div
                key={trabajo.id}
                className="bg-slate-200 dark:bg-zinc-600 rounded-xl shadow-xl"
              >
                <div className="mt-12 px-4 py-4 flex justify-between items-center ">
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
                {trabajo.aceptados.length > 0 && (
                  <div className="flex justify-center">
                    <div className="px-4">
                      <h5 className="text-center text-base font-medium mb-2 dark:text-white">
                        Aplicantes
                      </h5>
                      <div>
                        {trabajo.aceptados.map((aceptado, index) => (
                          <div key={index} className="mb-2 flex flex-col gap-1">
                            <p className="dark:text-white">{aceptado}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-center gap-6 pb-5">
                  <button
                    onClick={() => finalizarTrabajo(trabajo.aceptados, trabajo.id, trabajo)}
                    disabled={trabajo.aceptados.length === 0}
                    className="bg-principal-600 hover:bg-principal-500 px-3 py-1 text-white rounded-xl disabled:bg-principal-400 dark:bg-zinc-700 dark:disabled:bg-zinc-900 dark:hover:bg-zinc-800 transition-colors duration-300"
                  >
                    Finalizar
                  </button>
                  <button
                    onClick={() => caducarTrabajo(trabajo.id, trabajo)}
                    className="border-2 border-principal-600 px-3 py-1 text-principal-600 rounded-xl dark:border-zinc-700 dark:text-white"
                  >
                    Cadudar
                  </button>
                </div>
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
                className="mt-6 bg-slate-200 px-4 py-4 rounded-xl flex justify-between items-center dark:bg-zinc-600 shadow-xl"
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
                className="mt-6 bg-slate-200 px-4 py-4 rounded-xl flex justify-between items-center dark:bg-zinc-600 shadow-xl"
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
