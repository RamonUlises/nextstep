import { Link } from 'react-router-dom';

export const TextInfo = () => {
  const text: string[] = 'Crea un perfil que destaque entre la multitud en StartUp'.split('');

  return (
    <>
      <div className="w-[550px] h-[550px] rounded-full bg-gradient-to-r from-[#C3480B] to-[#E75F0B] absolute -top-[14%] -left-[5%] dark:to-zinc-700 dark:from-zinc-600 hidden md:block -z-10"></div>
      <h1 className="text-black text-3xl lg:text-5xl font-bold mb-[60px] dark:text-white">
        {text.map(((letter, index) => <span data-span="span" key={index}>{letter}</span>))}
      </h1>
      <ul className="flex flex-col text-black lg:text-xl ul-registro list-disc gap-6 font-semibold p-0 lg:px-[70px] dark:text-white">
        <li className="">
          Tómate tu tiempo para crear tu perfil para que sea exactamente como
          quieres que sea.
        </li>
        <li>
          Aumente su credibilidad vinculando sus redes profesionales relevantes.
        </li>
        <li>
          Describe con precisión tus habilidades profesionales para ayudarte a
          conseguir más trabajo.
        </li>
      </ul>

      <Link
        to="/registro/trabajador"
        className="text-white rounded-2xl bg-[#E75F0B] px-5 py-2 shadow-xl drop-shadow mt-20
           hover:bg-[#FA7C15] transition duration-300 dark:bg-zinc-700 dark:hover:bg-zinc-600"
      >
        Comenzar
      </Link>
    </>
  );
};
