import { StarFull, StarNot } from '@/icons/Star';
import { useEffect, useState } from 'react';

export const EstrellasCalificar = ({
  value,
  index,
  actualizarPuntuacion,
}: {
  value: number;
  index: number;
  actualizarPuntuacion: (index: number, puntuacion: number) => void;
}) => {
  const [puntuacion, setPuntuacion] = useState(value);

  useEffect(() => {
    actualizarPuntuacion(index, puntuacion);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [puntuacion]);

  return (
    <div className="flex items-center justify-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i}>
          {puntuacion >= i ? (
            <div onClick={() => setPuntuacion(i)} className='cursor-pointer'>
              <StarFull className='text-principal-500 dark:text-white' />
            </div>
          ) : (
            <div onClick={() => setPuntuacion(i)} className='cursor-pointer'>
              <StarNot className='text-principal-500 dark:text-white' />
            </div>
          )}
        </div>
      ))}
      <p className='ml-3'>{puntuacion}</p>
    </div>
  );
};
