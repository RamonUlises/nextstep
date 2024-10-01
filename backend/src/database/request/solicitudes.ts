import solicitudDataBase from '@/schemas/solicitudes';
import { TypeSolicitudes } from '@/types/solicitudes';

class Solicitudes {
  async obtenerSolicitud(id: string): Promise<TypeSolicitudes> {
    try {
      const solicitud = await solicitudDataBase.find({ id });
      return solicitud[0];
    } catch {
      throw new Error('Error al obtener la solicitud');
    }
  }
  async crearSolicitud(solicitud: TypeSolicitudes): Promise<void> {
    try {
      await solicitudDataBase.create(solicitud);
    } catch {
      throw new Error('Error al crear la solicitud');
    }
  }
  async obtenerSolicitudPorColaborador(
    id: string,
    idColaborador: string,
  ): Promise<TypeSolicitudes> {
    try {
      const solicitud = await solicitudDataBase.find().where('id-trabajo', id).where('id-trabajador', idColaborador);
      return solicitud[0];
    } catch {
      throw new Error('Error al obtener la solicitudddd');
    }
  }
  async obtenerSolicitudesEmpresa(id: string): Promise<TypeSolicitudes[]> {
    try {
      const solicitudes = await solicitudDataBase.find().where('id-empresa', id).where('estado', 'pendiente');
      return solicitudes;
    } catch {
      throw new Error('Error al obtener las solicitudes');
    }
  }
  async actualizarEstadoSolicitud(id: string, estado: string): Promise<void> {
    try {
      await solicitudDataBase.updateOne({ estado }).where('id', id);
    } catch {
      throw new Error('Error al actualizar el estado de la solicitud');
    }
  }
  async obtenerSolicitudesColaborador(id: string): Promise<TypeSolicitudes[]> {
    try {
      const solicitudes = await solicitudDataBase.find({
        'id-trabajador': id,
        estado: { $in: ['aceptado', 'rechazado'] },
      });
      return solicitudes;
    } catch {
      throw new Error('Error al obtener las solicitudes');
    }
  }
}

const solicitudes = new Solicitudes();

export default solicitudes;
