import { TypeCalificar } from '@/types/calificar';
import { Calificar } from './Calificar';

export const CardCalificar = ({
  titulo,
  estado,
  id,
  empresa,
  setEstado,
  setCalificar,
}: {
  titulo: string;
  estado: boolean;
  id: string;
  empresa: string;
  setEstado: React.Dispatch<React.SetStateAction<boolean>>;
  setCalificar: React.Dispatch<React.SetStateAction<TypeCalificar[]>>;
}) => {
  return (
    <>
      {estado && <Calificar setCalificar={setCalificar} id={id} empresa={empresa} setEstado={setEstado} />}
      <div
        onClick={() => setEstado(true)}
        className="border-b border-gray-300 dark:border-gray-700 py-2 flex flex-col items-center justify-between gap-3 bg-slate-200 cursor-pointer dark:bg-zinc-600 dark:text-white"
      >
        <h5 className="text-sm">
          El trabajo <span className="font-medium">{titulo}</span> ha terminado
          con éxito
        </h5>
        <p className="text-xs">
          Haz click para dar una calificación a la empresa
        </p>
      </div>
    </>
  );
};
