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
            font-mediuma"
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
          <button className="bg-white rounded-lg text-[#E75F0B] font-semibold px-5 py-1 border-2 hover:bg-[#E75F0B] hover:text-white transition-colors duration-500 dark:bg-zinc-800 dark:text-white dark:hover:bg-white dark:hover:text-zinc-800">
            Iniciar
          </button>
        </section>
      </header>
    </>
  );
};
