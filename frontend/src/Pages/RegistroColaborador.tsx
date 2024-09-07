import { Colaborador1 } from '@/Components/Registros/Colaborador1';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { useState } from 'react';

export const RegistroColaborador = () => {
  const [tab, setTab] = useState<number>(1);

  const nextTab = (num: number) => {
    setTab(num);
  };

  return (
    <>
      <main className="flex flex-col h-screen items-center px-3 overflow-y-auto overflow-x-hidden">
        <h2 className="my-4 font-bold text-xl">Registrare</h2>
        <Tabs
          value={tab === 1 ? 'info-1' : 'info-2'}
          defaultValue="info-1"
          className="w-full bg-slate-100 shadow-xl drop-shadow-md p-4 max-w-[900px]"
        >
          <TabsList className="flex justify-center mb-4 items-center sm:gap-4 gap-2">
            <TabsTrigger
              className={`text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full ${
                tab === 1 ? 'bg-principal-600' : 'bg-slate-300'
              }`}
              value="info-1"
              onClick={() => setTab(1)}
            >
              1
            </TabsTrigger>
            <div className="w-full max-w-[120px] h-1 bg-principal-600"></div>
            <TabsTrigger
              className={`text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full ${
                tab === 2 ? 'bg-principal-600' : 'bg-slate-400'
              }`}
              value="info-2"
              onClick={() => setTab(2)}
            >
              2
            </TabsTrigger>
          </TabsList>
          <TabsContent value="info-1">
            <Colaborador1 nextTab={nextTab} />
          </TabsContent>
          <TabsContent value="info-2">Change your password here.</TabsContent>
        </Tabs>
      </main>
    </>
  );
};
