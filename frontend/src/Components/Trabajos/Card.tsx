import { Eye, Hourglass, MapPinned } from 'lucide-react';
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
    <div className="bg-gradient-to-br flex items-center to-[#1562AD] from-[#144678] w-full rounded-2xl text-white font-medium">
      <div className="h-full w-[35%] flex items-center justify-center ">
        <div className="rounded-full w-[180px] h-[180px] overflow-hidden">
          <img
            src={img}
            alt="Imagen de la empresa"
            className="w-full h-full object-cover bg-transparent"
          />
        </div>
      </div>
      <div className="w-[75%] flex flex-col pt-6 pb-16 gap-6">
        <div className="flex justify-end">
          <div className="bg-principal-600 opacity-80 rounded-tl-3xl rounded-bl-3xl flex items-center py-3 px-6 gap-2 -mr-2">
            <Hourglass />
            <p>{fecha}</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold">{titulo}</h2>
        <h5 className="text-xl font-normal pl-12">{empresa}</h5>
        <div className="flex gap-4 items-center text-base font-normal">
          <MapPinned />
          <p>{ubicacion}</p>
        </div>

        <div className="flex gap-4 items-center">
          <Eye />
          <Link to={`trabajos/${id}`}>Detalles</Link>
        </div>
      </div>
    </div>
  );
};
