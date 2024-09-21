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
import colaborador from '@/lib/colaboradores';
import empresas from '@/lib/empresas';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function CambiarContrasena({ id, type }: { id: string; type: string }) {
  const [contrasenaAntigua, setContrasenaAntigua] = useState('');
  const [nuevaContrasena, setNuevaContrasena] = useState('');

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'contrasenaAntigua') {
      setContrasenaAntigua(e.target.value);
    } else {
      setNuevaContrasena(e.target.value);
    }
  };

  const updatePassword = async () => {
    try {
      if (nuevaContrasena.length < 8) {
        setError('La contraseña debe tener al menos 8 caracteres');
        return;
      }

      let response;
      if(type === 'empresa'){
        response = await empresas.cambiarContrasena(id, nuevaContrasena, contrasenaAntigua);
      } else {
        response = await colaborador.cambiarContrasena(id, nuevaContrasena, contrasenaAntigua);
      }

      if (response.status === 200) {
        setContrasenaAntigua('');
        setNuevaContrasena('');
        setError('');
        alert('Contraseña cambiada correctamente');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError('Error al enviar los datos');
      } else if (
        typeof error === 'object' &&
        error != null &&
        'data' in error
      ) {
        const err = error as { data: { message: string; status: number } };
        setError(err.data.message);
      } else {
        setError('Error al enviar los datos');
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-secundario-500 text-white border-none mt-4 hover:bg-secundario-400 hover:text-white dark:bg-secundario-500 dark:hover:bg-secundario-400"
          variant="outline"
        >
          Cambiar contraseña
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cambiar contraseña</DialogTitle>
          <DialogDescription>
            Para cambiar tu contraseña, necesitas ingresar la contraseña actual
            y la nueva contraseña.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col">
          <label className="">Contraseña antigua</label>
          <input
            onChange={handleChange}
            value={contrasenaAntigua}
            type="password"
            className="border border-gray-300 rounded-md p-2 w-full outline-none"
            name="contrasenaAntigua"
          />

          <label>Nueva contraseña</label>
          <input
            onChange={handleChange}
            value={nuevaContrasena}
            type="password"
            className="border border-gray-300 rounded-md p-2 outline-none"
            name="contrasenaNueva"
          />
          <Link className='text-secundario-600 mt-4 hover:underline' to='/recuperar-contrasena'>¿Olvidaste tu contraseña?</Link>

          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
        <DialogFooter className="sm:justify-start">
          <button
            onClick={updatePassword}
            className="bg-secundario-500 text-white px-2 py-1 rounded-lg"
          >
            Confirmar
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
