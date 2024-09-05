import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { MenuDesktop } from '../Components/MenuDesktop';
import { MenuMovil } from '../Components/MenuMovil';

export const Page404 = () => {
  return (
    <main className="flex flex-col h-screen bg-gradient-to-tr to-slate-200 from-slate-300 dark:to-zinc-700 dark:from-zinc-800 overflow-hidden">
      <MenuDesktop />
      <MenuMovil />
      <section className="flex flex-col justify-center items-center md:mt-[103px]">
        <img src={logo} alt="Logo NextStep" className="max-w-[400px]" />
        <div className='font-bold dark:text-white flex flex-col text-center mt-20 px-16'>
          <h1 className='text-8xl'>404</h1>
          <h2 className='text-2xl'>Tenemos un problema...</h2>
          <h3>No pudimos encontrar ese enlace.. Verifique la dirección o  <Link to='/' className='text-[#FA7C15] dark:text-[#FC9A3B] underline hover:underline-offset-1'>regresar a nicio</Link></h3>
          
        </div>
      </section>
    </main>
  );
};
