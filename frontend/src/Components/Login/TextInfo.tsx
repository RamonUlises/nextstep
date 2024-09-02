import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { textBackground } from '../../lib/textBackground';

export const TextInfo = () => {
  const text: string[] =
    'Crea un perfil que destaque entre la multitud en StartUp'.split('');
  const text2: string[] =
    'Tómate tu tiempo para crear tu perfil para que sea exactamente como quieres que sea.'.split(
      ''
    );
  const text3: string[] =
    'Aumente su credibilidad vinculando sus redes profesionales relevantes.'.split(
      ''
    );
  const text4: string[] =
    'Describe con precisión tus habilidades profesionales para ayudarte a conseguir más trabajo.'.split(
      ''
    );

  const circleRef = useRef<HTMLDivElement>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);
  const spansLiRef1 = useRef<(HTMLSpanElement | null)[]>([]);
  const spansLiRef2 = useRef<(HTMLSpanElement | null)[]>([]);
  const spansLiRef3 = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    textBackground({ circleRef, spansRef });
    textBackground({ circleRef, spansRef: spansLiRef1 });
    textBackground({ circleRef, spansRef: spansLiRef2 });
    textBackground({ circleRef, spansRef: spansLiRef3 });

    window.addEventListener('resize', () => {
      textBackground({ circleRef, spansRef });
      textBackground({ circleRef, spansRef: spansLiRef1 });
      textBackground({ circleRef, spansRef: spansLiRef2 });
      textBackground({ circleRef, spansRef: spansLiRef3 });
    });
    return () => {
      window.removeEventListener('resize', () => {
        textBackground({ circleRef, spansRef });
        textBackground({ circleRef, spansRef: spansLiRef1 });
        textBackground({ circleRef, spansRef: spansLiRef2 });
        textBackground({ circleRef, spansRef: spansLiRef3 });
      });
    };
  }, []);

  return (
    <>
      <div
        ref={circleRef}
        className="w-[550px] h-[550px] rounded-full bg-gradient-to-r from-[#C3480B] to-[#E75F0B] absolute -top-[14%] -left-[5%] dark:to-zinc-700 dark:from-zinc-600 hidden md:block -z-10"
      ></div>
      <h1 className="text-black text-3xl lg:text-5xl font-bold mb-[60px] dark:text-white">
        {text.map((letter, index) => (
          <span
            data-span="span"
            key={index}
            ref={(el) => (spansRef.current[index] = el)}
          >
            {letter}
          </span>
        ))}
      </h1>
      <ul className="flex flex-col text-black lg:text-xl ul-registro list-disc gap-6 font-semibold p-0 lg:px-[70px] dark:text-white">
        <li>
          {text2.map((letter, index) => (
            <span
              data-span="span"
              key={index}
              ref={(el) => (spansLiRef1.current[index] = el)}
            >
              {letter}
            </span>
          ))}
        </li>
        <li>
          {text3.map((letter, index) => (
            <span
              data-span="span"
              key={index}
              ref={(el) => (spansLiRef2.current[index] = el)}
            >
              {letter}
            </span>
          ))}
        </li>
        <li>
          {text4.map((letter, index) => (
            <span
              data-span="span"
              key={index}
              ref={(el) => (spansLiRef3.current[index] = el)}
            >
              {letter}
            </span>
          ))}
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
