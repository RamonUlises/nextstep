export const Premium = () => {
  return (
    <section className="flex flex-col h-screen bg-zinc-900 relative overflow-hidden">
      <div className="absolute bg-principal-700 w-[500px] h-[500px] rounded-full blur-2xl top-2 -left-28"></div>
      <div className="absolute bg-principal-700 w-[500px] h-[500px] rounded-full blur-2xl top-72 -right-40"></div>
      <h2 className="text-white text-center pt-20 font-semibold text-4xl">
        Planes de precios
      </h2>
      <div className="flex justify-evenly items-center h-full w-full">
        <div className="w-[300px] h-[500px] bg-transparent z-10 border-2 flex flex-col p-7 items-center gap-7 justify-center">
          <h2 className="text-center text-white text-xl">Plan Gratis Básico</h2>
          <h2 className="text-white text-4xl">$0</h2>
          <button className="rounded-3xl border-2 text-white w-40 h-12 hover:bg-white hover:text-black transition-colors duration-300">
            Empezar
          </button>
          <div className="mt-8 px-8 flex flex-col justify-center items-center gap-4">
            <p className="text-white">
              Acceso limitado a las funciones básicas.
            </p>
            <p className="text-white">Hasta 10 tarjetas estándar por mes.</p>
            <p className="text-white">Opciones básicas de diseño.</p>
          </div>
        </div>
        <div className="w-[300px] h-[500px] bg-white z-10 border-2 flex flex-col p-7 items-center gap-7 justify-center">
          <h2 className="text-center text-black text-xl">Plan Gratis Básico</h2>
          <h2 className="text-black text-4xl">$5.99/Mes</h2>
          <button className="rounded-3xl border-2 text-white bg-zinc-900 w-40 h-12 hover:bg-white hover:border-black hover:text-black transition-colors duration-300">
            Empezar
          </button>
          <div className="mt-8 px-8 flex flex-col justify-center items-center gap-4">
            <p className="text-black">
            Hasta 50 tarjetas personalizadas mensuales.
            </p>
            <p className="text-black">Acceso a plantillas premium.</p>
            <p className="text-black">Acceso prioritario a soporte técnico.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
