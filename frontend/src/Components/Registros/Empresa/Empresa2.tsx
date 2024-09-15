import { TypeEmpresa } from '@/types/empresas';
import { OptionsInfo } from '../OptionsInfo';
import { useEffect, useState } from 'react';
import { addNewArray, getElement, InfoCol } from '@/utils/getElement';
import { addNewRed, changeProp, handleChange, handleDeleteInput, Redes } from '@/utils/redesComponent';
import { InputsRedes } from '../InputsRedes';
import { TextTarea } from '../TextTarea';

export const Empresa2 = ({
  empresa,
  nextTab,
  setEmpresa,
  error,
  registrar,
}: {
  empresa: TypeEmpresa;
  nextTab: (num: number) => void;
  setEmpresa: React.Dispatch<React.SetStateAction<TypeEmpresa>>;
  error: string;
  registrar: () => void;
}) => {
  const [direccion, setDireccion] = useState<InfoCol[]>(
    getElement(empresa.direccion)
  );
  const [objetivo, setObjetivo] = useState<InfoCol[]>(
    getElement(empresa.objetivos)
  );
  const [red, setRed] = useState<Redes[]>(
    empresa['redes-sociales'].map((r) => {
      const red = r.split(':');
      return { id: crypto.randomUUID(), red: red[0], url: red[1] };
    })
  );
  const [redes, setRedes] = useState<string[]>([]);
  const [redesSociales, setRedesSociales] = useState<string[]>(
    empresa['redes-sociales']
  );
  const [mision, setMision] = useState<string>(empresa.mision);
  const [vision, setVision] = useState<string>(empresa.vision);

  useEffect(() => {
    setEmpresa((prev) => ({
      ...prev,
      direccion: addNewArray(direccion),
      objetivos: addNewArray(objetivo),
      'redes-sociales': redesSociales,
      mision,
      vision,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direccion, objetivo, redes, redesSociales, mision, vision]);
  return (
    <section>
      <form className="mt-4 gap-4 overflow-hidden">
        <div className="sm:col-span-2 flex justify-evenly flex-col md:flex-row gap-2 md:items-center">
          <OptionsInfo
            text="Dirección(es)"
            option={direccion}
            setOption={setDireccion}
            format='Dirección de empresas'
          />
          <OptionsInfo
            text="Objetivo(s)"
            option={objetivo}
            setOption={setObjetivo}
            format='Objetivos de la empresa'
          />
        </div>
        <section className="flex flex-col w-full sm:col-span-2 mt-4">
          <h4 className="text-center dark:text-white">Redes sociales</h4>
          <div>
            {red.map((r) => {
              return (
                <InputsRedes
                  red={red}
                  redesSociales={redesSociales}
                  setRedes={setRedes}
                  setRed={setRed}
                  setRedesSociales={setRedesSociales}
                  changeProp={changeProp}
                  deleteInput={handleDeleteInput}
                  redes={redes}
                  change={handleChange}
                  key={r.id}
                  propiedad={r.red}
                  valor={r.url}
                  options={['facebook', 'instagram', 'whatsapp', 'x', 'tiktok']}
                />
              );
            })}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-principal-500 text-white flex justify-center items-center py-1 px-2 rounded gap-1 text-sm dark:bg-zinc-600 mt-2"
              onClick={() => addNewRed(red, setRed)}
              disabled={red.length > 4}
            >
              Añadir
            </button>
          </div>
        </section>
        <div className="flex flex-col w-full mx-auto max-w-[400px] px-5 mt-3">
          <TextTarea value={empresa.mision} text='Misión' setDescripcion={setMision} placeholder='Misión de la empresa' />
        </div>
        <div className="flex flex-col mx-auto w-full max-w-[400px] px-5 mt-3">
          <TextTarea value={empresa.vision} text='Visión' setDescripcion={setVision} placeholder='Visión de la empresa' />
        </div>
      </form>
      {error !== '' && (
        <p className={`text-center mt-4 ${error !== 'Datos enviados' ? 'text-red-500' : 'text-black dark:text-white'}`}>{error}</p>
      )}
      {
        error === 'Datos enviados' && (
          <p className="text-center mt-4 text-principal-600 dark:text-white">Si todo va bien se le dará una confirmación de su registro</p>
        )
      }
      <section className="flex justify-between mt-4 mx-4">
        <button
          onClick={() => nextTab(1)}
          type="button"
          className="border-2 border-principal-600 text-principal-600 rounded-xl py-2 px-4 dark:bg-zinc-700 mt-7 mb-5 mx-4 text-sm sm:text-base outline-none dark:border-zinc-400 dark:text-white"
        >
          Anterior
        </button>
        <button
          onClick={registrar}
          className="bg-principal-600 border-none text-white rounded-xl py-2 px-4 mt-7 mb-5 mx-4 text-sm sm:text-base outline-none hover:opacity-80 transition-opacity duration-300 dark:bg-zinc-200 dark:text-black"
        >
          Registrar
        </button>
      </section>
    </section>
  );
};
