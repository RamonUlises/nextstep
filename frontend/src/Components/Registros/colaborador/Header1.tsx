import { Image } from 'lucide-react';

export const Header1 = () => {
  return (
    <div className='sm:flex sm:px-4'>
      <div className='sm:w-[70%] sm:flex sm:flex-col sm:justify-center'>
        <h4 className="text-center font-semibold  sm:text-start sm:text-xl">Información personal</h4>
        <p className="text-sm text-pretty">
          Cuéntanos un poco sobre ti. Esta información aparecerá en tu perfil
          público, para que los compradores potenciales puedan conocerte mejor.
        </p>
      </div>
      <div className="flex flex-col items-center sm:w-[30%] mt-2 sm:mt-0">
        <label className="cursor-pointer">
          <Image className="bg-principal-600 text-white h-14 w-14 rounded-full p-3 mt-1" />
          <input type="file" hidden accept="image/*" />
        </label>
        <div>
          <p className='text-sm'>foto de perfil</p>
          <div className="h-1 w-full bg-principal-500"></div>
        </div>
      </div>
      <div className='w-full sm:hidden h-[2px] bg-slate-200 mt-3'></div>
    </div>
  );
};
