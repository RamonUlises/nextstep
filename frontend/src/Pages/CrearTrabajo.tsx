import { Footer } from '@/Components/Footer';
import { MenuDesktop } from '@/Components/MenuDesktop';
import { MenuMovil } from '@/Components/MenuMovil';
import { InputAgregar } from '@/Components/Trabajos/InputAgregar';
import { TypeTrabajos } from '@/types/trabajos';
import { obtenerCookie } from '@/utils/cookies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Calendar } from '@/Components/ui/calendar';
import {
  CalendarIcon,
  MapPinCheck,
  Minus,
  Plus,
  UserRoundXIcon,
} from 'lucide-react';
import { formatDateFunc } from '@/utils/formatDate';
import { SeleccionarOpcion } from '@/Components/Trabajos/SeleccionarOpcion';
import { optionsCategories, optionsContrato } from '@/utils/optionsSelect';
import { addNewArray, InfoCol } from '@/utils/getElement';
import { Seleccionar } from '@/Components/Trabajos/Seleccionar';
import { validateTrabajo } from '@/utils/validateTrabajos';
import trabajosLib from '@/lib/trabajos';
import { TypeEmpresa } from '@/types/empresas';
import empresas from '@/lib/empresas';
import { Estrellas } from '@/Components/Perfil/Estrellas';

