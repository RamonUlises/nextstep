import zod from 'zod';
import crypto from 'crypto';
import requestDatabaseTrabajo from '@database/request/trabajos';
import { TypeTrabajos } from '@/types/trabajos';
import { Request, Response } from 'express';
import { manejarError } from '@/lib/errores';
import { ErrorZodType } from '@/types/errorZod';

const { string, number } = zod;

const schema = zod.object({
  'empresa': string(),
  'descripcion': string(),
  'requerimientos': string().array(),
  'fecha-publicacion': string(),
  'fecha-inicio': string(),
  'fecha-expericacion': string(),
  'contrato': string(),
  'presupuesto': number(),
  'puntos': number(),
  'etiquetas': string().array(),
  'departamento': string().array(),
});

class Trabajos {
  async obtenerTrabajos(req: Request, res: Response): Promise<void> {
    try {
      const data: TypeTrabajos[] = await requestDatabaseTrabajo.obtenerTrabajos();
      res.status(200).json({ message: 'Trabajos obtenidos', data });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los trabajos', error });
    }
  }
  async obtenerTrabajo(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data: TypeTrabajos[] = await requestDatabaseTrabajo.obtenerTrabajo(id);

      if (data.length === 0) {
        res.status(404).json({ message: 'Trabajo no encontrado' });
        return;
      }

      res.status(200).json({ message: 'Trabajo obtenido', data });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el trabajo', error });
    }
  }
  async crearTrabajo(req: Request, res: Response): Promise<void> {
    try {
      const data: TypeTrabajos = req.body as TypeTrabajos;

      schema.parse(req.body);

      data.id = crypto.randomUUID();
      await requestDatabaseTrabajo.crearTrabajo(data);

      res.status(200).json({ message: 'Trabajo creado con éxito' });
    } catch (error) {
      manejarError(res, error as ErrorZodType);
    }
  }
  async actualizarTrabajo(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const trabajo: TypeTrabajos[] = await requestDatabaseTrabajo.obtenerTrabajo(id);

      if (trabajo.length === 0) {
        res.status(404).json({ message: 'Trabajo no encontrado' });
        return;
      }

      const data: TypeTrabajos = req.body as TypeTrabajos;

      schema.parse(req.body);

      await requestDatabaseTrabajo.actualizarTrabajo(id, data);

      res.status(200).json({ message: 'Trabajo actualizado con éxito' });
    } catch (error) {
      manejarError(res, error as ErrorZodType);
    }
  }
  async eliminarTrabajo(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data: TypeTrabajos[] = await requestDatabaseTrabajo.obtenerTrabajo(id);

      if (data.length === 0) {
        res.status(404).json({ message: 'Trabajo no encontrado' });
        return;
      }

      await requestDatabaseTrabajo.eliminarTrabajo(id);

      res.status(200).json({ message: 'Trabajo eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el trabajo', error });
    }
  }
}

const trabajos = new Trabajos();

export default trabajos;
