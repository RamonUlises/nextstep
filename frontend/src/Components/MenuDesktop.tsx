import { Link } from 'react-router-dom';

import { ChangeTheme } from './ChangeTheme';

export const MenuDesktop = () => {
  return (
    <>
      <header className="flex justify-between text-white p-4 fixed w-full bg-transparent">
        <section className="flex items-center bg-gradient-to-tl to-[#C3480B] from-[#E75F0B] py-4 px-10 rounded-lg gap-10 dark:to-zinc-700 dark:from-zinc-800">
          <Link to="/" className="font-bold text-2xl">
            NextStep
          </Link>
          <nav>
            <ul
              className="flex items-center gap-6 text-base ml-4
            font-medium"
            >
              <li>
                <Link
                  to="/"
                  className="hover:opacity-80 transition-opacity duration-300"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:opacity-80 transition-opacity duration-300"
                >
                  Trabajos
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:opacity-80 transition-opacity duration-300"
                >
                  Trabajadores
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:opacity-80 transition-opacity duration-300"
                >
                  Empresas
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className="flex items-center bg-gradient-to-tl to-[#C3480B] from-[#E75F0B] py-4 px-6 gap-5 rounded-lg justify-center dark:to-zinc-700 dark:from-zinc-800">
          <ChangeTheme />
          <Link
            to="#"
            className="button-menu before:bg-gradient-to-tl before:to-[#C3480B] before:from-[#E75F0B] dark:before:to-zinc-700 dark:before:from-zinc-800 border-2 border-white"
          >
            <span className="z-20">Iniciar</span>
          </Link>
        </section>
      </header>
    </>
  );
};
