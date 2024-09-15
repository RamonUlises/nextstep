import { Article } from '@/Components/Blog/Article';
import { MenuDesktop } from '@/Components/MenuDesktop';
import { MenuMovil } from '@/Components/MenuMovil';

export const Blog = () => {
  return (
    <section className="w-screen h-screen overflow-hidden bg-gradient-to-br dark:to-zinc-800 dark:from-zinc-700">
      <MenuDesktop />
      <MenuMovil />
      <div className="text-center flex flex-col mt-16 md:mt-[140px]">
        <h2 className=" text-2xl md:text-3xl font-bold dark:text-white">Últimas actualizaciones</h2>
        <p className="text-lg md:text-xl mt-4 dark:text-white">Todas las últimas novedades de NextStep</p>
      </div>
      <div className="md:px-8 mx-4 mt-16">
        <div className="flex">
          <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
            <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-principal-500 dark:bg-slate-800 sm:block"></div>
            <div className="space-y-16">
              <Article fecha='Septiembre 15, 2024' titulo='Un día normal' texto='Durante los últimos meses nos venimos preguntando, ¿Hay muchas páginas que ayudan a las empresas a encontrar colaboradores?, la respuesta fue si, y pensamos en... ¿Porqué no ayudar a los colaboradores a encontrar empresas?, ¡Bienvenido a NextStep!.' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
