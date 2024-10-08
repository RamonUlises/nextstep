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
    } catch {
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
  async aceptarEmpresa(id: string): Promise<void> {
    try {
      await empresas.updateOne({ id }, { verificado: true });
    } catch {
      throw new Error('Error al aceptar la empresa');
    }
  };
  async actualizarImagen2(id: string, imagen: string): Promise<void> {
    try {
      await empresas.updateOne({ id }, { 'imagen-2': imagen });
    } catch {
      throw new Error('Error al actualizar la imagen');
    }
  }
  async cambiarContrasena(id: string, contrasena: string): Promise<void> {
    try {
      await empresas.updateOne({ id }, { contrasena });
    } catch {
      throw new Error('Error al cambiar la contraseña');
    }
  }
  async subirNivel(id: string, nivel: number): Promise<void> {
    try {
      await empresas.updateOne({ id }, { nivel });
    } catch {
      throw new Error('Error al subir de nivel');
    }
  }
  async calificarEmpresa(id: string, calificacion: number): Promise<void> {
    try {
      const empresa = await empresas.findOne({ id });

      if (!empresa) {
        throw new Error('La empresa no existe');
      }

      const puntuacion = empresa.puntuacion + calificacion;
      const puntuados = empresa.puntuados + 1;

      await empresas.updateOne({ id }, { puntuacion, puntuados });
    } catch {
      throw new Error('Error al calificar la empresa');
    }
  }
}

const requestDatabase = new RequesDatabase();

export default requestDatabase;
