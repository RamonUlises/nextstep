import { Footer } from '@/Components/Footer';
import { MenuDesktop } from '@/Components/MenuDesktop';
import { MenuMovil } from '@/Components/MenuMovil';
import { Link } from 'react-router-dom';
import { MapPinned } from 'lucide-react';
import { Eye } from 'lucide-react';
import { Hourglass } from 'lucide-react';
import { InputTrabajos } from '@/Components/InputTrabajos';
export const Trabajos = () => {
  return (
    <section className="flex flex-col">
      <MenuDesktop />
      <MenuMovil />
      <div className='mt-44'>
        <InputTrabajos />
      </div>
      <div className="flex mb-[100px] mt-16 px-4">
        <div className="flex flex-col items-center justify-center w-[25%] bg-white rounded-3xl mr-8 shadow-2xl gap-2 p-8 sticky top-0">
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
        <div className="flex w-[75%] flex-col p-16">
          <CardTrabajos
            titulo="Ingeniero de Producción"
            empresa="Eficiencia Global S.A."
            ubicacion="Avenida Principal 123, Managua, Nicaragua "
            id="Detalles"
            img=""
            fecha="15/ 01 /2025"
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};
const Botones = ({ text }: { text: string }) => {
  return (
    <button className="rounded-2xl hover:bg-principal-600 transition duration-500 text-black hover:text-white font-medium text-base hover:text w-full py-[20px] outline-none">
      {text}
    </button>
  );
};
const CardTrabajos = ({
  titulo,
  empresa,
  ubicacion,
  id,
  fecha,
  img,
}: {
  titulo: string;
  empresa: string;
  ubicacion: string;
  id: string;
  img: string;
  fecha: string;
}) => {
  return (
    <div className="bg-gradient-to-br flex items-center to-[#1562AD] from-[#144678] w-full rounded-2xl text-white font-medium">
      <div className="h-full w-[25%] flex items-center justify-center ">
        <div className="rounded-full bg-white w-[100px] h-[100px]"></div>
      </div>
      <div className="w-[75%] flex flex-col pt-6 pb-16 gap-6">
        <div className='flex justify-end'>
          <div className='bg-principal-600 opacity-80 rounded-tl-3xl rounded-bl-3xl flex items-center py-3 px-6 gap-2 -mr-2'>
            <Hourglass />
            <p>{fecha}</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold">{titulo}</h2>
        <h5 className="text-xl font-normal pl-12">{empresa}</h5>
        <div className="flex gap-4 items-center text-base font-normal">
          <MapPinned />
          <p>{ubicacion}</p>
        </div>

        <div className="flex gap-4 items-center">
          <Eye />
          <Link to="">{id}</Link>
        </div>
      </div>
    </div>
  );
};
