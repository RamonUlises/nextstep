import { Footer } from '@/Components/Footer';
import { MenuDesktop } from '@/Components/MenuDesktop';
import { MenuMovil } from '@/Components/MenuMovil';
import { TypeTrabajos } from '@/types/trabajos';
import { useEffect, useState } from 'react';
import { obtenerCookie } from '@/utils/cookies';
import trabajosLib from '@/lib/trabajos';
import { CardTrabajos } from '@/Components/Trabajos/Card';
import { Search } from 'lucide-react';

export const Trabajos = () => {
  const [trabajos, setTrabajos] = useState<TypeTrabajos[]>([]);

  useEffect(() => {
    const cookies = obtenerCookie('UserId');

    if (!cookies) {
      window.location.href = '/login';
    }
    (async () => {
      try {
        const response = await trabajosLib.obtenerTrabajosActivos();

        if(response.status === 200) {
          setTrabajos(response.data);
        }
      } catch (error) {
        console.error('Error al obtener los trabajos', error);
      }
    })();
  }, []);

  return (
    <section className="flex flex-col">
      <MenuDesktop />
      <MenuMovil />
      <div className="mt-8 md:mt-36 flex justify-center">
        <div className="flex relative w-[40%]">
          <Search className="absolute top-0 left-0 ml-4 my-2 text-white" />
          <input
            type="search"
            placeholder="Buscar trabajo por título"
            className="dark:bg-slate-200 w-full py-2 valid:pl-14 pr-4 rounded-xl bg-principal-600 outline-none text-white placeholder:text-white"
          />
        </div>
      </div>
      <div className="flex mb-[100px] mt-16 px-4">
        <div className="items-center justify-start w-[25%] mr-8 relative top-0">
          <div className="bg-white rounded-3xl shadow-2xl flex flex-col sticky top-24 h-[80vh] overflow-x-hidden overflow-y-auto">
            <Botones text="Áreas de comercio" />
            <Botones text="Producción | Ingeniería" />
            <Botones text="Operaciones | Logística" />
            <Botones text="Finanzas | Contabilidad | Auditoría" />
            <Botones text="Mercadeo | Ventas" />
            <Botones text="Publicidad | Comunicaciones | Diseño" />
            <Botones text="Administración" />
            <Botones text="Banca | Servicios Financieros" />
            <Botones text="Recursos Humanos" />
            <Botones text="Informática | Internet" />
          </div>
        </div>
        <div className="flex w-[75%] flex-col px-16 gap-4">
          {trabajos.map((trabajo) => (
            <CardTrabajos
              key={trabajo.id}
              titulo={trabajo.titulo}
              empresa={trabajo.empresa}
              ubicacion={trabajo.ubicacion}
              id={trabajo.id}
              fecha={trabajo['fecha-expiracion']}
              img={trabajo.imagen}
            />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};
const Botones = ({ text }: { text: string }) => {
  return (
    <button className="rounded-2xl hover:bg-principal-600 transition duration-500 text-black hover:text-white font-medium text-sm hover:text w-full py-[20px] outline-none px-2">
      {text}
    </button>
  );
};