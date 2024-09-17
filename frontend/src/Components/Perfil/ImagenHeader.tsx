import { Edit, UserRoundXIcon } from 'lucide-react';

export const ImagenHeader = ({ imagen }: { imagen: string }) => {
  return (
    <header className="w-full h-56 flex flex-col justify-center items-center relative bg-gradient-to-bl to-slate-300 from-slate-400">
      {imagen === 'sin-imagen' ? (
        <>
          <UserRoundXIcon size="80" />
          <p className="font-bold">Sin imagen</p>
        </>
      ) : (
        <img src={imagen} alt="Imagen de la empresa" />
      )}
      <label className="absolute bottom-0 right-0 bg-secundario-600 p-3 rounded-full mr-4 mb-4 shadow-2xl drop-shadow-lg cursor-pointer">
        <input type="file" accept="image/*" hidden />
        <Edit size="24" className="text-white" />
      </label>
    </header>
  );
};
