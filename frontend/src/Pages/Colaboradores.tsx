import { Card } from '@/Components/Colaboradores/Card';
import { Skeleton } from '@/Components/ui/skeleton';
import { Layout } from '@/Layouts/Layout';
import colaborador from '@/lib/colaboradores';
import { TypeColaboradores } from '@/types/colaboradores';
import { sortStars } from '@/utils/sortStars';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Colaboradores = () => {
  const [busqueda, setBusqueda] = useState<string>('');
  const [colaboradores, setColaboradores] = useState<TypeColaboradores[]>([]);
  const [colaboradoresSelect, setColaboradoresSelect] = useState<
    TypeColaboradores[]
  >([]);

  useEffect(() => {
    (async () => {
      const response = await colaborador.obtenerColaboradores();
      setColaboradores(response);

      const sort = sortStars(response).filter((item): item is TypeColaboradores => 'nombres' in item);

      setColaboradoresSelect(sort);
    })();
  }, []);

  useEffect(() => {
    if (busqueda.trim() === '') {
      const sort = sortStars(colaboradores).filter((item): item is TypeColaboradores => 'nombres' in item);
      setColaboradoresSelect(sort);

      return;
    }

    const colaboradoresFiltrados = colaboradores.filter((colaborador) =>
      colaborador.usuario.toLowerCase().includes(busqueda.toLowerCase()) || colaborador.nombres.toLowerCase().includes(busqueda.toLowerCase())
    );
    const sort = sortStars(colaboradoresFiltrados).filter((item): item is TypeColaboradores => 'nombres' in item);
    setColaboradoresSelect(sort);
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
          placeholder="Buscar colaborador por usuario"
          className="dark:bg-zinc-700 w-full py-2 valid:pl-14 pr-4 rounded-xl bg-principal-600 outline-none text-white placeholder:text-white"
        />
      </div>
      <div className="stack-cards mt-8 flex justify-center flex-wrap max-w-[1400px] mx-auto">
        {colaboradores.length === 0 && (
          <>
            <Skeleton className="w-[300px] mt-4 mx-1 h-80 bg-secundario-500 dark:bg-zinc-800" />
            <Skeleton className="w-[300px] mt-4 mx-1 h-80 bg-secundario-500 dark:bg-zinc-800" />
            <Skeleton className="w-[300px] mt-4 mx-1 h-80 bg-secundario-500 dark:bg-zinc-800" />
          </>
        )}
        {colaboradoresSelect.map((colaborador, index) => (
          <Card key={colaborador.id} colaborador={colaborador} index={index} />
        ))}
      </div>
    </Layout>
  );
};
