import empresas from '@/schemas/empresas';
import trabajadores from '@/schemas/trabajadores';
import { TypeEmpresa } from '@/types/empresas';
import { TypeTrabajadores } from '@/types/trabajadores';

class RequesDatabase {
  async obtenerInfo(id: string): Promise<TypeEmpresa[] | TypeTrabajadores[] > {
    try {
      const empresa = await empresas.find({ id });
      if (empresa.length > 0) return empresa;
      
      const trabajador = await trabajadores.find({ id });
      if (trabajadores.length > 0) return trabajador;
      
      // Add a return statement here
      return [];
    } catch {
      throw new Error('Error al obtener la información');
    }
  }
}

const requestDatabase = new RequesDatabase();

export default requestDatabase;