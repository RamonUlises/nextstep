import empresas from '@/lib/empresas';
import { Edit, UserRoundXIcon, X } from 'lucide-react';
import { useState } from 'react';

export const ImagenHeader = ({
  imagen,
  id,
}: {
  imagen: string;
  id: string;
}) => {
  const [newImagen, setNewImagen] = useState<string>('sin-imagen');
  const [borrar, setBorrar] = useState<string>('imagen');

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const file = files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setNewImagen(reader.result as string);
    };
  };

  const deleteImage = () => {
    setNewImagen('sin-imagen');
    setBorrar('sin-imagen');
  };

  const subirImagen = async () => {
    try {
      const response = await empresas.actualizarImagen2(id, newImagen);

      if (response.status === 200) {
        location.reload();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const borrarImage = async () => {
    try {
      const response = await empresas.actualizarImagen2(id, 'sin-imagen');

      if (response.status === 200) {
        location.reload();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <header className="w-full h-56 flex flex-col justify-center items-center relative bg-gradient-to-bl to-slate-300 from-slate-400 overflow-hidden">
      {imagen === 'sin-imagen' && newImagen === 'sin-imagen' ? (
        <>
          <UserRoundXIcon size="80" />
          <p className="font-bold">Sin imagen</p>
        </>
      ) : newImagen !== 'sin-imagen' ? (
        <img
          src={newImagen}
          alt="Imagen de la empresa"
          className="object-cover w-full h-full"
        />
      ) : (
        <img
          src={imagen}
          alt="Imagen de la empresa"
          className="object-cover w-full h-full"
        />
      )}
      <div className="absolute bottom-0 right-0 flex mr-4 mb-4  items-center gap-2 flex-col">
        <div className='flex items-center w-full gap-4 justify-end'>
          <button
            onClick={borrarImage}
            className={`${
              borrar !== 'sin-imagen' && 'hidden'
            } px-2 py-2 rounded-md text-white bg-red-500`}
          >
            Borrar imagén
          </button>
          <label onClick={deleteImage} className=" bg-red-600 p-3 rounded-full shadow-2xl drop-shadow-lg cursor-pointer block">
            <X size="24" className="text-white" />
          </label>
        </div>
        <div className='flex items-center gap-4 w-full justify-end'>
          <button
            onClick={subirImagen}
            className={`${
              newImagen === 'sin-imagen' && 'hidden'
            } px-2 py-2 rounded-md text-white bg-secundario-500`}
          >
            Subir imagén
          </button>
          <label className=" bg-secundario-600 p-3 rounded-full shadow-2xl drop-shadow-lg cursor-pointer block">
            <input onChange={handleImage} type="file" accept="image/*" hidden />
            <Edit size="24" className="text-white" />
          </label>
        </div>
      </div>
    </header>
  );
};
