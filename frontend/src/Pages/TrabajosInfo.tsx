import { HeaderTrabajo } from '@/Components/Trabajos/HeaderTrabajo';
import { MostrarInfo } from '@/Components/Trabajos/MostrarInfo';
import { Skeleton } from '@/Components/ui/skeleton';
import { Layout } from '@/Layouts/Layout';
import empresas from '@/lib/empresas';
import { obtenerInfo } from '@/lib/obtenerInfo';
import solicitudes from '@/lib/solicitudes';
import trabajosLib from '@/lib/trabajos';
import { TypeColaboradores } from '@/types/colaboradores';
import { TypeEmpresa } from '@/types/empresas';
import { TypeSolicitudes } from '@/types/solicitudes';
import { TypeTrabajos } from '@/types/trabajos';
import { obtenerCookie } from '@/utils/cookies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const TrabajosInfo = () => {
  const { id } = useParams();

  const [trabajo, setTrabajo] = useState<TypeTrabajos>({} as TypeTrabajos);
  const [empresa, setEmpresa] = useState<TypeEmpresa>({} as TypeEmpresa);
  const [user, setUser] = useState<TypeColaboradores | TypeEmpresa>(
    {} as TypeColaboradores
  );
  const [solicitud, setSolicitud] = useState<TypeSolicitudes>({
    id: '',
    'id-empresa': '',
    'id-trabajador': '',
    'id-trabajo': '',
    imagen: '',
    estado: 'pendiente',
    titulo: '',
    usuario: '',
    'titulo-trabajo': '',
  });
  const [solicitudEspera, setSolicitudEspera] = useState(['esperando']);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const cookie = obtenerCookie('UserId');

    if (!cookie || cookie == undefined) {
      window.location.href = '/login';
      return;
    }

    if (!id) return;

    (async () => {
      const trab = await trabajosLib.obtenerTrabajo(id);
      setTrabajo(trab);
      const colab = await obtenerInfo(cookie);
      setUser(colab.data[0]);
      const emp = await empresas.obtenerEmpresa(trab['id-empresa']);
      setEmpresa(emp.data);

      if ('usuario' in colab.data[0]) {
        setSolicitud({
          id: '',
          'id-empresa': emp.data.id,
          'id-trabajador': colab.data[0].id,
          'id-trabajo': trab.id,
          imagen: colab.data[0].imagen,
          estado: 'pendiente',
          titulo: 'Solicitud de trabajo',
          usuario: colab.data[0].usuario,
          'titulo-trabajo': trab.titulo,
        });
      }

      const soli = await solicitudes.obtenerSolicitud(
        trab.id,
        colab.data[0].id
      );
      if (soli.data) {
        setSolicitudEspera(soli.data);
        setMessage('Ya has aplicado a este trabajo');
      } else {
        setSolicitudEspera(['vacio']);
      }

      if (trab.estado !== 'activa') {
        setMessage('Este trabajo no está disponible');
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const crearSolicitud = async () => {
    try {
      const response = await solicitudes.crearSolicitud(solicitud);

      if (response.status === 200) {
        setMessage('Solicitud enviada con éxito');

        setTimeout(() => {
          window.location.href = '/trabajos';
        }, 2000);
      }
    } catch {
      setMessage('Error al enviar la solicitud');
    }
  };

  return (
    <>
      {solicitudEspera[0] === 'esperando' ? (
        <Skeleton className='w-screen h-screen bg-slate-400 dark:bg-black' />
      ) : (
        <Layout>
          {message && (
            <div className="bg-green-500 text-white text-center py-2 rounded-lg fixed px-4 md:mb-4 mr-4 top-0 right-0 z-40 mt-4 md:top-[90%] dark:bg-zinc-800">
              {message}
            </div>
          )}
          <HeaderTrabajo
            imagen={trabajo.imagen}
            nombre={trabajo.empresa}
            puntuados={empresa.puntuados}
            puntuacion={empresa.puntuacion}
            direccion={empresa.direccion}
          />
          <div className="px-2 flex flex-col-reverse md:flex-row md:gap-16 mt-12">
            <div className="flex flex-col items-center md:items-start lg:max-w-[450px] md:w-[40%]">
              <div className="bg-gradient-to-br from-secundario-500 to-secundario-700 text-white p-4 rounded-xl md:pb-24 dark:to-zinc-800 dark:from-zinc-600 w-full max-w-[350px] md:ml-8 md:max-w-[300px] lg:max-w-[350px] mt-8 md:mt-0">
                <h5 className="font-medium text-lg mt-4 text-center">
                  Salarios
                </h5>
                <p className="mt-3">
                  <span className="font-medium mr-3">Presupuesto mínimo</span>{' '}
                  C$
                  {trabajo['presupuesto-min']}
                </p>
                <p className="mt-2">
                  <span className="font-medium mr-3">Presupuesto máximo:</span>{' '}
                  C$
                  {trabajo['presupuesto-max']}
                </p>
                <h5 className="font-medium text-lg mt-16 text-center">
                  Beneficios
                </h5>
                <ul className="mt-4 flex flex-col gap-3">
                  {trabajo.beneficios &&
                    trabajo.beneficios.map((beneficio, index) => (
                      <li className="list-disc ml-8" key={index}>
                        {beneficio}.
                      </li>
                    ))}
                </ul>
                <h5 className="font-medium text-lg mt-16 text-center">
                  Categorias
                </h5>
                <ul className="mt-4 flex flex-col gap-3">
                  {trabajo.categorias &&
                    trabajo.categorias.map((categoria, index) => (
                      <li className="list-disc ml-8" key={index}>
                        {categoria}.
                      </li>
                    ))}
                </ul>
                <h5 className="font-medium text-lg mt-16 text-center">
                  Puntos NextStep
                </h5>
                <p className="text-center">{trabajo.puntos}</p>
              </div>
            </div>
            <div className="md:-mt-8 dark:text-white sm:px-16 md:px-0 px-4">
              <h2 className="font-medium text-xl">{trabajo.titulo}</h2>
              <h5 className="font-medium text-lg mt-8">Fechas:</h5>
              <p className="mt-3">
                <span className="font-medium">Fecha de publicación:</span>{' '}
                {trabajo['fecha-publicacion']}
              </p>
              <p className="mt-1">
                <span className="font-medium">Fecha de inicio:</span>{' '}
                {trabajo['fecha-inicio']}
              </p>
              <p className="mt-1">
                <span className="font-medium">Fecha de expiración:</span>{' '}
                {trabajo['fecha-expiracion']}
              </p>
              <h5 className="font-medium text-lg mt-8">Contrato:</h5>
              <p>{trabajo.contrato}.</p>
              <h5 className="font-medium text-lg mt-8">Ubicación:</h5>
              <p>{trabajo.ubicacion}.</p>
              <h5 className="font-medium text-lg mt-8">Descripción:</h5>
              <p>{trabajo.descripcion}.</p>

              <h5 className="font-medium text-lg mt-8 mb-2">
                Responsabilidades:
              </h5>
              <div>
                {trabajo.responsabilidades && (
                  <MostrarInfo option={trabajo.responsabilidades} />
                )}
              </div>
              <h5 className="font-medium text-lg mt-4 mb-2">Requisitos:</h5>
              <div>
                {trabajo.requisitos && (
                  <MostrarInfo option={trabajo.requisitos} />
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start mt-8 md:ml-[60%]">
            <button
              onClick={crearSolicitud}
              disabled={'nombre' in user || solicitudEspera[0] !== 'vacio' || trabajo.estado !== 'activa'}
              className="bg-principal-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-principal-500 transition-colors duration-500 disabled:bg-principal-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:disabled:bg-zinc-400"
            >
              ¡Aplica ya!
            </button>
          </div>
        </Layout>
      )}
    </>
  );
};
