import { Datos } from '../Datos';
import { RedesSociales } from '../RedesSociales';
import { TypeEmpresa } from '@/types/empresas';

export const Empresa1 = ({ empresa }: { empresa: TypeEmpresa }) => {
  return (
    <div className="mt-12 lg:max-w-[70%] mx-auto dark:text-white">
      <Datos title="Nombre" text={empresa.nombre} />
      <hr className="bg-transparent border-2 border-black/60 my-4 dark:border-white/60" />
      <Datos title="Correo" text={empresa.email} />
      <hr className="bg-transparent border-2 border-black/60 my-4 dark:border-white/60" />
      <Datos title="Teléfono" text={empresa.telefono} />
      <hr className="bg-transparent border-2 border-black/60 my-4 dark:border-white/60" />
      <Datos title="Dirección" text={empresa.direccion} />
      {empresa['sitio-web'] !== 'sin-sitio-web' && (
        <>
          <hr className="bg-transparent border-2 border-black/60 my-4 dark:border-white/60" />
          <Datos title="Sitio web" text={empresa['sitio-web']} />
        </>
      )}
      <hr className="bg-transparent border-2 border-black/60 my-4 dark:border-white/60" />
      <Datos title="Objetivos" text={empresa.objetivos} />
      <hr className="bg-transparent border-2 border-black/60 my-4 dark:border-white/60" />
      <h5 className='font-medium text-base'>Redes sociales</h5>
      <RedesSociales redes={empresa['redes-sociales']} />
      <hr className="bg-transparent border-2 border-black/60 my-4 dark:border-white/60" />
      <div>
        <h5 className='font-medium text-base'>Misión</h5>
        <p>{empresa.mision}</p>
      </div>
      <hr className="bg-transparent border-2 border-black/60 my-4 dark:border-white/60" />
      <div>
        <h5 className='font-medium text-base'>Visión</h5>
        <p>{empresa.vision}</p>
      </div>
    </div>
  );
};
