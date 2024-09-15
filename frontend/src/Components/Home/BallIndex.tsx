import { cookieExist } from '@/utils/cookies';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const BallIndex = () => {
  const [sesion] = useState(
    cookieExist('UserId')
  );
  return (
    <div className="pb-12 pt-5 bg-gradient-to-tl to-principal-600 from-principal-700 [#E75F0B] opacity-90 dark:to-zinc-800 dark:from-zinc-700 flex flex-col items-center static w-full md:rounded-full md:flex md:w-[85vh] md:h-[85vh] rounded-b-[90px] z-20 md:justify-center md:items-center md:-mb-[20vh] md:-ml-[100px] md:pb-[150px] md:pl-[100px]">
      <div className="md:hidden flex justify-between w-full ">
        <h1 className="mb-4 text-4xl font-extrabold text-white md:hidden w-[60%] text-end">
          NextStep
        </h1>
        <Link
          to="/login"
          className={`border-2 border-white before:bg-gradient-to-tl before:from-[#E75F0B] dark:before:from-zinc-800 before:to-[#C3480B] dark:before:to-zinc-700 button-menu outline-none cursor-pointer px-4 pt-2 m-0 relative text-base inline-block rounded-lg overflow-hidden bg-white text-white hover:text-[#E75F0B] dark:hover:text-zinc-700 h-11 mr-8 ${sesion && 'hidden'}`}
        >
          <span className="relative z-20 md:text-sm lg:text-base">Iniciar</span>
        </Link>
      </div>
      <h3 className="text-white md:text-[7vh] leading-none flex flex-col md:gap-3 gap-[2px] text-2xl">      
        <span>Sembrando </span> 
        <span>talentos,</span> 
        <span>cosechando</span>
        <span>oportunidades</span>
      </h3>
      <p className="text-white text-sm md:text-[2.5vh] flex flex-col mt-3 md:w-[80%]">
        La plataforma donde las empresas
        <span>encuentran su futuro comercial</span>
      </p>
    </div>
  );
};
