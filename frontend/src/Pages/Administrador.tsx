import empresas from '@/lib/empresas';
import { TypeEmpresa } from '@/types/empresas';
import { useEffect, useState } from 'react';
import { Card } from '@/Components/Administrador/Card';
import { adminAccess } from '@/lib/auth';

export const Administrador = () => {
  const [empresasInfo, setEmpresasInfo] = useState<TypeEmpresa[]>([]);
  const [verify, setVerify] = useState<boolean>(false);
  const [contrasena, setContrasena] = useState<string>('');

  const handlePassword = async () => {
    try {
      const response = await adminAccess(contrasena);

      if (response.status === 200) {
        setVerify(true);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContrasena(e.target.value);
  };

  useEffect(() => {
    if(!verify) return;
    (async () => {
      try {
        const { data } = await empresas.obtenerEmpresas();
        setEmpresasInfo(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error as string);
      }
    })();
  }, [verify]);
  return (
    <>
      <section className={`fixed top-0 left-0 justify-center items-center w-screen h-screen bg-black flex-col gap-8 ${verify ? 'hidden' : 'flex'}`}>
        <input onChange={handleChange} type="text" placeholder='Contraseña' className='pl-3 py-1 rounded-md outline-none' />
        <button onClick={handlePassword} className='text-black bg-white px-3 py-2 rounded-xl'>Acceder</button>
      </section>
      <section className="flex flex-col gap-4 w-screen p-6">
        {empresasInfo.map((empresa) => (
          <Card empresa={empresa} key={empresa.id} />
        ))}
      </section>
    </>
  );
};
