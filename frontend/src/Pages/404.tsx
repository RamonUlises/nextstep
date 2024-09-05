import logo from '../assets/logo.png';
import { MenuDesktop } from '../Components/MenuDesktop';
import { MenuMovil } from '../Components/MenuMovil';

export const Page404 = () => {
  return (
    <main className="flex flex-col h-screen bg-gradient-to-tr to-slate-200 from-slate-300 dark:to-zinc-700 dark:from-zinc-800 overflow-hidden">
      <MenuDesktop />
      <MenuMovil />
      <section className='flex flex-col justify-center items-center md:mt-[103px]'>
        <img src={logo} alt="Logo NextStep" className='max-w-[400px]' />
      </section>
    </main>
  );
};
