import { TypeEmpresa } from '@/types/empresas';
import { MapPinned, Phone, UserRoundXIcon } from 'lucide-react';
import { CSSProperties, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Estrellas } from '../Perfil/Estrellas';

export const Card = ({
  empresa,
  index,
}: {
  empresa: TypeEmpresa;
  index: number;
}) => {
  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    calcularMargin();
    window.addEventListener('resize', calcularMargin);

    return () => {
      window.removeEventListener('resize', calcularMargin);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function calcularMargin() {
    if (window.innerWidth < 679) {
      setMarginTop(32 * (index + 1) + 60);
    }
    if (window.innerWidth >= 679 && window.innerWidth < 1010) {
      if (window.innerWidth >= 768) {
        const groupIndex = Math.floor(index / 2);
        setMarginTop(32 * (groupIndex + 1) + 160);
      } else {
        const groupIndex = Math.floor(index / 2);
        setMarginTop(32 * (groupIndex + 1) + 66);
      }
    }
    if (window.innerWidth >= 1010 && innerWidth < 1343) {
      const groupIndex = Math.floor(index / 3);
      setMarginTop(32 * (groupIndex + 1) + 160);
    }
    if (window.innerWidth >= 1343) {
      const groupIndex = Math.floor(index / 4);
      setMarginTop(32 * (groupIndex + 1) + 160);
    }
  }

  const cardStyle: CSSProperties = {
    '--margin-top': `${marginTop}px`,
  } as CSSProperties & { '--margin-top': string };
  return (
    <Link
      to={`/empresas/${empresa.id}`}
      className={`bg-gradient-to-t w-full rounded-xl text-white font-medium relative max-w-[300px] card2 mx-4 mt-8 flex flex-col cursor-pointer ${
        empresa.nivel === 2
          ? 'to-yellow-600 from-zinc-900 dark:to-rose-900 dark:from-zinc-900'
          : 'dark:from-zinc-800 dark:to-zinc-700 to-[#1562AD] from-[#144678]'
      }`}
      style={cardStyle}
    >
      <div className="container-card flex flex-col items-center px-5 h-full w-full">
        {empresa.imagen !== 'sin-imagen' ? (
          <figure className="bg-transparent rounded-full w-[180px] h-[180px] flex items-center justify-center overflow-hidden mt-5 shadow-2xl drop-shadow-2xl">
            <img
              src={empresa.imagen}
              alt="foto de perfil"
              className="w-full h-full object-cover"
            />
          </figure>
        ) : (
          <figure className="bg-white text-white rounded-full shadow-xl drop-shadow-xl p-8 dark:bg-zinc-700 mt-5 w-[180px] h-[180px] flex justify-center items-center">
            <UserRoundXIcon
              width={105}
              height={105}
              className="text-principal-600 dark:text-white"
            />
          </figure>
        )}
        <figcaption className="flex flex-col w-full">
          <h3 className="mt-8 font-semibold text-xl text-center">
            {empresa.nombre}
          </h3>
          <div className="flex items-center mt-3 gap-4 justify-center">
            <MapPinned />
            <span>{empresa.direccion[0]}</span>
          </div>
          <div className="flex items-center mt-3 gap-4 justify-center mb-12">
            <Phone />
            <p>{empresa.telefono[0]}</p>
          </div>
        </figcaption>
        <div className="flex justify-center mb-8 mt-auto">
          <Estrellas
            color={`${
              empresa.nivel === 2
                ? 'shadow-xl drop-shadow-xl dark:text-rose-600 dark:shadow-rose-500 text-yellow-500 shadow-yellow-600'
                : 'text-white'
            }`}
            value={empresa.puntuacion / empresa.puntuados}
          />
        </div>
      </div>
    </Link>
  );
};
