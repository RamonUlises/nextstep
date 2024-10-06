import { preguntar } from '@/lib/chatBot';
import { Bot, User } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface chatBot {
  texto: string;
  user: string;
}

export const ChatBot = ({ imagen }: { imagen: string }) => {
  const [textoEscrito, setTextoEscrito] = useState('');
  const texto =
    'Hola, soy el asistente virtual de la plataforma, ¿en qué puedo ayudarte?';

  const [estado, setEstado] = useState(false);
  const [pregunta, setPregunta] = useState('');

  const [respuestasPreguntas, setRespuestaPreguntas] = useState<chatBot[]>([]);

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    let textoAnimado = '';

    const escribir = () => {
      if (index < texto.length) {
        textoAnimado += texto.charAt(index);
        setTextoEscrito(textoAnimado);
        index++;
        setTimeout(escribir, 70);
      }
    };

    escribir();

    return () => {
      index = texto.length;
    };
  }, []);

  async function realizarPregunta() {
    if (pregunta === '') return;
    agregarTexto('user', pregunta);
    setPregunta('');
    try {
      const response = await preguntar(pregunta);

      agregarTexto('bot', response);
    } catch (error) {
      console.error('Error al realizar la pregunta', error);
    }
  }

  function agregarTexto(user: string, texto: string) {
    setRespuestaPreguntas((prev) => {
      return [...prev, { texto, user }];
    });
  }

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current?.scrollHeight,
      behavior: 'smooth',
    });
  }, [respuestasPreguntas]);

  return (
    <>
      <div className="fixed bottom-20 md:bottom-0 right-0 m-5 z-[999] flex items-center gap-4">
        <div
          className={`bg-slate-200 dark:bg-zinc-700 dark:text-white w-48 md:w-64 px-3 py-3 rounded-sm ${
            estado && 'hidden'
          }`}
        >
          <p>{textoEscrito}</p>
        </div>
        <div
          onClick={() => setEstado(!estado)}
          className="w-16 h-16 bg-secundario-500 rounded-full flex justify-center items-center cursor-pointer dark:bg-zinc-700"
        >
          <Bot className="text-white" width={30} height={30} />
        </div>
      </div>
      <div
        className={`${
          estado ? 'flex' : 'hidden'
        } fixed w-[90%] max-w-[350px] h-[70vh] bg-slate-200 bottom-44 md:bottom-24 right-4 rounded-xl overflow-hidden flex-col dark:bg-zinc-800`}
      >
        <div>
          <div className="flex items-center gap-4 p-3">
            <Bot
              className="text-black dark:text-white"
              width={30}
              height={30}
            />
            <p className="text-black font-semibold dark:text-white">
              Asistente virtual
            </p>
          </div>
          <div className="p-3">
            <p className="text-black dark:text-white">
              Hola, soy el asistente virtual de la plataforma, ¿en qué puedo
              ayudarte?
            </p>
          </div>
        </div>
        <div ref={chatRef} className="flex-grow h-[50%] overflow-x-hidden">
          {respuestasPreguntas.map((chat, index) => (
            <div
              key={index}
              className={`flex items-center p-3 ${
                chat.user === 'user' && 'justify-end'
              }`}
            >
              <div
                className={`flex items-center gap-3 ${
                  chat.user === 'user' && 'flex-row-reverse'
                }`}
              >
                <div className="w-12 h-12 min-w-12 overflow-hidden rounded-full flex items-center justify-center bg-white dark:bg-zinc-500 flex-grow">
                  {chat.user === 'bot' ? (
                    <Bot
                      className="text-black dark:text-white"
                      width={30}
                      height={30}
                    />
                  ) : (
                    <>
                      {imagen === 'sin-imagen' ? (
                        <User className='dark:text-white' />
                      ) : (
                        <img
                          src={imagen}
                          alt="Imagen user"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </>
                  )}
                </div>
                <div
                  className={`${
                    chat.user === 'user'
                      ? 'bg-secundario-500 text-white dark:bg-zinc-700'
                      : 'bg-slate-300 dark:bg-zinc-700 text-black dark:text-white'
                  } p-3 rounded-lg`}
                >
                  <p>{chat.texto}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 p-3">
          <input
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            type="text"
            placeholder="Escribe tu mensaje"
            className="bg-slate-300 w-full p-2 rounded-lg outline-none dark:bg-zinc-500 dark:valid:text-white dark:placeholder:text-white"
          />
          <button
            onClick={realizarPregunta}
            className="bg-secundario-500 text-white px-4 py-2 rounded-lg dark:bg-zinc-600"
          >
            Enviar
          </button>
        </div>
      </div>
    </>
  );
};
