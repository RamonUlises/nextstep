import { Estado } from '@/types/solicitudes';
import { Check, X } from 'lucide-react';

export const CardPendiente = ({
  id,
  titulo,
  usuario,
  tituloTrabajo,
  imagen,
  idTrabajo,
  actualizarEstado,
}: {
  id: string;
  titulo: string;
  usuario: string;
  tituloTrabajo: string;
  imagen: string;
  idTrabajo: string;
  actualizarEstado: (id: string, estado: Estado, idTrabajo: string, usuario: string) => void;
}) => {
  return (
    <div
      key={id}
      className="border-b border-gray-300 dark:border-gray-700 py-2 flex items-center justify-between gap-3"
    >
      <div className="w-16 h-16 rounded-full overflow-hidden min-w-16">
        <img
          src={imagen}
          alt="Imagen solicitud"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="text-sm font-semibold">{titulo}</p>
        <p className="text-xs">
          <span className="font-semibold">{usuario}</span> quiere contribuir en{' '}
          <span className="font-semibold">{tituloTrabajo}.</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={() => actualizarEstado(id, 'aceptado', idTrabajo, usuario)}>
          <Check className="text-green-600" width={30} height={30} />
        </button>
        <button onClick={() => actualizarEstado(id, 'rechazado', idTrabajo, usuario)}>
          <X className="text-red-600" width={30} height={30} />
        </button>
      </div>
    </div>
  );
};
