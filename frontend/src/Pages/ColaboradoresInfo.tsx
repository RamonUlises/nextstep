import { DatosArray } from '@/Components/Colaboradores/DatosArray';
import { DatosString } from '@/Components/Colaboradores/DatosString';
import { ImagenHeader } from '@/Components/Colaboradores/ImagenHeader';
import { Card } from '@/Components/Perfil/Card';
import { RedesSociales } from '@/Components/Perfil/RedesSociales';
import { Skeleton } from '@/Components/ui/skeleton';
import { Layout } from '@/Layouts/Layout';
import colaborador from '@/lib/colaboradores';
import { TypeColaboradores } from '@/types/colaboradores';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ColaboradoresInfo = () => {
  const { id } = useParams();

  const [colaboradorInfo, setColaboradorInfo] = useState<TypeColaboradores>(
    {} as TypeColaboradores
  );

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const response = await colaborador.obtenerColaborador(id);
        setColaboradorInfo(response);
      } catch {
        console.error('Error al obtener la información del colaborador');
      }
    })();
  }, [id]);

  return (
    <>
      {colaboradorInfo.nombres === undefined ? (
        <Skeleton className="w-screen h-screen bg-slate-400 dark:bg-black" />
      ) : (
        <Layout>
          <ImagenHeader imagen={colaboradorInfo['imagen-2']} />
          <div className="flex flex-col md:flex-row">
            <div className="mx-auto px-4">
              <Card
                email={colaboradorInfo.email}
                nombre={colaboradorInfo.usuario}
                imagen={colaboradorInfo.imagen}
                telefono={colaboradorInfo.telefono}
                value={colaboradorInfo.puntuacion / colaboradorInfo.puntuados}
              />
            </div>
            <div className="flex flex-col flex-grow mt-8 px-4 max-w-[750px] mx-auto dark:text-white md:mt-24">
              <DatosString
                text={colaboradorInfo.nombres}
                info="Nombres y apellidos"
              />
              <hr className="border-2 border-black my-6 dark:border-slate-300" />
              <div className="flex flex-wrap gap-1 justify-evenly">
                <h5 className="font-semibold mr-4">Educación secundaria:</h5>
                <p>
                  {colaboradorInfo['educacion-secundaria']
                    ? 'Terminada'
                    : 'No terminada'}
                </p>
              </div>
              <hr className="border-2 border-black my-6 dark:border-slate-300" />
              <div className="flex flex-wrap gap-1 justify-evenly">
                <h5 className="font-semibold mr-10">Educación primaria:</h5>
                <p>
                  {colaboradorInfo['educacion-primaria']
                    ? 'Terminada'
                    : 'No terminada'}
                </p>
              </div>
              <hr className="border-2 border-black my-6 dark:border-slate-300" />
              <div className="flex flex-col px-5">
                <h5 className="font-semibold">Descripción:</h5>
                <p className='mt-2'>{colaboradorInfo.descripcion}</p>
              </div>     
              {colaboradorInfo.titulos.length > 0 && (
                <>
                  <hr className="border-2 border-black my-6 dark:border-slate-300" />
                  <DatosArray title="Títulos" text={colaboradorInfo.titulos} />
                </>
              )}
              {colaboradorInfo.certificados.length > 0 && (
                <>
                  <hr className="border-2 border-black my-6 dark:border-slate-300" />
                  <DatosArray title="Certificados" text={colaboradorInfo.certificados} />
                </>
              )}
              {colaboradorInfo.habilidades.length > 0 && (
                <>
                  <hr className="border-2 border-black my-6 dark:border-slate-300" />
                  <DatosArray title="Habilidades" text={colaboradorInfo.habilidades} />
                </>
              )}
              {colaboradorInfo.idiomas.length > 0 && (
                <>
                  <hr className="border-2 border-black my-6 dark:border-slate-300" />
                  <DatosArray title="Idiomas" text={colaboradorInfo.idiomas} />
                </>
              )}
              {colaboradorInfo.referencias.length > 0 && (
                <>
                  <hr className="border-2 border-black my-6 dark:border-slate-300" />
                  <DatosArray title="Referencias" text={colaboradorInfo.referencias} />
                </>
              )}
              {colaboradorInfo['redes-sociales'].length > 0 && (
                <>
                  <hr className="border-2 border-black my-6 dark:border-slate-300" />
                  <RedesSociales redes={colaboradorInfo['redes-sociales']} />
                </>
              )}
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};
