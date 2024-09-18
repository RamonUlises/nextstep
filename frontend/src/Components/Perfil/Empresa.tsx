import { TypeEmpresa } from '@/types/empresas';
import { ImagenHeader } from './ImagenHeader';
import { Card } from './Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs';
import { Empresa1 } from './Empresa/Empresa1';
import { Empresa2 } from './Empresa/Empresa2';

export const Empresa = ({ empresa }: { empresa: TypeEmpresa }) => {
  return (
    <>
      <div className="flex flex-col">
        <ImagenHeader id={empresa.id} imagen={empresa['imagen-2']} />
        <div className="grid grid-cols-[auto,1fr] mb-16">
          <div className="flex flex-col px-4 pb-4">
            <Card
              imagen={empresa.imagen}
              nombre={empresa.nombre}
              email={empresa.email[0]}
              telefono={empresa.telefono[0]}
              value={13 / 3}
            />
          </div>
          <div className="flex justify-center p-8">
            <Tabs defaultValue="perfil" className="w-full">
              <TabsList className="flex justify-center gap-24 bg-transparent">
                <TabsTrigger
                  className="border-b-4 rounded-none w-1/4 data-[state=active]:border-principal-500"
                  value="perfil"
                >
                  Perfil
                </TabsTrigger>
                <TabsTrigger
                  className="border-b-4 rounded-none w-1/4 data-[state=active]:border-principal-500"
                  value="ofertas"
                >
                  Ofertas
                </TabsTrigger>
              </TabsList>
              <TabsContent value="perfil">
                <Empresa1 empresa={empresa} />
              </TabsContent>
              <TabsContent value="ofertas">
                <Empresa2 empresa={empresa} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};
