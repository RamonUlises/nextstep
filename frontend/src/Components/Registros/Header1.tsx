import { Image, X } from 'lucide-react';

export const Header1 = ({
  imagen,
  titulo,
  text,
  setImagen,
}: {
  imagen: string;
  titulo: string;
  text: string;
  setImagen: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const changeImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagen(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteImagen = () => {
    setImagen('sin-imagen');
  };
  return (
    <div className="sm:flex sm:px-4 ">
      <div className="sm:w-[70%] sm:flex sm:flex-col sm:justify-center dark:text-white">
        <h4 className="text-center font-semibold  sm:text-start sm:text-xl ">
          {titulo}
        </h4>
        <p className="text-sm text-pretty">
          {text}
        </p>
      </div>
      <div className="flex flex-col items-center sm:w-[30%] mt-2 sm:mt-0">
        <div className='flex items-center gap-3'>
          <label className="cursor-pointer">
            {imagen !== 'sin-imagen' ? (
              <img
                src={imagen}
                alt="foto de perfil"
                className="w-14 h-14 bg-transparent rounded-full object-cover"
              />
            ) : (
              <Image className="bg-principal-600 text-white h-14 w-14 rounded-full p-3 mt-1 dark:bg-zinc-700" />
            )}
            <input
              onChange={changeImagen}
              type="file"
              hidden
              accept="image/*"
            />
          </label>
          { imagen !== 'sin-imagen' && <X className='text-red-500 cursor-pointer' onClick={deleteImagen} /> }
        </div>
        <div>
          <p className="text-sm dark:text-white">foto de perfil</p>
          <div className="h-1 w-full bg-principal-500 dark:bg-zinc-200"></div>
        </div>
      </div>
      <div className="w-full sm:hidden h-[2px] bg-slate-200 mt-3"></div>
    </div>
  );
};
