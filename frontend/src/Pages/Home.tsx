import { MenuDesktop } from '../Components/MenuDesktop';
import { ButtonsIndex } from '../Components/ButtonsIndex';

export const Home = () => {
  return (
    <>
      <main className="flex flex-col h-screen bg-fondo">
        <MenuDesktop />
        <div className="mt-[103px] grid-index">
          <section className='h-full flex items-end relative'>
            <div className='bg-gradient-to-tl to-[#C3480B] from-[#E75F0B] opacity-90 flex flex-col rounded-ball-index dark:to-zinc-800 dark:from-zinc-700'>
              <h3 className="text-white text-5xl flex flex-col gap-5 absolute top-[120px] right-[25%]"> <span>Conectando </span> <span>negocios,</span> <span>impulsando</span> <span>oportunidades</span></h3>
              <p className='text-white absolute top-[420px] right-[33%] flex flex-col'>La plataforma donde las empresas <span>encuentran su futuro comercial</span></p>
            </div>
          </section>
          <section className="w-full h-full flex flex-col items-center pt-20 gap-5">
            <div className="flex my-12">
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
