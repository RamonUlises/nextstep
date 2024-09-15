export const Article = ({ titulo, texto, fecha} : { titulo: string; texto: string; fecha: string}) => {
  return (
    <article className="relative group">
      <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></div>
      <svg
        viewBox="0 0 9 9"
        className="hidden absolute right-full mr-6 top-2 text-principal-500 dark:text-zinc-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
      >
        <circle
          cx="4.5"
          cy="4.5"
          r="4.5"
          stroke="currentColor"
          className="fill-white dark:fill-slate-900"
          strokeWidth="2"
        ></circle>
      </svg>
      <div className="relative bg-secundario-600 dark:bg-zinc-700 p-4 rounded-xl shadow-xl drop-shadow-lg">
        <h3 className="text-base font-semibold tracking-tight dark:text-slate-200 text-white pt-8 lg:pt-0">
          {titulo}
        </h3>
        <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark">
          <p className="dark:text-white text-white">
            {texto}
          </p>
        </div>
        <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)] pl-4 pt-4">
          <dt className="sr-only">Fecha</dt>
          <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
            <time dateTime="2024-09-12T10:30:00.000Z" className="dark:text-white text-white lg:text-black">{fecha}</time>
          </dd>
        </dl>
      </div>
    </article>
  );
};
