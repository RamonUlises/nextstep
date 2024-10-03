import { TypeColaboradores } from '@/types/colaboradores';
import { Datos } from '../Datos';
import { RedesSociales } from '../RedesSociales';
import { Eliminar } from '../Eliminar';
import { CambiarContrasena } from '../CambiarContraseña';
import { EditarColaborador } from './EditarColaborador';

export const Colaborador1 = ({
  colaborador,
}: {
  colaborador: TypeColaboradores;
}) => {
  return (
    <div className="mt-24 sm:mt-12 lg:max-w-[70%] mx-auto dark:text-white">
      <Datos title="Nombre" text={colaborador.nombres} />
      <hr className="bg-transparent border-2 border-black/60 my-4 dark:border-white/60" />
      <Datos title="Teléfono" text={colaborador.telefono} />
      <hr className="bg-transparent border-2 border-black/60 my-4 dark:border-white/60" />
      <div className="flex items-center justify-evenly flex-wrap gap-2">
        <h5 className="font-medium text-base">Educación primaria</h5>
        <p>
          {colaborador['educacion-primaria'] ? 'Terminada' : 'No terminada'}
        </p>
      </div>
      <hr className="bg-transparent border-2 border-black/60 my-4 dark:border-white/60" />
      <div className="flex items-center justify-evenly flex-wrap gap-2">
        <h5 className="font-medium text-base">Educación secundaria</h5>
        <p>
          {colaborador['educacion-secundaria'] ? 'Terminada' : 'No terminada'}
        </p>
      </div>
      <hr className="bg-transparent border-2 border-black/60 my-4 dark:border-white/60" />
      <Datos title="Correo" text={colaborador.email} />
      <hr className="bg-transparent border-2 border-black/60 my-4 dark:border-white/60" />
      {colaborador['redes-sociales'].length > 0 && (
        <>
          <RedesSociales redes={colaborador['redes-sociales']} />
          <hr className="bg-transparent border-2 border-black/60 my-4 dark:border-white/60" />
        </>
      )}
      <div>
        <h5 className="font-medium text-base">Descripción</h5>
        <p>{colaborador.descripcion}</p>
      </div>
      <hr className="bg-transparent border-2 border-black/60 my-4 dark:border-white/60" />
      {colaborador.titulos.length > 0 && (
        <>
          <Datos title="Títulos" text={colaborador.titulos} />
          <hr className="bg-transparent border-2 border-black/60 my-4 dark:border-white/60" />
        </>
      )}
      {colaborador.certificados.length > 0 && (
        <>
          <Datos title="Certificados" text={colaborador.certificados} />
          <hr className="bg-transparent border-2 border-black/60 my-4 dark:border-white/60" />
        </>
      )}
      {colaborador.habilidades.length > 0 && (
        <>
          <Datos title="Habilidades" text={colaborador.habilidades} />
          <hr className="bg-transparent border-2 border-black/60 my-4 dark:border-white/60" />
        </>
      )}
      {colaborador.idiomas.length > 0 && (
        <>
          <Datos title="Idiomas" text={colaborador.idiomas} />
          <hr className="bg-transparent border-2 border-black/60 my-4 dark:border-white/60" />
        </>
      )}
      {colaborador.referencias.length > 0 && (
        <>
          <Datos title="Referencias" text={colaborador.referencias} />
        </>
      )}
      <h5 className='mt-16 text-blue-500 font-semibold'>Editar</h5>
      <hr className="bg-transparent border-2 border-blue-500/60 dark:border-white/60" />
      <div className='flex items-center gap-4'>
        <EditarColaborador colaborador={colaborador} />
        <CambiarContrasena type='colaborador' id={colaborador.id} />
      </div>
      <h5 className=" text-red-500 font-semibold mt-8">Zona de peligro</h5>
      <hr className="bg-transparent border-2 border-red-500/60 dark:border-white/60" />
      <Eliminar id={colaborador.id} nombre={colaborador.usuario} type='colaborador' />
    </div>
  );
};
