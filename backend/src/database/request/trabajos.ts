import trabajos from '@/schemas/trabajos';
import { TypeTrabajos } from '@/types/trabajos';

class RequesDatabase {
  async obtenerTrabajos(): Promise<TypeTrabajos[]> {
    try {
      const data = await trabajos.find();
      return data as TypeTrabajos[];
    } catch {
      throw new Error('Error al obtener los trabajos');
    }
  }
  async obtenerTrabajo(id: string): Promise<TypeTrabajos[]> {
    try {
      const data = await trabajos.find({ id });
      return data as TypeTrabajos[];
    } catch {
      throw new Error('Error al obtener el trabajo');
    }
  }
  async crearTrabajo(data: TypeTrabajos): Promise<void> {
    try {
      await trabajos.create(data);
    } catch {
      throw new Error('Error al crear el trabajo');
    }
  }
  async actualizarTrabajo(
    id: string,
    data: Partial<TypeTrabajos>,
  ): Promise<void> {
    try {
      delete data.id;
      await trabajos.updateOne({ id }, data);
    } catch {
      throw new Error('Error al actualizar el trabajo');
    }
  }
  async eliminarTrabajo(id: string): Promise<void> {
    try {
      await trabajos.deleteOne({ id });
    } catch {
      throw new Error('Error al eliminar el trabajo');
    }
  }
  async obtenerTrabajosPorEmpresa(empresa: string): Promise<TypeTrabajos[]> {
    try {
      const data = await trabajos.find({
        'id-empresa': empresa,
      });
      return data as TypeTrabajos[];
    } catch {
      throw new Error('Error al obtener los trabajos');
    }
  }
  async obtenerTrabajosPorUsuario(
    usuario: string,
    estado: string,
  ): Promise<TypeTrabajos[]> {
    try {
      const data = await trabajos.find({
        estado: estado,
        aceptados: { $in: [usuario] },
      });
      return data as TypeTrabajos[];
    } catch {
      throw new Error('Error al obtener los trabajos');
    }
  }
  async obtenerTrabajosEstado(estado: string): Promise<TypeTrabajos[]> {
    try {
      const data = await trabajos.find({ estado });
      return data as TypeTrabajos[];
    } catch {
      throw new Error('Error al obtener los trabajos');
    }
  }
  async actualizarImagenNombre(
    id: string,
    imagen: string,
    empresa: string,
  ): Promise<void> {
    try {
      // actualizar la imagen de todos los trabajos del id-empresa sea igual al id
      await trabajos.updateMany(
        { 'id-empresa': id },
        { $set: { imagen, empresa } },
      );
    } catch {
      throw new Error('Error al actualizar la imagen');
    }
  }
  async subirNivel(id: string, nivel: number): Promise<void> {
    try {
      await trabajos.updateMany({ 'id-empresa': id }, { $set: { nivel } });
    } catch {
      throw new Error('Error al subir el nivel');
    }
  }
  async actualizarColaborador(id: string, colaborador: string): Promise<void> {
    try {
      await trabajos.updateOne({ id }, { $push: { aceptados: colaborador } });
    } catch {
      throw new Error('Error al actualizar el colaborador');
    }
  }
}

const requestDatabase = new RequesDatabase();

export default requestDatabase;
