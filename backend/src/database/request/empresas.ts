import { TypeEmpresa } from '@/types/empresas';
import empresas from '@schemas/empresas';

class RequesDatabase {
  async obtenerEmpresas(): Promise<TypeEmpresa[]> {
    try{
      const data = await empresas.find();
      return data as TypeEmpresa[];
    } catch{ 
      throw new Error('Error al obtener las empresas');
    }
  }
  async obtenerEmpresa(id: string): Promise<TypeEmpresa[]> {
    try {
      const data = await empresas.find({ id });
      return data as TypeEmpresa[];
    } catch(error) {
      console.log(error);
      throw new Error('Error al obtener la empresa');
    }
  }
  async crearEmpresa(data: TypeEmpresa): Promise<void> {
    try {
      await empresas.create(data);
    } catch {
      throw new Error('Error al crear la empresa');
    }
  }
  async actualizarEmpresa(id: string, data: Partial<TypeEmpresa>): Promise<void> {
    try {
      delete data.id;
      await empresas.updateOne({ id }, data);
    } catch {
      throw new Error('Error al actualizar la empresa');
    }
  }
  async eliminarEmpresa(id: string): Promise<void> {
    try {
      await empresas.deleteOne({ id });
    } catch {
      throw new Error('Error al eliminar la empresa');
    }
  }
  async obtenerEmpresaPorEmail(email: string): Promise<TypeEmpresa[]> {
    try {
      const data = await empresas.find({ email });
      return data as TypeEmpresa[];
    } catch {
      throw new Error('Error al obtener la empresa');
    }
  }
}

const requestDatabase = new RequesDatabase();

export default requestDatabase;
