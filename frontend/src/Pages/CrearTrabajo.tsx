import { Footer } from '@/Components/Footer';
import { MenuDesktop } from '@/Components/MenuDesktop';
import { MenuMovil } from '@/Components/MenuMovil';
import { InputAgregar } from '@/Components/Perfil/Empresa/InputAgregar';
import { TypeTrabajos } from '@/types/trabajos';
import { obtenerCookie } from '@/utils/cookies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Calendar } from '@/Components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { formatDateFunc } from '@/utils/formatDate';

export const CrearTrabajo = () => {
  const { id } = useParams();

  const [trabajo, setTrabajo] = useState<TypeTrabajos>({
    id: '',
    empresa: id as string,
    descripcion: '',
    responsabilidades: [],
    requisitos: [],
    categorias: [],
    beneficios: [],
    contrato: '',
    'fecha-expiracion': '',
    'fecha-publicacion': '',
    'fecha-inicio': '',
    estado: 'activo',
    presupuesto: 0,
    puntos: 0,
  });

  const [date1, setDate1] = useState<Date | undefined>(new Date());
  const [dateAct1, setDateAct1] = useState<boolean>(false);
  const [date2, setDate2] = useState<Date | undefined>(new Date());
  const [dateAct2, setDateAct2] = useState<boolean>(false);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTrabajo({
      ...trabajo,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const cookie = obtenerCookie('UserId');

    if (id == null) {
      window.location.href = '/';
    }

    if (cookie === null) {
      window.location.href = '/login';
    }

    if (cookie !== id) {
      window.location.href = '/';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {

    if(date1 === undefined || date2 === undefined) return;
    setTrabajo({
      ...trabajo,
      'fecha-inicio': formatDateFunc(date1),
      'fecha-expiracion': formatDateFunc(date2),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date1, date2]);

  console.log(trabajo);
  return (
    <section className="flex flex-col">
      <MenuDesktop />
      <MenuMovil />
      <div className="flex mt-[140px] mb-24 px-8">
        <div className="flex w-[40%]">
          <div className="w-[90%] max-w-[300px] mx-auto bg-secundario-600 rounded-2xl px-4">
            <InputAgregar
              textClass="text-white text-center mb-4"
              iconClass="text-white border-white"
              inputClass="h-8"
              text="Beneficios"
              setTrabajo={setTrabajo}
            />
          </div>
        </div>
        <div className="flex flex-col w-[60%]">
          <h4 className="font-semibold">Detalles de la oferta</h4>
          <div className="flex items-center gap-8 mt-4 relative">
            <button
              onClick={() => setDateAct1(!dateAct1)}
              className="flex items-center gap-2 border p-2 rounded-sm"
            >
              Fecha de inicio
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </button>
            {date1 !== undefined && <p>{formatDateFunc(date1)}</p>}
            <Calendar
              className={`${
                dateAct1 && !dateAct2 ? 'block' : 'hidden'
              } absolute top-0 bg-white shadow-2xl drop-shadow-2xl mt-12`}
              mode="single"
              selected={date1}
              onSelect={setDate1}
              initialFocus
              onDayClick={() => setDateAct1(false)}
            />
          </div>
          <div className="flex items-center gap-8 mt-4 relative">
            <button
              onClick={() => setDateAct2(!dateAct2)}
              className="flex items-center gap-2 border p-2 rounded-sm"
            >
              Fecha de expiración
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </button>
            {date2 !== undefined && <p>{formatDateFunc(date2)}</p>}
            <Calendar
              className={`${
                dateAct2 && !dateAct1 ? 'block' : 'hidden'
              } absolute top-0 bg-white shadow-2xl drop-shadow-2xl mt-12`}
              mode="single"
              selected={date2}
              onSelect={setDate2}
              initialFocus
              onDayClick={() => setDateAct2(false)}
            />
          </div>
          <div className="mt-8">
            <label className="font-medium">Tipo de contrato</label>
          </div>
          <div className="flex flex-col mt-4">
            <label className="font-medium">Descripción de la oferta</label>
            <textarea
              onChange={handleChange}
              name="descripcion"
              rows={3}
              className="outline-none bg-zinc-300 rounded-sm valid:p-2"
            ></textarea>
          </div>
          <InputAgregar
            inputClass="h-8"
            text="Responsabilidades"
            setTrabajo={setTrabajo}
          />
          <InputAgregar
            inputClass="h-8"
            text="Requisitos"
            setTrabajo={setTrabajo}
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};
