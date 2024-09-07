import { Link } from 'react-router-dom';
import { text, text2, text3, text4 } from '../../lib/textsInfoLogin';
import { LayoutAtropos } from '../LayoutAtropos';

export const TextInfo = () => {
  return (
    <>
      <LayoutAtropos
        innerClass="w-[550px] h-[550px] rounded-full bg-gradient-to-r from-[#C3480B] to-[#E75F0B] dark:to-zinc-700 dark:from-zinc-600"
        styles="absolute -top-[14%] -left-[5%] hidden md:block -z-10 opacity-95"
      ></LayoutAtropos>
      <h1 className="text-black text-3xl lg:text-5xl font-bold mb-[60px] dark:text-white">
        {text}
      </h1>
      <ul className="flex flex-col text-black lg:text-xl ul-registro list-disc gap-6 font-semibold p-0 lg:px-[70px] dark:text-white">
        <li>{text2}</li>
        <li>{text3}</li>
        <li>{text4}</li>
      </ul>

      <Link
        to="/registro/colaborador"
        className="text-white rounded-2xl bg-[#E75F0B] px-5 py-2 shadow-xl drop-shadow mt-20
           hover:bg-[#FA7C15] transition duration-300 dark:bg-zinc-700 dark:hover:bg-zinc-600"
      >
        Comenzar
      </Link>
    </>
  );
};
