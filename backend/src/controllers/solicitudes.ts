import calificar from '@/database/request/calificar';
import { TypeSolicitudes } from '@/types/solicitudes';
import solicitudDataBase from '@database/request/solicitudes';
import trabajosDataBase from '@database/request/trabajos';
import { Request, Response } from 'express';
import { string, object } from 'zod';

const schema = object({
  'id-trabajo': string(),
  'id-empresa': string(),
  'id-trabajador': string(),
  'imagen': string(),
  'estado': string(),
  'titulo': string(),
  'usuario': string(),
  'titulo-trabajo': string(),
});

class Solicitudes {
  async crearSolicitud(req: Request, res: Response) {
    try {
      const data = req.body as TypeSolicitudes;

      schema.parse(data);

      data.id = crypto.randomUUID();
      await solicitudDataBase.crearSolicitud(data);

      res.status(200).json({ message: 'Solicitud creada' });
    } catch {
      throw new Error('Error al crear la solicitud');
    }
  }
  async obtenerSolicitud(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const colaborador = req.query.colaborador as string;

      let solicitud: TypeSolicitudes;
      if(colaborador){
        solicitud = await solicitudDataBase.obtenerSolicitudPorColaborador(id, colaborador);
      } else {
        solicitud = await solicitudDataBase.obtenerSolicitud(id);
      }

      res.status(200).json(solicitud);
    } catch {
      throw new Error('Error al obtener la solicitud');
    }
  }
  async obtenerSolicitudEmpresa(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const solicitudes = await solicitudDataBase.obtenerSolicitudesEmpresa(id);

      res.status(200).json(solicitudes);
    } catch {
      throw new Error('Error al obtener las solicitudes');
    }
  }
  async actualizarEstadoSolicitud(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const { estado, idTrabajo, usuario } = req.body as { estado: string; idTrabajo: string; usuario: string };

      await solicitudDataBase.actualizarEstadoSolicitud(id, estado);

      if(estado === 'aceptado'){
        await trabajosDataBase.actualizarColaborador(idTrabajo, usuario);
      }

      res.status(200).json({ message: 'Estado actualizado' });
    } catch {
      throw new Error('Error al actualizar el estado de la solicitud');
    }
  }
  async obtenerSolicitudesColaborador(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const solicitudes = await solicitudDataBase.obtenerSolicitudesColaborador(id);

      res.status(200).json(solicitudes);
    } catch {
      throw new Error('Error al obtener las solicitudes');
    }
  }
  async obtenerSolicitudesCalificar(req: Request, res: Response) {
    try {
      const usuario = req.params.usuario;
      const solicitudes = await calificar.obtenerCalificacionesUsuario(usuario);

      res.status(200).json(solicitudes);
    } catch {
      throw new Error('Error al obtener las solicitudes');
    }
  }
}

const solicitudes = new Solicitudes();

export default solicitudes;
