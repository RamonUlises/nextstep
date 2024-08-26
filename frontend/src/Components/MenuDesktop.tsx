import { Link } from 'react-router-dom';

import { ChangeTheme } from './ChangeTheme';

export const MenuDesktop = () => {
  return (
    <>
      <header className="fixed justify-between hidden w-full p-4 text-white bg-transparent md:flex">
        <section className="flex items-center md:gap-6 lg:gap-10 bg-gradient-to-tl from-[#E75F0B] dark:from-zinc-800 to-[#C3480B] dark:to-zinc-700 px-10 py-4 rounded-lg">
          <Link to="/" className="font-bold md:text-xl lg:text-2xl">
            NextStep
          </Link>
          <nav>
            <ul className="flex items-center ml-4 font-medium md:gap-4 lg:gap-6 md:text-sm lg:text-base">
              <li>
                <Link
                  to="/"
                  className="transition-opacity duration-300 hover:opacity-80"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="transition-opacity duration-300 hover:opacity-80"
                >
                  Trabajos
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="transition-opacity duration-300 hover:opacity-80"
                >
                  Trabajadores
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="transition-opacity duration-300 hover:opacity-80"
                >
                  Empresas
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className="flex justify-center items-center gap-5 bg-gradient-to-tl from-[#E75F0B] dark:from-zinc-800 to-[#C3480B] dark:to-zinc-700 px-6 py-4 rounded-lg">
          <ChangeTheme />
          <Link
            to="/login"
            className="border-2 border-white before:bg-gradient-to-tl before:from-[#E75F0B] dark:before:from-zinc-800 before:to-[#C3480B] dark:before:to-zinc-700 button-menu outline-none cursor-pointer py-[6px] px-[12px] m-0 relative text-base inline-block rounded-lg overflow-hidden bg-white text-white"
          >
            <span className="relative z-20 md:text-sm lg:text-base hover:text-[#E75F0B] dark:hover:text-zinc-700">Iniciar</span>
          </Link>
        </section>
      </header>
    </>
  );
};
