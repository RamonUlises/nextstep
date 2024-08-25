import { useState, useEffect } from 'react';

import { MenuDesktop } from '../Components/Home/MenuDesktop';
import { ButtonsIndex } from '../Components/Home/ButtonsIndex';
import { MenuMovil } from '../Components/Home/MenuMovil';
import { BallIndex } from '../Components/Home/BallIndex';
import { ButtonsMovilIndex } from '../Components/Home/ButtonsMovilIndex';

export const Home = () => {
  const [vwScreen, setWvScreen] = useState<number>(window.innerWidth);

  function handelWidth(){
    setWvScreen(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handelWidth);

    return () => {
      window.removeEventListener('resize', handelWidth)
    }
  },[]);
  return (
    <>
      <main className="flex flex-col h-screen overflow-hidden bg-fondo">
        <MenuDesktop />
        <MenuMovil />
        <div className="flex flex-col md:mt-[103px] md:grid lg:grid-cols-[1fr,400px] md:grid-cols-[1fr,300px] lg:grid-rows-[1fr] md:h-full">
          <section className='md:h-full flex md:items-end static md:relative'>
            <BallIndex />
          </section>
          <section className="w-full h-full flex flex-col items-center mt-8 md:pt-20 gap-5">
            <div className="flex lg:my-12">
              <div className="text-white bg-gradient-to-r from-[#C3480B] to-[#E75F0B] pl-8 md:pl-12 py-4 text-lg md:text-2xl font-extrabold  dark:to-zinc-600 dark:from-zinc-800 rounded-div-1">Regis</div>
              <div className="text-[#E75F0B] bg-[#FFEFD5] dark:bg-white md:bg-white pr-8 md:pr-12 py-4 md:text-2xl text-lg font-extrabold dark:text-black rounded-div-2">trate</div>
            </div>
            {
              (vwScreen >= 768) ? (
                <>
                  <ButtonsIndex text="Empresa" url="/login/empresas" />
                  <ButtonsIndex text="Trabajador" url="/login/trabajadores" />
                </>
              ) : (
                <>
                  <ButtonsMovilIndex text="Empresa" url="/login/empresas" />
                  <ButtonsMovilIndex text="Trabajador" url="/login/trabajadores" />
                </>
              )
            }
            { /*  */ }
          </section>
        </div>
      </main>
    </>
  );
};
