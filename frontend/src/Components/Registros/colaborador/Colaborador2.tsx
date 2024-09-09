import { useState } from 'react';
import { Options } from './Options';
import { OptionsInfo } from '../OptionsInfo';

type Titulos = { id: string; value: string | undefined };
type Idiomas = { id: string; value: string | undefined };
type Certificados = { id: string; value: string | undefined };
type Referencias = { id: string; value: string | undefined };
type Habilidades = { id: string; value: string | undefined };

export const Colaborador2 = ({
  nextTab,
}: {
  nextTab: (num: number) => void;
}) => {
  const [titulos, setTitulos] = useState<Titulos[]>([{ id: crypto.randomUUID(), value: '' }]);
  const [idiomas, setIdiomas] = useState<Idiomas[]>([{ id: crypto.randomUUID(), value: '' }]);
  const [certificados, setCertificados] = useState<Certificados[]>([{ id: crypto.randomUUID(), value: '' }]);
  const [referencias, setReferencias] = useState<Referencias[]>([{ id: crypto.randomUUID(), value: '' }]);
  const [habilidades, setHabilidades] = useState<Habilidades[]>([{ id: crypto.randomUUID(), value: '' }]);

  return (
    <section>
      <form className="mt-4 gap-4 overflow-hidden">
        <div className='flex justify-evenly flex-col sm:flex-row gap-2 mb-3'>
          <Options text='Educación primaria' />
          <Options text='Educación secundaria' />
        </div>
        <div className='flex justify-evenly flex-col md:flex-row gap-2 md:items-center'>
          <OptionsInfo text='Títulos' option={titulos} setOption={setTitulos} />
          <OptionsInfo text='Idiomas' option={idiomas} setOption={setIdiomas} />
        </div>
        <div className='flex justify-evenly flex-col md:flex-row gap-2'>
          <OptionsInfo text='Certificados' option={certificados} setOption={setCertificados} />
          <OptionsInfo text='Referencias' option={referencias} setOption={setReferencias} />
        </div>

        <OptionsInfo text='Habilidades' option={habilidades} setOption={setHabilidades} />
      </form>
      <section className="flex justify-start mt-4 ml-4">
        <button
          onClick={() => nextTab(1)}
          type="button"
          className="border-2 border-principal-600 text-principal-600 rounded-xl py-2 px-4 dark:bg-zinc-700 mt-7 mb-5 mx-4 text-sm sm:text-base outline-none"
        >
          Anterior
        </button>
      </section>
    </section>
  );
};
