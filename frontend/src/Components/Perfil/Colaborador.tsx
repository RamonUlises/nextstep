import { TypeColaboradores } from '@/types/colaboradores';
import { ImagenHeader } from './ImagenHeader';
import { Card } from './Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Colaborador1 } from './Colaborador/Colaborador1';
import { Colaborador2 } from './Colaborador/Colaborador2';
import { Colaborador3 } from './Colaborador/Colaborador3';

export const Colaborador = ({
  colaborador,
}: {
  colaborador: TypeColaboradores;
}) => {
  return (
    <div className="flex flex-col bg-gradient-to-l dark:to-zinc-700 dark:from-zinc-800">
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
          <Tabs defaultValue="perfil" className="w-full m-0">
            <TabsList className="flex flex-col gap-3 sm:justify-around bg-transparent dark:bg-transparent sm:flex-row my-6 sm:my-0">
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
              <Colaborador2 usuario={colaborador.usuario} />
            </TabsContent>
            <TabsContent value="historial">
              <Colaborador3 usuario={colaborador.usuario} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
