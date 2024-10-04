import { TypeColaboradores } from '@/types/colaboradores';
import { UserRoundXIcon } from 'lucide-react';
import { Estrellas } from '../Perfil/Estrellas';
import { CSSProperties, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Card = ({
  colaborador,
  index,
}: {
  colaborador: TypeColaboradores;
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

  function calcularMargin(){
    if(window.innerWidth < 679){
      setMarginTop((32 * (index + 1)) + 60);
    }
    if(window.innerWidth >= 679 && window.innerWidth < 1010){
      if(window.innerWidth >= 768){
        const groupIndex = Math.floor(index / 2);
        setMarginTop((32 * (groupIndex + 1)) + 160);
      } else {
        const groupIndex = Math.floor(index / 2);
        setMarginTop((32 * (groupIndex + 1)) + 66);
      }
    }
    if(window.innerWidth >= 1010 && innerWidth < 1343){
      const groupIndex = Math.floor(index / 3);
      setMarginTop((32 * (groupIndex + 1)) + 160);
    }
    if(window.innerWidth >= 1343){
      const groupIndex = Math.floor(index / 4);
      setMarginTop((32 * (groupIndex + 1)) + 160);
    }
  }

  const cardStyle: CSSProperties = {
    '--margin-top': `${marginTop}px`,
  } as CSSProperties & { '--margin-top': string };

  return (
    <Link to={`/colaboradores/${colaborador.id}`}
      className="bg-gradient-to-t w-full rounded-xl text-white font-medium relative max-w-[300px] card2 to-[#1562AD] from-[#144678] dark:to-zinc-700 dark:from-zinc-800 mx-4 h-96 mt-8 flex flex-col cursor-pointer"
      style={cardStyle}
    >
      <div className="container-card flex flex-col items-center px-5 h-full">
        {colaborador.imagen !== 'sin-imagen' ? (
          <figure className="bg-transparent rounded-full w-[110px] h-[110px] flex items-center justify-center overflow-hidden mt-5 shadow-xl drop-shadow-xl">
            <img
              src={colaborador.imagen}
              alt="foto de perfil"
              className="w-full h-full object-cover"
            />
          </figure>
        ) : (
          <figure className="bg-white text-white rounded-full shadow-xl drop-shadow-xl w-auto h-auto p-8 dark:bg-zinc-700 mt-5">
            <UserRoundXIcon
              width={60}
              height={60}
              className="text-principal-600 dark:text-white"
            />
          </figure>
        )}
        <figcaption className="flex mt-6 flex-col w-full">
          <h4 className="text-center font-semibold ">{colaborador.nombres}</h4>
          <p className="mt-4">{colaborador.descripcion}.</p>
        </figcaption>
        <div className="flex justify-center mb-5 mt-auto">
          <Estrellas
            color="text-white"
            value={colaborador.puntuacion / colaborador.puntuados}
          />
        </div>
      </div>
    </Link>
  );
};
