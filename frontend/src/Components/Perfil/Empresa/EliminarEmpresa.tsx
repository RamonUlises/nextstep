import { Button } from '@/Components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/Components/ui/dialog';
import empresas from '@/lib/empresas';
import { eliminarCookie } from '@/utils/cookies';
import { useState } from 'react';

export const EliminarEmpresa = ({ nombre, id } : { nombre: string; id: string }) => {
  const [eliminar, setEliminar] = useState(false);

  const updateText = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === `eliminar/${nombre}`) {
      setEliminar(true);
    } else {
      setEliminar(false);
    }
  };
  
  const deleteEmpresa = async () => {
    try {
      const response = await empresas.eliminarEmpresa(id);

      if (response.status === 200) {
        window.location.href = '/';
        eliminarCookie('UserId');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className='bg-red-500 text-white mt-4 hover:bg-red-400 hover:text-white dark:bg-red-500 dark:border-none dark:hover:bg-red-400'>Eliminar cuenta</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className='dark:text-white'>¿Estas seguro de eliminar tu cuenta?</DialogTitle>
          <DialogDescription>
            Si borras tu cuenta no podrás recuperarla, todos tus datos se perderán.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="">
            <label className='dark:text-white'>Ingresa <span className='font-semibold'>eliminar/{nombre}</span></label>
            <input onChange={updateText} type="text" className='border-2 border-black p-2 mt-2 rounded-md outline-none' />
          </div>
        </div>
        <DialogFooter>
          <button onClick={deleteEmpresa} disabled={!eliminar} className='bg-red-500 text-white px-6 py-2 rounded-xl disabled:bg-red-300 cursor-pointer'>Eliminar</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
