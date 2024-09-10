import { useState, useEffect } from 'react';

import { MenuDesktop } from '../Components/MenuDesktop';
import { ButtonsIndex } from '../Components/Home/ButtonsIndex';
import { MenuMovil } from '../Components/MenuMovil';
import { BallIndex } from '../Components/Home/BallIndex';
import { ButtonsMovilIndex } from '../Components/Home/ButtonsMovilIndex';

export const Home = () => {
  const [vwScreen, setWvScreen] = useState<number>(window.innerWidth);

  function handelWidth() {
    setWvScreen(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handelWidth);

    return () => {
      window.removeEventListener('resize', handelWidth);
    };
  }, []);
  return (
    <>
      <main className="flex flex-col h-screen overflow-hidden dark:bg-zinc-900/95 md:bg-[url(./assets/image-inicio.png)] bg-cover bg-no-repeat">
        <MenuDesktop />
        <MenuMovil />
        <div className="flex flex-col md:mt-[103px] md:grid lg:grid-cols-[1fr,400px] md:grid-cols-[1fr,300px] lg:grid-rows-[1fr] md:h-full">
          <section className="static flex md:h-full md:items-end md:relative">
            <BallIndex />
          </section>
          <section className="flex flex-col items-center w-full h-full gap-5 mt-8 md:pt-20">
            <div className="flex lg:my-12">
              <div className="text-white bg-gradient-to-r from-[#C3480B] to-[#E75F0B] pl-8 md:pl-12 py-4 text-lg md:text-2xl font-extrabold  dark:to-zinc-600 dark:from-zinc-800 rounded-div-1">
                Regis
              </div>
              <div className="text-[#E75F0B] bg-[#FFEFD5] dark:bg-white md:bg-white pr-8 md:pr-12 py-4 md:text-2xl text-lg font-extrabold dark:text-black rounded-div-2">
                trate
              </div>
            </div>
            {vwScreen >= 768 ? (
              <>
                <ButtonsIndex text="Empresa" url="/info-empresa" />
                <ButtonsIndex text="Colaborador" url="/info-colaborador" />
              </>
            ) : (
              <>
                <ButtonsMovilIndex text="Empresa" url="/info-empresa" />
                <ButtonsMovilIndex
                  text="Colaborador"
                  url="/info-colaborador"
                />
              </>
            )}
            {/*  */}
          </section>
        </div>
      </main>
    </>
  );
};
