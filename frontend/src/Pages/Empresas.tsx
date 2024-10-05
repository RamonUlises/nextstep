import { Card } from '@/Components/Empresas/Card';
import { Skeleton } from '@/Components/ui/skeleton';
import { Layout } from '@/Layouts/Layout';
import empresa from '@/lib/empresas';
import { TypeEmpresa } from '@/types/empresas';
import { sortStars } from '@/utils/sortStars';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Empresas = () => {
  const [empresas, setEmpresas] = useState<TypeEmpresa[]>([]);
  const [empresasSearch, setEmpresasSearch] = useState<TypeEmpresa[]>([]);
  const [busqueda, setBusqueda] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        const response = await empresa.obtenerEmpresas();

        if (response.data) {
          setEmpresas(response.data);

          const sort = sortStars(response.data).filter(
            (item): item is TypeEmpresa => 'nombre' in item
          );
          setEmpresasSearch(sort);
        }
      } catch {
        console.error('Error al obtener las empresas');
      }
    })();
  }, []);
  useEffect(() => {
    if (busqueda.trim() === '') {
      const sort = sortStars(empresas).filter(
        (item): item is TypeEmpresa => 'nombre' in item
      );
      setEmpresasSearch(sort);
      return;
    }

    const empresasFiltradas = empresas.filter((empresa) =>
      empresa.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    const sort = sortStars(empresasFiltradas).filter(
      (item): item is TypeEmpresa => 'nombre' in item
    );
    setEmpresasSearch(sort);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [busqueda]);
  return (
    <Layout>
      <div className="sticky md:mt-28 mt-8 w-full max-w-[90%] mx-auto sm:max-w-[450px] md:max-w-[650px] top-8 md:top-28">
        <Search className="absolute top-0 left-0 ml-4 my-2 text-white" />
        <input
          onChange={(e) => setBusqueda(e.target.value)}
          value={busqueda}
          type="search"
          placeholder="Buscar empresa por nombre"
          className="dark:bg-zinc-700 w-full py-2 valid:pl-14 pr-4 rounded-xl bg-principal-600 outline-none text-white placeholder:text-white"
        />
      </div>
      <div>
        <div className="stack-cards mt-8 flex justify-center flex-wrap max-w-[1400px] mx-auto">
          {empresas.length === 0 && (
            <>
              <Skeleton className="w-[300px] mt-4 mx-1 h-80 bg-secundario-500 dark:bg-zinc-800" />
              <Skeleton className="w-[300px] mt-4 mx-1 h-80 bg-secundario-500 dark:bg-zinc-800" />
              <Skeleton className="w-[300px] mt-4 mx-1 h-80 bg-secundario-500 dark:bg-zinc-800" />
            </>
          )}
          {empresasSearch.map((empresaa, index) => (
            <Card key={empresaa.id} empresa={empresaa} index={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
