import { Link } from 'react-router-dom';

export const BallIndex = () => {
  return (
    <div className="pb-12 pt-5 bg-gradient-to-tl to-[#C3480B] from-[#E75F0B] opacity-90 dark:to-zinc-800 dark:from-zinc-700 flex flex-col items-center static w-full md:rounded-full md:absolute md:flex lg:w-[700px] lg:h-[700px] md:w-[700px] md:h-[700px] md:bottom-[-40%] md:left-[-100px] rounded-b-[90px]">
      <div className="md:hidden flex justify-between w-full ">
        <h1 className="mb-4 text-4xl font-extrabold text-white md:hidden  w-[60%] text-end">
          NextStep
        </h1>
        <Link
          to="/login"
          className="border-2 border-white before:bg-gradient-to-tl before:from-[#E75F0B] dark:before:from-zinc-800 before:to-[#C3480B] dark:before:to-zinc-700 button-menu outline-none cursor-pointer px-4 pt-2 m-0 relative text-base inline-block rounded-lg overflow-hidden bg-white text-white hover:text-[#E75F0B] dark:hover:text-zinc-700 h-11 mr-8"
        >
          <span className="relative z-20 md:text-sm lg:text-base">Iniciar</span>
        </Link>
      </div>
      <h3 className="text-white lg:text-5xl md:text-4xl flex flex-col md:gap-5 md:absolute lg:top-[80px] lg:right-[18%] md:top-[90px] md:right-[30%] gap-[2px] text-2xl">
        {' '}
        <span>Conectando </span> <span>negocios,</span> <span>impulsando</span>{' '}
        <span>oportunidades</span>
      </h3>
      <p className="text-white text-sm md:absolute lg:top-[360px] lg:right-[28%] flex flex-col md:top-[350px] md:right-[26%] mt-4 md:mt-0">
        La plataforma donde las empresas{' '}
        <span>encuentran su futuro comercial</span>
      </p>
    </div>
  );
};
