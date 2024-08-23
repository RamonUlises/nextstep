import { ChangeTheme } from "./ChangeTheme";

export const MenuDesktop = () => {
  return (
    <>
      <header className="flex justify-between text-white p-4 fixed w-full bg-transparent">
        <section className="flex items-center bg-gradient-to-tl to-[#C3480B] from-[#E75F0B] py-4 px-10 rounded-lg gap-10 dark:to-zinc-700 dark:from-zinc-800">
          <a href="/" className="font-bold text-2xl">
            NextStep
          </a>
          <nav>
            <ul
              className="flex items-center gap-6 text-base ml-4
            font-medium"
            >
              <li>
                <a
                  href="/"
                  className="hover:opacity-80 transition-opacity duration-300"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/trabajo"
                  className="hover:opacity-80 transition-opacity duration-300"
                >
                  Trabajo
                </a>
              </li>
              <li>
                <a
                  href="/trabajadores"
                  className="hover:opacity-80 transition-opacity duration-300"
                >
                  Trabajadores
                </a>
              </li>
              <li>
                <a
                  href="/empresas"
                  className="hover:opacity-80 transition-opacity duration-300"
                >
                  Empresas
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className="flex items-center bg-gradient-to-tl to-[#C3480B] from-[#E75F0B] py-4 px-6 gap-5 rounded-lg justify-center dark:to-zinc-700 dark:from-zinc-800">
          <ChangeTheme />
          <button className="button-menu before:bg-gradient-to-tl before:to-[#C3480B] before:from-[#E75F0B] dark:before:to-zinc-700 dark:before:from-zinc-800 border-2 border-white">
            <span className="z-20">Iniciar</span>
          </button>
        </section>
      </header>
    </>
  );
};
