import { Footer } from '@/Components/Footer';
import { MenuDesktop } from '@/Components/MenuDesktop';
import { MenuMovil } from '@/Components/MenuMovil';
import { TypeTrabajos } from '@/types/trabajos';
import { useEffect, useState } from 'react';
import { obtenerCookie } from '@/utils/cookies';
import trabajosLib from '@/lib/trabajos';
import { CardTrabajos } from '@/Components/Trabajos/Card';
import { Search } from 'lucide-react';
import { categoriasAreas } from '@/utils/categoriasAreas';
import { Seleccionar } from '@/Components/Trabajos/Seleccionar';
import { Skeleton } from '@/Components/ui/skeleton';

export const Trabajos = () => {
  const [trabajos, setTrabajos] = useState<TypeTrabajos[]>([]);
  const [trabajosSeleccionados, setTrabajosSeleccionados] = useState<TypeTrabajos[]>([]);

  const [categoria, setCategoria] = useState<string>('Áreas de comercio');
  const [busqueda, setBusqueda] = useState<string>('');

  useEffect(() => {
    const cookies = obtenerCookie('UserId');

    if (!cookies) {
      window.location.href = '/login';
    }

    setCategoria('Áreas de comercio');
    (async () => {
      try {
        const response = await trabajosLib.obtenerTrabajosActivos();

        if (response.status === 200) {
          setTrabajos(response.data);
          setTrabajosSeleccionados(response.data);
        }
      } catch (error) {
        console.error('Error al obtener los trabajos', error);
      }
    })();
  }, []);

  const handleOpcion = (opcion: string) => {
    setCategoria(opcion);
  };

  const buscarCategoria = (categoria: string) => {
    if (categoria === 'Áreas de comercio' || categoria === 'Ninguna') {
      setTrabajosSeleccionados(trabajos);
    } else {
      const trabajosFiltrados: TypeTrabajos[] = [];

      trabajos.forEach((trabajo) => {
        for(let i = 0; i < trabajo.categorias.length; i++) {
          if (trabajo.categorias[i] === categoria) {
            trabajosFiltrados.push(trabajo);
            break;
          }
        }
      });

      setTrabajosSeleccionados(trabajosFiltrados);
    }
  };

  useEffect(() => {
    buscarCategoria(categoria);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoria]);

  useEffect(() => {
    if (busqueda === '') {
      setTrabajosSeleccionados(trabajos);
    } else {
      const trabajosFiltrados: TypeTrabajos[] = [];

      trabajos.forEach((trabajo) => {
        if (trabajo.titulo.toLowerCase().includes(busqueda.toLowerCase())) {
          trabajosFiltrados.push(trabajo);
        }
      });

      setTrabajosSeleccionados(trabajosFiltrados);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [busqueda]);

  return (
    <section className="flex flex-col bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900">
      <MenuDesktop />
      <MenuMovil />
      <div className="mt-8 md:mt-36 flex justify-center">
        <div className="flex relative w-full sm:w-[60%] mx-4 md:w-[50%] lg:w-[40%]">
          <Search className="absolute top-0 left-0 ml-4 my-2 text-white" />
          <input
            onChange={(e) => setBusqueda(e.target.value)}
            value={busqueda}
            type="search"
            placeholder="Buscar trabajo por título"
            className="dark:bg-zinc-700 w-full py-2 valid:pl-14 pr-4 rounded-xl bg-principal-600 outline-none text-white placeholder:text-white"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center mb-[100px] mt-8 md:mt-16 px-4">
        <div className="flex md:hidden overflow-hidden w-full justify-center mb-8">
          <Seleccionar
            defaultOption="Categorias (Ninguna)"
            options={['Ninguna', ...categoriasAreas]}
            setOption={setCategoria}
          />
        </div>
        <div className="hidden md:flex mr-8 relative top-0 w-full md:max-w-[220px] lg:max-w-[320px]">
          <div className="md:flex w-full bg-white dark:bg-zinc-700 rounded-3xl shadow-2xl flex-col sticky top-24 h-[80vh] overflow-x-hidden overflow-y-auto py-4 gap-1">
            <Botones
              selected={categoria}
              handleOpcion={handleOpcion}
              text="Áreas de comercio"
            />
            {categoriasAreas.map((categoriaa, index) => (
              <Botones
                selected={categoria}
                handleOpcion={handleOpcion}
                key={index}
                text={categoriaa}
              />
            ))}
          </div>
        </div>
        <div className="flex w-full items-center flex-col lg:pr-8 gap-6 stack-cards">
          {
            trabajos.length === 0 && (
              <>
                <Skeleton className="w-3/4 h-[250px] bg-secundario-500 dark:zinc-800" />
                <Skeleton className="w-3/4 h-[250px] bg-secundario-500 dark:zinc-800" />
                <Skeleton className="w-3/4 h-[250px] bg-secundario-500 dark:zinc-800" />
              </>
            )
          }
          {trabajosSeleccionados.map((trabajo, index) => (
            <CardTrabajos
              key={trabajo.id}
              titulo={trabajo.titulo}
              empresa={trabajo.empresa}
              ubicacion={trabajo.ubicacion}
              id={trabajo.id}
              fecha={trabajo['fecha-expiracion']}
              img={trabajo.imagen}
              index={index}
              nivel={trabajo.nivel}
            />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

const Botones = ({
  text,
  selected,
  handleOpcion,
}: {
  text: string;
  selected: string;
  handleOpcion: (op: string) => void;
}) => {
  return (
    <button
      onClick={() => handleOpcion(text)}
      className={`rounded-2xl hover:bg-principal-600 transition duration-500 text-black hover:text-white font-medium text-sm hover:text w-full py-[20px] outline-none px-2 dark:text-white dark:hover:bg-zinc-600 ${
        selected === text && 'bg-principal-600 text-white dark:bg-zinc-600'
      }`}
    >
      {text}
    </button>
  );
};
