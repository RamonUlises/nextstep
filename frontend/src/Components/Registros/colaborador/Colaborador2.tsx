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
  const [titulos, setTitulos] = useState<Titulos[]>([]);
  const [idiomas, setIdiomas] = useState<Idiomas[]>([]);
  const [certificados, setCertificados] = useState<Certificados[]>([]);
  const [referencias, setReferencias] = useState<Referencias[]>([]);
  const [habilidades, setHabilidades] = useState<Habilidades[]>([]);

  return (
    <section>
      <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center overflow-hidden">
        <Options text='Educación primaria' />
        <Options text='Educación secundaria' />
        <OptionsInfo text='Títulos' option={titulos} setOption={setTitulos} />
        <OptionsInfo text='Idiomas' option={idiomas} setOption={setIdiomas} />
        <OptionsInfo text='Certificados' option={certificados} setOption={setCertificados} />
        <OptionsInfo text='Referencias' option={referencias} setOption={setReferencias} />
        <OptionsInfo text='Habilidades' option={habilidades} setOption={setHabilidades} />
      </form>
      <section className="flex justify-start mt-4 ml-4">
        <button
          onClick={() => nextTab(1)}
          type="button"
          className="bg-principal-600 text-white rounded-xl py-2 px-4 dark:bg-zinc-700 mt-7 mb-5 mx-4 text-sm sm:text-base outline-none"
        >
          Anterior
        </button>
      </section>
    </section>
  );
};
