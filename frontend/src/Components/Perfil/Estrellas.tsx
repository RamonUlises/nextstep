import { StarFull, StarNot } from '@/icons/Star';
import { useEffect, useState } from 'react';

export const Estrellas = ({ value, color }: { value: number, color: string }) => {
  const [puntuacion, setPuntuacion] = useState(value);

  useEffect(() => {
    setPuntuacion(Math.round(value));
    if(isNaN(value)) {
      setPuntuacion(5);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i}>
          {puntuacion >= i ? (
            <StarFull className={color} />
          ) : (
            <StarNot className={color} />
          )}
        </span>
      ))}
    </div>
  );
};
