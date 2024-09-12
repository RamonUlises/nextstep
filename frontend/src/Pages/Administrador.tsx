import empresas from '@/lib/empresas';
import { TypeEmpresa } from '@/types/empresas';
import { useEffect, useState } from 'react';
import { Card } from '@/Components/Administrador/Card';

export const Administrador = () => {
  const [empresasInfo, setEmpresasInfo] = useState<TypeEmpresa[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await empresas.obtenerEmpresas();
        setEmpresasInfo(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error as string);
      }
    })();
  }, []);
  return (
    <>
      <section className="flex flex-col gap-4 w-screen p-6 ">
        {empresasInfo.map((empresa) => (
          <Card empresa={empresa} key={empresa.id} />
        ))}
      </section>
    </>
  );
};
