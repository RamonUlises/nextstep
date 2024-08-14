import { TypeEmpresa } from '@/types/empresas';
import empresas from '@schemas/empresas';

class RequesDatabase {
  async obtenerEmpresas(): Promise<typeof empresas[]> {
    try{
      const data: typeof empresas[] = await empresas.find();
      return data;
    } catch{ 
      throw new Error('Error al obtener las empresas');
    }
  }

  async crearEmpresa(data: TypeEmpresa): Promise<void> {
    try {
      await empresas.create(data);
    } catch {
      throw new Error('Error al crear la empresa');
    }
  }
}

const requestDatabase = new RequesDatabase();

export default requestDatabase;