export const CrearTrabajo = () => {
  const { id } = useParams();

  const [empresa, setEmpresa] = useState<TypeEmpresa>({} as TypeEmpresa);
  const [trabajo, setTrabajo] = useState<TypeTrabajos>({
    id: '',
    empresa: id as string,
    titulo: '',
    descripcion: '',
    responsabilidades: [],
    requisitos: [],
    categorias: [],
    beneficios: [],
    contrato: '',
    ubicacion: '',
    'fecha-expiracion': '',
    'fecha-publicacion': formatDateFunc(new Date()),
    'fecha-inicio': '',
    estado: 'activa',
    'presupuesto-min': 0,
    'presupuesto-max': 0,
    puntos: 300,
  });

  const [error, setError] = useState<string>('');
  const [presupuestoTotal, setPresupuestoTotal] = useState<number>(0);

  // Estados para las fechas
  const [date1, setDate1] = useState<Date | undefined>(new Date());
  const [dateAct1, setDateAct1] = useState<boolean>(false);
  const [date2, setDate2] = useState<Date | undefined>(new Date());
  const [dateAct2, setDateAct2] = useState<boolean>(false);

  // Estados para las categorias
  const [categories, setCategories] = useState<InfoCol[]>([
    { id: crypto.randomUUID(), value: '' },
  ]);

  // Funcion para crear una nueva categoria
  const createCategorie = () => {
    for (const categ of categories) {
      if (categ.value === '') {
        return;
      }
    }

    setCategories([...categories, { id: crypto.randomUUID(), value: '' }]);
  };

  // Funcion para eliminar una categoria

  const deleteCategorie = () => {
    if (categories.length === 1) return;
    setCategories(categories.slice(0, categories.length - 1));
  };

  // Estados del contrato
  const [contract, setContract] = useState<string>('');

  // Funcion para cambiar el valor de lo inputs
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

  const handleChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setTrabajo({
        ...trabajo,
        [event.target.name]: '',
      });
      return;
    }

    setTrabajo({
      ...trabajo,
      [event.target.name]: parseFloat(event.target.value),
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

    (async () => {
      const response = await empresas.obtenerEmpresa(id as string);
      setEmpresa(response.data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (date1 === undefined || date2 === undefined) return;
    setTrabajo({
      ...trabajo,
      'fecha-inicio': formatDateFunc(date1),
      'fecha-expiracion': formatDateFunc(date2),
      categorias: addNewArray(categories),
      contrato: contract,
    });

    const porcentaje = trabajo['presupuesto-max'] * 0.07;
    setPresupuestoTotal(trabajo['presupuesto-max'] + porcentaje);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date1, date2, categories, contract, trabajo['presupuesto-max']]);

  // Subir trabajo
  const handleSubmit = async () => {
    try {
      setError('');
      validateTrabajo(trabajo);

      await trabajosLib.crearTrabajo(trabajo);
    } catch (error) {
      setError(error as string);
    }
  };

  return (
    <section className="flex flex-col bg-gradient-to-bl dark:to-zinc-600 dark:from-zinc-700">
      <MenuDesktop />
      <MenuMovil />
      {error !== '' && (
        <div className="bg-red-500 text-white text-center fixed md:bottom-0 right-0 mt-4 px-8 py-10 md:mb-4 mr-4 rounded-lg z-10 dark:bg-zinc-500">
          <p className="font-bold text-base">{error}</p>
        </div>
      )}
      <div className="header-trabajo flex flex-col justify-end items-start pt-24">
        <div className="flex flex-col z-10 md:px-24 pb-4 mx-auto md:mx-0">
          {empresa.imagen !== 'sin-imagen' ? (
            <div className="bg-principal-600 text-white rounded-full shadow-xl drop-shadow-xl">
              <img src={empresa.imagen} alt="foto de perfil" className="" />
            </div>
          ) : (
            <div className="bg-white text-white rounded-full shadow-xl drop-shadow-xl w-auto h-auto p-8 dark:bg-zinc-600">
              <UserRoundXIcon
                width={150}
                height={150}
                className="text-principal-600 dark:text-white"
              />
            </div>
          )}

          <h4 className="text-center font-bold text-xl mt-8 dark:text-white">
            {empresa.nombre}
          </h4>
          <div className="flex items-center justify-center mt-4 gap-4 dark:text-white">
            <MapPinCheck />
            <p>{empresa.direccion}</p>
          </div>
          <div className="flex items-center justify-center -mt-8">
            <Estrellas color="text-principal-600 dark:text-white" value={13 / 4} />
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse px-4 max-w-[458px] mx-auto mt-14 md:flex-row md:mt-[40px] md:px-8 md:max-w-full md:mx-0 dark:text-white">
        <div className="flex w-full md:w-[40%]">
          <div className="mt-14 md:mt-0 md:w-[90%] md:max-w-[340px] mx-auto bg-secundario-600 rounded-2xl px-6 dark:bg-zinc-600 shadow-2xl drop-shadow-2xl">
            <label className="font-medium block text-xl text-white mt-8">
              Presupuesto a pagar
            </label>
            <label className="font-medium text-white block mt-4">
              Presupuesto mínimo
            </label>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-white text-lg font-semibold">C$</p>
              <input
                onChange={handleChangeNumber}
                name="presupuesto-min"
                type="number"
                value={trabajo['presupuesto-min']}
                className="outline-none bg-white rounded-sm pl-2 py-1 w-full dark:bg-zinc-600 dark:border"
              />
            </div>
            <label className="font-medium text-white mt-2 block">
              Presupuesto máximo
            </label>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-white text-lg font-semibold">C$</p>
              <input
                onChange={handleChangeNumber}
                name="presupuesto-max"
                type="number"
                value={trabajo['presupuesto-max']}
                className="outline-none bg-white rounded-sm pl-2 py-1 w-full dark:bg-zinc-600 dark:border"
              />
            </div>
            <p className="text-white text-center mt-2">
              Total +7% = {presupuestoTotal}
            </p>
            <label className="font-medium block text-white mt-16 mb-4">
              Categorías
            </label>
            <div className="flex flex-col gap-2 mb-16">
              {categories.map((categ) => (
                <SeleccionarOpcion
                  key={categ.id}
                  options={optionsCategories}
                  id={categ.id}
                  setOption={setCategories}
                />
              ))}
              <div className="flex gap-4 justify-center items-center mt-2">
                <div
                  className="border-2 border-white rounded-full text-white cursor-pointer"
                  onClick={createCategorie}
                >
                  <Plus />
                </div>
                <div
                  onClick={deleteCategorie}
                  className="border-2 border-white rounded-full text-white cursor-pointer"
                >
                  <Minus />
                </div>
              </div>
            </div>
            <InputAgregar
              textClass="text-white mb-4"
              iconClass="text-white border-white"
              inputClass="h-8 bg-white dark:bg-zinc-600 dark:border"
              text="Beneficios"
              setTrabajo={setTrabajo}
              iconMinClass="border-white text-white border-2"
            />
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[60%] md:-mt-24">
          <h4 className="font-semibold text-xl mb-4">Detalles de la oferta</h4>
          <div className="flex flex-col">
            <label className="font-medium">Título de la oferta</label>
            <input
              onChange={handleChange}
              name="titulo"
              className="outline-none bg-zinc-300 rounded-sm p-2 dark:bg-zinc-600 dark:border"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="font-medium">Ubicación</label>
            <input
              onChange={handleChange}
              name="ubicacion"
              className="outline-none bg-zinc-300 rounded-sm p-2 dark:bg-zinc-600 dark:border"
            />
          </div>
          <h6 className="font-medium mt-4">Fechas</h6>
          <div className="flex items-center gap-8 relative">
            <button
              onClick={() => setDateAct1(!dateAct1)}
              className="flex items-center gap-2 border p-2 rounded-sm bg-zinc-300 dark:bg-zinc-600 dark:border"
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
              className="flex items-center gap-2 border p-2 rounded-sm bg-zinc-300 dark:bg-zinc-600 dark:border"
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
            <Seleccionar options={optionsContrato} setOption={setContract} />
          </div>
          <div className="flex flex-col mt-4">
            <label className="font-medium">Descripción de la oferta</label>
            <textarea
              onChange={handleChange}
              name="descripcion"
              rows={3}
              className="outline-none bg-zinc-300 rounded-sm valid:p-2 dark:bg-zinc-600 dark:border"
            ></textarea>
          </div>
          <InputAgregar
            inputClass="h-8 bg-zinc-300 dark:bg-zinc-600 dark:border"
            text="Responsabilidades"
            setTrabajo={setTrabajo}
            iconMinClass="border-black text-black border-2"
          />
          <InputAgregar
            inputClass="h-8 bg-zinc-300 dark:bg-zinc-600 dark:border"
            text="Requisitos"
            setTrabajo={setTrabajo}
            iconMinClass="border-black text-black border-2"
          />
        </div>
      </div>
      <div className="flex justify-center mt-10 mb-16">
        <button
          onClick={handleSubmit}
          className="bg-secundario-600 text-white font-medium px-4 py-2 text-lg rounded-lg hover:bg-secundario-400 transition-colors duration-500 dark:bg-zinc-600 dark:border dark:hover:bg-zinc-500"
        >
          Publicar
        </button>
      </div>

      <Footer />
    </section>
  );
};
