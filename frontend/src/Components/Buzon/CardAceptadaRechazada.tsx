export const CardAceptadaRechazada = ({
  imagen,
  titulo,
  estado,
  tituloTrabajo,
}: {
  imagen: string;
  titulo: string;
  estado: string;
  tituloTrabajo: string;
}) => {
  return (
    <div>
      <div className="border-b border-gray-300 dark:border-gray-700 py-2 flex items-center justify-between gap-3">
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
            {estado === 'aceptado'
              ? `Fuiste aceptado en ${tituloTrabajo}.`
              : `Fuiste rechazado en ${tituloTrabajo}.`}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {estado === 'aceptado' ? (
            <p className="text-green-600">Aceptado</p>
          ) : (
            <p className="text-red-600">Rechazado</p>
          )}
        </div>
      </div>
    </div>
  );
};
