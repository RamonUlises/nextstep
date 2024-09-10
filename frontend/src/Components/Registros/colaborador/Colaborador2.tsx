import { useEffect, useState } from 'react';
import { Options } from './Options';
import { OptionsInfo } from '../OptionsInfo';
import { TypeColaboradores } from '@/types/colaboradores';
import { getElement, InfoCol } from '@/utils/getElement';

export const Colaborador2 = ({
  colaborador,
  nextTab,
  registrar,
  setColaborador,
}: {
  colaborador: TypeColaboradores;
  nextTab: (num: number) => void;
  registrar: () => void;
  setColaborador: (value: React.SetStateAction<TypeColaboradores>) => void;
}) => {
  const [titulos, setTitulos] = useState<InfoCol[]>(getElement(colaborador.titulos));
  const [idiomas, setIdiomas] = useState<InfoCol[]>(getElement(colaborador.idiomas));
  const [certificados, setCertificados] = useState<InfoCol[]>(getElement(colaborador.certificados));
  const [referencias, setReferencias] = useState<InfoCol[]>(getElement(colaborador.referencias));
  const [habilidades, setHabilidades] = useState<InfoCol[]>(getElement(colaborador.habilidades));

  const [primaria, setPrimaria] = useState<boolean>(colaborador['educacion-primaria']);
  const [secundaria, setSecundaria] = useState<boolean>(colaborador['educacion-secundaria']);

  useEffect(() => {
    setColaborador((prevColaborador) => ({
      ...prevColaborador,
      titulos: titulos.map((t) => t.value),
      idiomas: idiomas.map((i) => i.value),
      certificados: certificados.map((c) => c.value),
      referencias: referencias.map((r) => r.value),
      habilidades: habilidades.map((h) => h.value),
      'educacion-primaria': primaria,
      'educacion-secundaria': secundaria,
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titulos, idiomas, certificados, referencias, habilidades, primaria, secundaria]);
  return (
    <section>
      <form className="mt-4 gap-4 overflow-hidden">
        <div className='flex justify-evenly flex-col sm:flex-row gap-2 mb-3'>
          <Options default={primaria} setOption={setPrimaria} text='Educación primaria' />
          <Options default={secundaria} setOption={setSecundaria} text='Educación secundaria' />
        </div>
        <div className='flex justify-evenly flex-col md:flex-row gap-2 md:items-center'>
          <OptionsInfo text='Títulos' option={titulos} setOption={setTitulos} />
          <OptionsInfo text='Idiomas' option={idiomas} setOption={setIdiomas} />
        </div>
        <div className='flex justify-evenly flex-col md:flex-row gap-2'>
          <OptionsInfo text='Certificados' option={certificados} setOption={setCertificados} />
          <OptionsInfo text='Referencias' option={referencias} setOption={setReferencias} />
        </div>
        <div className='flex md:w-[50%] mx-auto md:mx-0'>
          <OptionsInfo text='Habilidades' option={habilidades} setOption={setHabilidades} />
        </div>
      </form>
      <section className="flex justify-between mt-4 mx-4">
        <button
          onClick={() => nextTab(1)}
          type="button"
          className="border-2 border-principal-600 text-principal-600 rounded-xl py-2 px-4 dark:bg-zinc-700 mt-7 mb-5 mx-4 text-sm sm:text-base outline-none"
        >
          Anterior
        </button>
        <button onClick={registrar} className='bg-principal-600 border-none text-white rounded-xl py-2 px-4 mt-7 mb-5 mx-4 text-sm sm:text-base outline-none hover:opacity-80 transition-opacity duration-300'>Registrar</button>
      </section>
    </section>
  );
};
