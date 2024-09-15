import { useState, useEffect } from 'react';
import { LayoutAtropos } from '@/Components/LayoutAtropos';
import { MenuDesktop } from '../Components/MenuDesktop';
import { ButtonsIndex } from '../Components/Home/ButtonsIndex';
import { MenuMovil } from '../Components/MenuMovil';
import { Footer } from '../Components/Footer';
import { BallIndex } from '../Components/Home/BallIndex';
import { ButtonsMovilIndex } from '../Components/Home/ButtonsMovilIndex';
import imagen from '../assets/image-inicio.png';
import { CarouselSpacing } from '@/Components/Home/Carrusel';

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
      <main className="flex flex-col dark:bg-zinc-900/95">
        <MenuDesktop />
        <MenuMovil />
        <div className="flex flex-col md:pt-[103px] md:grid lg:grid-cols-[1fr,400px] md:grid-cols-[1fr,300px] lg:grid-rows-[1fr] md:h-screen md:bg-[150%,10px] bg-no-repeat relative md:bg-[url(./assets/rueda-inicio-claro.png)] md:bg-[100%]">
          <LayoutAtropos
            innerClass="w-32 h-32 rounded-full bg-gradient-to-r from-principal-500 to-principal-600 dark:to-zinc-700 dark:from-zinc-600"
            styles="absolute top-[50%] left-[8%] md:top-32 md:left-[5%] z-20"
          />
          <LayoutAtropos
            innerClass="w-16 h-16 rounded-full bg-gradient-to-r from-principal-500 to-principal-600 dark:to-zinc-700 dark:from-zinc-600"
            styles="absolute top-[70%] left-[70%] md:top-[200px] md:left-[22%] z-20"
          />
          <img
            src={imagen}
            alt=""
            className="h-[85vh] w-auto hidden md:block absolute z-10 bottom-0 left-[12%] lg:left-[25%] image-inicio select-none"
          />
          <section className="static flex md:h-full md:items-end md:overflow-hidden">
            <BallIndex />
          </section>
          <section className="flex flex-col items-center w-full h-full gap-5 mt-8 z-40 md:mt-[35%]">
            <div className="flex">
              <div className="text-principal-100 bg-gradient-to-r from-principal-500 to-principal-600 pl-8 md:pl-12 py-4 text-lg md:text-2xl font-extrabold dark:to-zinc-600 dark:from-zinc-800 rounded-div-1">
                <p>Regis</p>
              </div>
              <div className="text-principal-600 bg-principal-100 dark:bg-white pr-8 md:pr-12 py-4 md:text-2xl text-lg font-extrabold dark:text-black rounded-div-2">
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
        <div className="flex flex-col md:h-screen md:pt-[103px] items-center md:justify-center mt-40 md:mt-0">
          <h2 className="text-center text-2xl md:text-5xl font-extrabold dark:text-white mb-8">
            Talleres
          </h2>
          <CarouselSpacing />
        </div>
        <div className="flex flex-col h-screen pt-[103px]">
          <h2 className="text-center text-2xl md:text-5xl font-extrabold dark:text-white">
            Beneficios
          </h2>
          <div className="flex flex-col md:flex-row h-full items-center justify-evenly">
            <div className="bg-white p-4 w-[70%] md:w-[30%] h-[30%] md:h-[50%] flex flex-col justify-center gap-4 rounded-3xl shadow-2xl dark:bg-zinc-700 dark:text-white">
              <h4 className="font-bold text-lg md:text-xl text-center">
                Crecimiento profecional
              </h4>
              <p className="text-sm md:text-base">
                Los emprendedores tienen la oportunidad de adquirir experiencia
                laboral real y desarrollar habilidades en un entorno seguro y
                motivador.
              </p>
            </div>
            <div className="bg-white p-4 w-[70%] h-[30%] md:w-[30%] md:h-[50%] flex flex-col justify-center gap-4 rounded-3xl shadow-2xl dark:bg-zinc-700 dark:text-white">
              <h4 className="font-bold text-lg md:text-xl text-center">
                Eficiencia empresarial
              </h4>
              <p className="text-sm md:text-base">
                Las empresas pueden acceder rápidamente a talento dispuesto a
                realizar proyectos a corto plazo, optimizando recursos y tiempo
                en la búsqueda de candidatos adecuados.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};
