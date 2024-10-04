import { UserRoundXIcon } from 'lucide-react';

export const ImagenHeader = ({ imagen }: { imagen: string}) => {
  return (
    <header className="w-full h-56 flex flex-col justify-center items-center relative bg-gradient-to-bl to-slate-300 from-slate-400 overflow-hidden">
      {imagen === 'sin-imagen' ? (
        <>
          <UserRoundXIcon size="80" />
          <p className="font-bold">Sin imagen</p>
        </>
      ) : (
        <img
          src={imagen}
          alt="Imagen de la empresa"
          className="object-cover w-full h-full"
        />
      )}
    </header>
  );
};
