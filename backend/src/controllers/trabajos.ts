import zod from 'zod';
import crypto from 'crypto';
import requestDatabaseTrabajo from '@database/request/trabajos';
import { TypeTrabajos } from '@/types/trabajos';
import { Request, Response } from 'express';
import { manejarError } from '@/lib/errores';
import { ErrorZodType } from '@/types/errorZod';
import requestDatabaseTrabajadores from '@/database/request/trabajadores';
import calificar from '@/database/request/calificar';

const { string, number } = zod;

const schema = zod.object({
  'id-empresa': string(),
  empresa: string(),
  imagen: string(),
  titulo: string(),
  descripcion: string(),
  responsabilidades: string().array(),
  requisitos: string().array(),
  categorias: string().array(),
  beneficios: string().array(),
  contrato: string(),
  ubicacion: string(),
  'presupuesto-min': number(),
  'presupuesto-max': number(),
  'fecha-publicacion': string(),
  'fecha-inicio': string(),
  'fecha-expiracion': string(),
  puntos: number(),
  estado: string(),
  aceptados: string().array(),
  nivel: number(),
});

class Trabajos {
  async obtenerTrabajos(req: Request, res: Response): Promise<void> {
    try {
      const data: TypeTrabajos[] =
        await requestDatabaseTrabajo.obtenerTrabajos();
      res.status(200).json({ message: 'Trabajos obtenidos', data });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los trabajos', error });
    }
  }
  async obtenerTrabajo(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data: TypeTrabajos[] = await requestDatabaseTrabajo.obtenerTrabajo(
        id,
      );

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
      console.log(error);
    }
  }
  async actualizarTrabajo(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const trabajo: TypeTrabajos[] =
        await requestDatabaseTrabajo.obtenerTrabajo(id);

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
      const data: TypeTrabajos[] = await requestDatabaseTrabajo.obtenerTrabajo(
        id,
      );

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
  async obtenerTrabajosPorEmpresa(req: Request, res: Response): Promise<void> {
    try {
      const { empresa } = req.params;
      const data: TypeTrabajos[] =
        await requestDatabaseTrabajo.obtenerTrabajosPorEmpresa(empresa);

      if (data.length === 0) {
        res.status(404).json({ message: 'Trabajos no encontrados' });
        return;
      }

      res.status(200).json({ message: 'Trabajos obtenidos', data });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los trabajos', error });
    }
  }
  async obtenerTrabajosPorUsuario(req: Request, res: Response): Promise<void> {
    try {
      const { usuario } = req.params;
      const { estado } = req.query;
      const data: TypeTrabajos[] =
        await requestDatabaseTrabajo.obtenerTrabajosPorUsuario(
          usuario,
          estado as string,
        );

      if (data.length === 0) {
        res.status(404).json({ message: 'Trabajos no encontrados' });
        return;
      }

      res.status(200).json({ message: 'Trabajos obtenidos', data });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los trabajos', error });
    }
  }
  async obtenerTrabajosActivos(req: Request, res: Response): Promise<void> {
    try {
      const data: TypeTrabajos[] =
        await requestDatabaseTrabajo.obtenerTrabajosEstado('activa');

      if (data.length === 0) {
        res.status(404).json({ message: 'Trabajos no encontrados' });
        return;
      }

      res.status(200).json({ message: 'Trabajos obtenidos', data });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los trabajos', error });
    }
  }
  async caducarTrabajo(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const trabajo: TypeTrabajos[] =
        await requestDatabaseTrabajo.obtenerTrabajo(id);

      if (trabajo.length === 0) {
        res.status(404).json({ message: 'Trabajo no encontrado' });
        return;
      }

      await requestDatabaseTrabajo.actualizarTrabajo(id, {
        estado: 'caducada',
      });

      res.status(200).json({ message: 'Trabajo caducado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al caducar el trabajo', error });
    }
  }
  async finalizarTrabajo(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { puntuaciones, puntos, saldo, puntuados, empresa, titulo } = req.body as {
        puntuaciones?: { usuario: string; puntuacion: number }[];
        puntos: number;
        saldo: number;
        puntuados: string[];
        empresa: string;
        titulo: string;
      };

      const trabajo: TypeTrabajos[] =
        await requestDatabaseTrabajo.obtenerTrabajo(id);

      if (trabajo.length === 0) {
        res.status(404).json({ message: 'Trabajo no encontrado' });
        return;
      }

      if (puntuaciones) {
        await Promise.all(
          puntuaciones.map(async (puntuacion) => {
            await requestDatabaseTrabajadores.actualizarPuntuacion(
              puntuacion.usuario,
              puntuacion.puntuacion,
              puntos,
              saldo,
            );
          }),
        );
      } else {
        await Promise.all(
          puntuados.map(async (usuario) => {
            await requestDatabaseTrabajadores.actualizarPuntuacion(
              usuario,
              5,
              puntos,
              saldo,
            );
          }),
        );
      }

      await Promise.all(
        puntuados.map(async (usuario) => {
          const id = crypto.randomUUID();
          await calificar.crearCalificacion({ id, 'id-empresa': empresa, usuario, titulo });
        })
      );

      await requestDatabaseTrabajo.actualizarTrabajo(id, {
        estado: 'finalizada',
      });

      res.status(200).json({ message: 'Trabajo finalizado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al finalizar el trabajo', error });
    }
  }
}

const trabajos = new Trabajos();

export default trabajos;
