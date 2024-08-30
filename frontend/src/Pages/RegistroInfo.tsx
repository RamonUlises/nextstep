import { Link } from 'react-router-dom';
import imagenRegistro from '../assets/imagen-registro.png';
export const RegistroInfo = () => {
  return (
    <>
      <main className="flex  h-screen overflow-hidden relative dark:bg-zinc-800">
        <div className='w-20 h-20 rounded-full bg-gradient-to-r from-[#C3480B] to-[#E75F0B] absolute top-8 right-[18%] dark:to-zinc-700 dark:from-zinc-600'></div>
        <div className='w-32 h-32 rounded-full bg-gradient-to-r from-[#C3480B] to-[#E75F0B] absolute top-[78%] right-[29%] dark:to-zinc-700 dark:from-zinc-600'></div>
        <div className='w-96 h-96 rounded-full bg-gradient-to-r from-[#C3480B] to-[#E75F0B] absolute top-[14%] -right-[5%]  dark:to-zinc-700 dark:from-zinc-600 '></div>
        
        <div className="flex flex-col items-center justify-center w-[70%] h-full px-[100px]">
          <h1 className="text-black text-5xl font-bold mb-[60px] dark:text-white">
            Crea un perfil que destaque entre la multitud en StartUp
          </h1>
          <ul className="flex flex-col text-black text-xl ul-registro list-disc gap-6 font-semibold px-[90px] dark:text-white">
            <li className="">
              Tómate tu tiempo para crear tu perfil para que sea exactamente
              como quieres que sea.
            </li>
            <li>
              Aumente su credibilidad vinculando sus redes profesionales
              relevantes.
            </li>
            <li>
              Describe con precisión tus habilidades profesionales para ayudarte
              a conseguir más trabajo.
            </li>
          </ul>

          <Link
            to="/registro/trabajador"
            className="text-white rounded-2xl bg-[#E75F0B] px-5 py-2 shadow-xl drop-shadow mt-20
           hover:bg-[#FA7C15] transition duration-300 dark:bg-zinc-700 dark:hover:bg-zinc-600"
          >
            Comenzar
          </Link>
        </div>
        <div className="flex justify-end w-[30%] h-full items-end">
          <img
            src={imagenRegistro}
            alt="Imagen registro"
            className="w-auto h-[80%] z-10"
          />
        </div>
      </main>
    </>
  );
};
