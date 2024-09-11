import { Colaborador1 } from '@/Components/Registros/colaborador/Colaborador1';
import { Colaborador2 } from '@/Components/Registros/colaborador/Colaborador2';
import { TypeColaboradores } from '@/types/colaboradores';
import { validateColaborador } from '@/utils/validateColaborador';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { useState } from 'react';
import Colaborador from '@/lib/colaboradores';

export const RegistroColaborador = () => {
  const [tab, setTab] = useState<number>(1);
  const [colaborador, setColaborador] = useState<TypeColaboradores>({
    id: '1',
    nombres: '',
    usuario: '',
    telefono: '',
    email: '',
    contrasena: '',
    'redes-sociales': [],
    imagen: 'sin-imagen',
    'imagen-2': 'sin-imagen',
    descripcion: '',
    'educacion-primaria': false,
    'educacion-secundaria': false,
    titulos: [],
    idiomas: [],
    certificados: [],
    referencias: [],
    habilidades: [],
    puntos: 0,
    puntuacion: 0,
    saldo: 0,
  });
  const [error, setError] = useState<string>('');
  const [error2, setError2] = useState<string>('');

  const nextTab = (num: number) => {
    try {
      setError('');
      validateColaborador(colaborador);
      setTab(num);
    } catch (error) {
      setError(error as string);
    }
  };

  const registrarColaborador = async () => {
    try {
      validateColaborador(colaborador);

      try {
        const response = await Colaborador.agregarColaborador(colaborador);
        
        if(response.status === 200){
          setError2('Bienvenido a NextStep');
          setTimeout(() => {
            window.location.href = '/';
          }, 4000);
        }
      } catch (error) {
        if(error instanceof Error){
          setError2('Error al enviar los datos');
        } else if (typeof error === 'object' && error != null && 'data' in error){
          const err = error as { data: { message: string; status: number }};
          setError2(err.data.message);
        } else {
          setError2('Error al enviar los datos');
        }
      }
    } catch(error) {
      setError2(error as string);
    }
  };

  return (
    <>
      <main className="flex flex-col h-screen items-center px-3 overflow-y-auto overflow-x-hidden bg-gradient-to-tr dark:from-zinc-800 dark:to-zinc-700">
        <h2 className="my-4 font-bold text-xl  dark:text-white">Regístrate</h2>
        <Tabs
          value={tab === 1 ? 'info-1' : 'info-2'}
          defaultValue="info-1"
          className="w-full bg-slate-100 shadow-xl drop-shadow-md p-4 max-w-[900px] dark:bg-zinc-800 rounded-xl"
        >
          <TabsList className="flex justify-center mb-4 items-center sm:gap-4 gap-2">
            <TabsTrigger
              disabled
              className={`text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full ${
                tab === 1
                  ? 'bg-principal-600 dark:text-black dark:bg-white'
                  : 'bg-slate-400 dark:text-white dark:bg-zinc-700'
              }`}
              value="info-1"
              onClick={() => setTab(1)}
            >
              1
            </TabsTrigger>
            <div className="w-full max-w-[120px] h-1 bg-principal-600 dark:bg-zinc-600"></div>
            <TabsTrigger
              className={`text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full ${
                tab === 2
                  ? 'bg-principal-600 dark:text-black dark:bg-white'
                  : 'bg-slate-400 dark:text-white dark:bg-zinc-700'
              }`}
              disabled
              value="info-2"
              onClick={() => setTab(2)}
            >
              2
            </TabsTrigger>
          </TabsList>
          <TabsContent value="info-1">
            <Colaborador1
              error={error}
              colaborador={colaborador}
              setColaborador={setColaborador}
              nextTab={nextTab}
            />
          </TabsContent>
          <TabsContent value="info-2">
            <Colaborador2
              error={error2}
              colaborador={colaborador}
              setColaborador={setColaborador}
              registrar={registrarColaborador}
              nextTab={nextTab}
            />
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
};
