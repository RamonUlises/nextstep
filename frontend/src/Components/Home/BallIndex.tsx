export const BallIndex = () => {
  return (
    <div className="pb-12 pt-5 bg-gradient-to-tl to-[#C3480B] from-[#E75F0B] opacity-90 dark:to-zinc-800 dark:from-zinc-700 flex flex-col items-center static w-full md:rounded-full md:absolute md:flex lg:w-[800px] lg:h-[800px] md:w-[700px] md:h-[700px] md:bottom-[-40%] md:left-[-100px] rounded-b-[90px]">
      <h1 className="mb-4 text-4xl font-extrabold text-white md:hidden">
        NextStep
      </h1>
      <h3 className="text-white lg:text-5xl md:text-4xl flex flex-col md:gap-5 md:absolute lg:top-[120px] lg:right-[25%] md:top-[90px] md:right-[30%] gap-[2px] text-2xl">
        {' '}
        <span>Conectando </span> <span>negocios,</span> <span>impulsando</span>{' '}
        <span>oportunidades</span>
      </h3>
      <p className="text-white text-sm md:absolute lg:top-[420px] lg:right-[33%] flex flex-col md:top-[350px] md:right-[26%] mt-4 md:mt-0">
        La plataforma donde las empresas{' '}
        <span>encuentran su futuro comercial</span>
      </p>
    </div>
  );
};
