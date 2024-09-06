import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { MenuDesktop } from '../Components/MenuDesktop';
import { MenuMovil } from '../Components/MenuMovil';
import Atropos from 'atropos/react';
import 'atropos/css';

export const Page404 = () => {
  return (
    <main className="flex flex-col h-screen bg-gradient-to-tr to-slate-200 from-slate-300 dark:to-zinc-700 dark:from-zinc-800 overflow-hidden">
      <MenuDesktop />
      <MenuMovil />

      <section className="flex flex-col justify-center items-center md:mt-[103px]">
        <img src={logo} alt="Logo NextStep" className="max-w-[400px] mb-20" />
        <Atropos
          alwaysActive={true}
          activeOffset={50}
          duration={700}
          rotate={true}
          rotateTouch={true}
          rotateXMax={20}
          rotateYMax={20}
          rotateXInvert={false}
          rotateYInvert={false}
          stretchX={0}
          stretchY={0}
          stretchZ={0}
          commonOrigin={true}
          shadow={false}
          shadowOffset={0}
          shadowScale={1}
          highlight={true}
          scaleClassName='scale-150'
          rotateClassName='rotate-[-20deg]'
          innerClassName='mx-8 rounded-lg font-bold dark:text-white flex flex-col text-center shadow-2xl max-w-[600px] drop-shadow-2xl'
          rootChildren
          scaleChildren
          rotateChildren
        >
          <h1 className="text-8xl mt-8">404</h1>
          <h2 className="text-2xl">Tenemos un problema...</h2>
          <h3 className='mb-8 mx-8'>
            No pudimos encontrar ese enlace.. Verifique la dirección o{' '}
            <Link
              to="/"
              className="text-[#FA7C15] dark:text-[#FC9A3B] underline hover:underline-offset-1"
            >
              regrese al inicio
            </Link>
          </h3>
        </Atropos>
      </section>
    </main>
  );
};
