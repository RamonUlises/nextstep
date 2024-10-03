import solicitudes from '@/lib/solicitudes';
import { Estado, TypeSolicitudes } from '@/types/solicitudes';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CardPendiente } from './Buzon/CardPendiente';
import { CardAceptadaRechazada } from './Buzon/CardAceptadaRechazada';
import { TypeCalificar } from '@/types/calificar';
import { CardCalificar } from './Buzon/CardCalificar';

export const Buzon = ({
  option,
  handleBuzon,
  id,
  type,
  usuario,
}: {
  option: boolean;
  handleBuzon: (option: boolean) => void;
  id: string;
  type: string;
  usuario: string;
}) => {
  const [solicitud, setSolicitud] = useState<TypeSolicitudes[]>([]);
  const [calificar, setCalificar] = useState<TypeCalificar[]>([]);
  const [estado, setEstado] = useState<boolean>(false);

  useEffect(() => {
    if (option) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    (async () => {
      if (type === 'empresa') {
        if(id === undefined) return;
        const response = await solicitudes.obtenerSolicitudesEmpesa(id);

        if (response.status === 200) {
          setSolicitud(response.data);
        }
      } else {
        if(id === undefined) return;
        const res1 = await solicitudes.obtenerSolicitudesTrabajador(id);

        if (res1.status === 200) {
          setSolicitud(res1.data);
        }

        if(usuario === undefined) return;
        const res2 = await solicitudes.obtenerCalificaciones(usuario);

        if (res2.status === 200) {
          setCalificar(res2.data);
        }
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [option]);

  async function actualizarEstado(
    idSol: string,
    estado: Estado,
    idTrabajo: string,
    usuario: string
  ) {
    try {
      const resonse = await solicitudes.actualizarEstadoSolicitud(
        idSol,
        estado,
        idTrabajo,
        usuario
      );

      if (resonse.status === 200) {
        setSolicitud(solicitud.filter((sol) => sol.id !== idSol));
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <section
        className={`${
          option ? 'flex' : 'hidden'
        } fixed top-0 left-0 w-screen h-screen bg-black/70 z-[999] items-center justify-center`}
      >
        <div className="h-[80vh] w-[90%] max-w-[410px] sm:w-[60%] bg-white dark:bg-zinc-900 relative rounded-lg md:max-w-[480px] p-4">
          <div
            onClick={() => handleBuzon(false)}
            className="absolute top-0 right-0 border-2 border-black rounded-full mt-2 mr-2 cursor-pointer dark:border-white dark:text-white"
          >
            <X width={30} height={30} />
          </div>
          <h3 className="text-xl font-semibold dark:text-white">Buzón</h3>
          <div className="mt-4">
            {
              calificar.map(cal => (
                <CardCalificar
                  setCalificar={setCalificar}
                  key={cal.id}
                  titulo={cal.titulo}
                  estado={estado}
                  setEstado={setEstado}
                  id={cal.id}
                  empresa={cal['id-empresa']}
                />
              ))
            }
            {solicitud
              .filter((sol) => sol.estado === 'pendiente')
              .map((sol) => (
                <CardPendiente
                  key={sol.id}
                  usuario={sol.usuario}
                  imagen={sol.imagen}
                  id={sol.id}
                  tituloTrabajo={sol['titulo-trabajo']}
                  titulo={sol.titulo}
                  actualizarEstado={actualizarEstado}
                  idTrabajo={sol['id-trabajo']}
                />
              ))}
            {solicitud
              .filter(
                (sol) => sol.estado === 'aceptado' || sol.estado === 'rechazado'
              )
              .map((sol) => (
                <CardAceptadaRechazada
                  key={sol.id}
                  estado={sol.estado}
                  imagen={sol.imagen}
                  titulo={sol.titulo}
                  tituloTrabajo={sol['titulo-trabajo']}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};
