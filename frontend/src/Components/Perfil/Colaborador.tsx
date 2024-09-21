import { TypeColaboradores } from '@/types/colaboradores';
import { ImagenHeader } from './ImagenHeader';
import { Card } from './Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Colaborador1 } from './Colaborador/Colaborador1';

export const Colaborador = ({
  colaborador,
}: {
  colaborador: TypeColaboradores;
}) => {
  return (
    <div className="flex flex-col bg-gradient-to-l dark:to-zinc-600 dark:from-zinc-700">
      <ImagenHeader
        type="colaborador"
        id={colaborador.id}
        imagen={colaborador['imagen-2']}
      />
      <div className="grid md:grid-cols-[auto,1fr] mb-16">
        <div className="flex flex-col px-4 pb-4">
          <Card
            imagen={colaborador.imagen}
            nombre={colaborador.usuario}
            email={colaborador.email}
            telefono={colaborador.telefono}
            value={colaborador.puntuacion / colaborador.puntuados}
          />
        </div>
        <div className="flex justify-center p-8">
          <Tabs defaultValue="perfil" className="w-full">
            <TabsList className="flex justify-between bg-transparent dark:bg-transparent">
              <TabsTrigger
                className="border-b-4 rounded-none data-[state=active]:border-principal-500 dark:data-[state=active]:border-white dark:border-zinc-500"
                value="perfil"
              >
                Perfil
              </TabsTrigger>
              <TabsTrigger
                className="border-b-4 rounded-none data-[state=active]:border-principal-500 dark:data-[state=active]:border-white dark:border-zinc-500"
                value="trabajos-aceptados"
              >
                Trabajos aceptados
              </TabsTrigger>
              <TabsTrigger
                className="border-b-4 rounded-none data-[state=active]:border-principal-500 dark:data-[state=active]:border-white dark:border-zinc-500"
                value="historial"
              >
                Historial de trabajos
              </TabsTrigger>
            </TabsList>
            <TabsContent value="perfil">
              <Colaborador1 colaborador={colaborador} />
            </TabsContent>
            <TabsContent value="trabajos-aceptados">
              <h1>trabajos-aceptados</h1>
            </TabsContent>
            <TabsContent value="historial">
              <h1>historial</h1>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
