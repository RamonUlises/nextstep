import { BadgeCheck, Eye, Hourglass, MapPinned } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CardTrabajos = ({
  titulo,
  empresa,
  ubicacion,
  id,
  fecha,
  img,
}: {
  titulo: string;
  empresa: string;
  ubicacion: string;
  id: string;
  img: string;
  fecha: string;
}) => {
  return (
    <div className="bg-gradient-to-br flex flex-col sm:flex-row items-center to-[#1562AD] from-[#144678] w-full rounded-2xl text-white font-medium relative md:max-w-[800px] sm:max-w-[550px] max-w-[400px] dark:to-zinc-700 dark:from-zinc-800">
      <div className="h-full sm:w-[50%] sm:mt-0 mt-16 flex items-center justify-center">
        <div className="rounded-full w-[180px] h-[180px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px] overflow-hidden">
          <img
            src={img}
            alt="Imagen de la empresa"
            className="w-full h-full object-cover bg-transparent"
          />
        </div>
      </div>
      <div className="sm:w-[75%] flex flex-col pt-6 pb-16">
        <div className="flex justify-end">
          <div className="bg-principal-600 opacity-80 rounded-tl-3xl rounded-bl-3xl flex items-center py-3 px-6 gap-2 -mr-2 absolute sm:static top-0 right-0 mt-2 dark:bg-zinc-700">
            <Hourglass />
            <p>{fecha}</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-center sm:text-start">{titulo}</h2>
        <div className='flex items-center justify-center gap-4 sm:justify-start'>
          <BadgeCheck />
          <h5 className="text-lg font-normal">{empresa}</h5>
        </div>
        <div className="flex gap-4 items-center text-base font-normal mt-4">
          <MapPinned />
          <p>{ubicacion}</p>
        </div>

        <div className="flex gap-4 items-center mt-2">
          <Eye />
          <Link to={`trabajos/${id}`}>Detalles</Link>
        </div>
      </div>
    </div>
  );
};
