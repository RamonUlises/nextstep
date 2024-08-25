import { MenuDesktop } from '../Components/MenuDesktop';
import { ButtonsIndex } from '../Components/ButtonsIndex';
import { MenuMovil } from '../Components/MenuMovil';
import { BallIndex } from '../Components/BallIndex';

export const Home = () => {
  return (
    <>
      <main className="flex flex-col h-screen overflow-hidden bg-fondo">
        <MenuDesktop />
        <MenuMovil />
        <div className="flex flex-col md:mt-[103px] md:grid lg:grid-cols-[1fr,400px] md:grid-cols-[1fr,300px] lg:grid-rows-[1fr] md:h-full">
          <section className='md:h-full flex md:items-end static md:relative'>
            <BallIndex />
          </section>
          <section className="w-full h-full flex flex-col items-center pt-20 gap-5">
            <div className="flex lg:my-12">
              <div className="text-white bg-gradient-to-tl to-[#C3480B] from-[#E75F0B] pl-12 py-4 text-2xl font-extrabold  dark:to-zinc-600 dark:from-zinc-800 rounded-div-1">Regis</div>
              <div className="text-[#E75F0B] bg-white pr-12 py-4 text-2xl font-extrabold dark:text-black rounded-div-2">trate</div>
            </div>
            <ButtonsIndex text="Empresa" url="/login/empresas" />
            <ButtonsIndex text="Trabajador" url="/login/trabajadores" />
          </section>
        </div>
      </main>
    </>
  );
};
