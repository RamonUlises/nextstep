import { useState, useEffect } from 'react';
import { LayoutAtropos } from '@/Components/LayoutAtropos';
import { MenuDesktop } from '../Components/MenuDesktop';
import { ButtonsIndex } from '../Components/Home/ButtonsIndex';
import { MenuMovil } from '../Components/MenuMovil';
import { BallIndex } from '../Components/Home/BallIndex';
import { ButtonsMovilIndex } from '../Components/Home/ButtonsMovilIndex';
import imagen from '../assets/image-inicio.png';

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
      <main className="flex flex-col h-screen overflow-hidden dark:bg-zinc-900/95 bg-cover bg-no-repeat relative md:bg-[url(./assets/rueda-inicio-claro.png)] md:bg-[-80px]">
        <MenuDesktop />
        <MenuMovil />
        <LayoutAtropos
          innerClass="w-32 h-32 rounded-full bg-gradient-to-r from-[#C3480B] to-[#E75F0B]  dark:to-zinc-700 dark:from-zinc-600"
          styles="absolute top-[50%] left-[8%] md:top-32 md:left-[5%] z-20"
        />
        <LayoutAtropos
          innerClass="w-16 h-16 rounded-full bg-gradient-to-r from-[#C3480B] to-[#E75F0B] dark:to-zinc-700 dark:from-zinc-600"
          styles="absolute top-[70%] left-[70%] md:top-[200px] md:left-[22%] z-20"
        />
        <img src={imagen} alt="" className='h-[85vh] w-auto hidden md:block absolute z-10 bottom-0 left-[12%] lg:left-[25%] image-inicio'/>
        <div className="flex flex-col md:mt-[103px] md:grid lg:grid-cols-[1fr,400px] md:grid-cols-[1fr,300px] lg:grid-rows-[1fr] md:h-full">
          <section className="static flex md:h-full md:items-end md:relative overflow-hidden">
            <BallIndex />
          </section>
          <section className="flex flex-col items-center w-full h-full gap-5 mt-8 z-40 md:mt-[35%]">
            <div className="flex">
              <div className="text-white bg-gradient-to-r from-[#C3480B] to-[#E75F0B] pl-8 md:pl-12 py-4 text-lg md:text-2xl font-extrabold dark:to-zinc-600 dark:from-zinc-800 rounded-div-1">
                <p>Regis</p>
              </div>
              <div className="text-[#E75F0B] bg-[#FFEFD5] dark:bg-white pr-8 md:pr-12 py-4 md:text-2xl text-lg font-extrabold dark:text-black rounded-div-2">
                <p>trate</p>
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
                <ButtonsMovilIndex text="Colaborador" url="/info-colaborador" />
              </>
            )}
            {/*  */}
          </section>
        </div>
      </main>
    </>
  );
};
