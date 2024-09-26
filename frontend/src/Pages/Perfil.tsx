import { Footer } from '@/Components/Footer';
import { MenuDesktop } from '@/Components/MenuDesktop';
import { MenuMovil } from '@/Components/MenuMovil';
import { Colaborador } from '@/Components/Perfil/Colaborador';
import { Empresa } from '@/Components/Perfil/Empresa';
import { Skeleton } from '@/Components/ui/skeleton';
import { obtenerInfo } from '@/lib/obtenerInfo';
import { TypeColaboradores } from '@/types/colaboradores';
import { TypeEmpresa } from '@/types/empresas';
import { obtenerCookie } from '@/utils/cookies';
import { useEffect, useState } from 'react';

export const Perfil = () => {
  const [user, setUser] = useState<TypeEmpresa | TypeColaboradores>(
    {} as TypeEmpresa | TypeColaboradores
  );

  useEffect(() => {
    const id = obtenerCookie('UserId');

    if (!id) {
      location.href = '/login';
      return;
    }

    (async () => {
      const res = await obtenerInfo(id);
      setUser(res.data[0]);
    })();
  }, []);

  return (
    <>
      <section className="flex flex-col overflow-x-hidden">
        <MenuDesktop />
        <MenuMovil />
        {
          user.id !== undefined ? (
            <>
              {'nombres' in user && <Colaborador colaborador={user} />}
              {'nombre' in user && <Empresa empresa={user} />}
            </>
          ) : (
            <Skeleton className='w-screen h-screen bg-slate-400 dark:bg-black' />
          )
        }
        <Footer />
      </section>
    </>
  );
};
