import { ChatBot } from '@/Components/ChatBot';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/Components/ui/accordion';
import { Skeleton } from '@/Components/ui/skeleton';
import { Layout } from '@/Layouts/Layout';
import { obtenerInfo } from '@/lib/obtenerInfo';
import { TypeColaboradores } from '@/types/colaboradores';
import { TypeEmpresa } from '@/types/empresas';
import { obtenerCookie } from '@/utils/cookies';
import { preguntas } from '@/utils/preguntas';
import { SearchCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Soporte = () => {
  const [user, setUser] = useState<TypeEmpresa | TypeColaboradores>(
    {} as TypeEmpresa | TypeColaboradores
  );
  const [preguntasSelect, setPreguntasSelect] = useState(preguntas);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const id = obtenerCookie('UserId');

    if (!id) return;
    (async () => {
      try {
        const response = await obtenerInfo(id);

        if (response.status === 200) {
          setUser(response.data[0]);
        }
      } catch {
        console.error('Error al obtener el usuario');
      }
    })();
  }, []);

  useEffect(() => {
    if (search === '') {
      setPreguntasSelect(preguntas);
      return;
    }

    const preguntasFiltradas = preguntas.filter(
      (pregunta) =>
        pregunta.pregunta.toLowerCase().includes(search.toLowerCase()) ||
        pregunta.respuesta.toLowerCase().includes(search.toLowerCase())
    );

    setPreguntasSelect(preguntasFiltradas);
  }, [search]);
  
  return (
    <>
      {user.puntuacion === undefined ? (
        <Skeleton className='w-screen h-screen bg-slate-400 dark:bg-black' />
      ) : (
        <Layout className="px-4">
          <h2 className="text-center text-3xl mt-8 md:mt-28 dark:text-slate-100">
            Hola,{' '}
            <span className="font-bold">
              @{'usuario' in user ? `${user.usuario}` : `${user.nombre}`}
            </span>
            , ¿cómo podemos ayudarte?
          </h2>
          <div className="relative w-full mx-auto max-w-[450px] mt-12">
            <SearchCheck className="absolute ml-2 mt-1 text-white" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              className="w-full bg-principal-500 outline-none pl-10 py-1 rounded text-white pr-4 dark:bg-zinc-600"
            />
          </div>
          <h5 className="text-center font-semibold mt-8 text-lg dark:text-slate-300">
            Preguntas frecuentes
          </h5>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-[780px] mx-auto mt-8"
          >
            {preguntasSelect.map((pregunta, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-base md:text-lg dark:text-white">
                  {pregunta.pregunta}
                </AccordionTrigger>
                <AccordionContent className="md:text-base dark:text-slate-200">
                  {pregunta.respuesta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <ChatBot imagen={user.imagen} />
        </Layout>
      )}
    </>
  );
};
