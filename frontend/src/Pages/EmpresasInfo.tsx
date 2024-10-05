import { ImagenHeader } from '@/Components/Colaboradores/ImagenHeader';
import { Empresa1 } from '@/Components/Empresas/Empresa1';
import { Empresa2 } from '@/Components/Empresas/Empresa2';
import { Card } from '@/Components/Perfil/Card';
import { Skeleton } from '@/Components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs';
import { Layout } from '@/Layouts/Layout';
import empresas from '@/lib/empresas';
import { TypeEmpresa } from '@/types/empresas';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const EmpresasInfo = () => {
  const { id } = useParams();

  const [empresaInfo, setEmpresaInfo] = useState<TypeEmpresa>(
    {} as TypeEmpresa
  );

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const response = await empresas.obtenerEmpresa(id);
        setEmpresaInfo(response.data);
      } catch {
        console.error('Error al obtener la información del colaborador');
      }
    })();
  }, [id]);
  return (
    <>
      {empresaInfo.nombre === undefined ? (
        <Skeleton className="w-screen h-screen bg-slate-400 dark:bg-black" />
      ) : (
        <Layout>
          <ImagenHeader imagen={empresaInfo['imagen-2']} />
          <div className="flex flex-col md:flex-row">
            <div className="mx-auto px-4">
              <Card
                email={empresaInfo.email[0]}
                nombre={empresaInfo.nombre}
                imagen={empresaInfo.imagen}
                telefono={empresaInfo.telefono[0]}
                value={empresaInfo.puntuacion / empresaInfo.puntuados}
                nivel={empresaInfo.nivel}
              />
            </div>
            <div className="flex flex-col flex-grow mt-8 px-4 md:max-w-[750px] w-full mx-auto dark:text-white md:mt-24 max-w-[500px]">
              <Tabs defaultValue="perfil" className="w-full">
                <TabsList className="flex justify-center gap-24 bg-transparent dark:bg-transparent">
                  <TabsTrigger
                    className="border-b-4 rounded-none w-1/4 data-[state=active]:border-principal-500 dark:data-[state=active]:border-white dark:border-zinc-500"
                    value="perfil"
                  >
                    Perfil
                  </TabsTrigger>
                  <TabsTrigger
                    className="border-b-4 rounded-none w-1/4 data-[state=active]:border-principal-500 dark:data-[state=active]:border-white dark:border-zinc-500"
                    value="ofertas"
                  >
                    Ofertas
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="perfil">
                  <Empresa1 empresa={empresaInfo} />
                </TabsContent>
                <TabsContent value="ofertas">
                  <Empresa2 empresa={empresaInfo} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};
