import { MapPinCheck, UserRoundXIcon } from 'lucide-react';
import { Estrellas } from '../Perfil/Estrellas';

export const HeaderTrabajo = ({
  nombre,
  direccion,
  puntuacion,
  puntuados,
  imagen,
}: {
  nombre: string;
  direccion?: string[];
  puntuacion: number;
  puntuados: number;
  imagen: string;
}) => {
  return (
    <div className="header-trabajo flex flex-col justify-end items-start pt-24">
      <div className="flex flex-col z-10 md:px-24 pb-4 mx-auto md:mx-0">
        {imagen !== 'sin-imagen' ? (
          <div className="text-white rounded-full w-[150px] h-[150px] overflow-hidden flex items-center">
            <img
              src={imagen}
              alt="foto de perfil"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="bg-white text-white rounded-full shadow-xl drop-shadow-xl w-auto h-auto p-8 dark:bg-zinc-600">
            <UserRoundXIcon
              width={150}
              height={150}
              className="text-principal-600 dark:text-white"
            />
          </div>
        )}

        <h4 className="text-center font-bold text-xl mt-8 dark:text-white">
          {nombre}
        </h4>
        {direccion && direccion.length > 0 && (
          <div className="flex items-center justify-center mt-4 gap-4 dark:text-white">
            <MapPinCheck />
            <p>{direccion}</p>
          </div>
        )}

        <div className="flex items-center justify-center -mt-8">
          <Estrellas
            color="text-principal-600 dark:text-white"
            value={puntuacion / puntuados}
          />
        </div>
      </div>
    </div>
  );
};
