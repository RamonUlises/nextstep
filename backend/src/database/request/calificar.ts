import calificarDB from '@schemas/calificar';
import { TypeCalificar } from '@/types/calificar';

class Calificar {
  async crearCalificacion(calificacion: TypeCalificar) {
    try {
      await calificarDB.create(calificacion);
    } catch {
      throw new Error('Error al crear calificación');
    }
  }
  async obtenerCalificacionesUsuario(usuario: string): Promise<TypeCalificar[]> {
    try {
      return await calificarDB.find({ usuario });
    } catch {
      throw new Error('Error al obtener calificaciones');
    }
  }
  async borrarCalificacion(id: string) {
    try {
      await calificarDB.deleteOne({ id });
    } catch {
      throw new Error('Error al borrar calificación');
    }
  }
}

const calificar = new Calificar();

export default calificar;
