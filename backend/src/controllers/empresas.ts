import zod from 'zod';
import crypto from 'node:crypto';
import { Request, Response } from 'express';

import requestDataBaseEmpresa from '@/database/request/empresas';
import requestDatabaseTrabajadores from '@/database/request/trabajadores';
import { TypeEmpresa } from '@/types/empresas';
import { manejarError } from '@/lib/errores';
import { ErrorZodType } from '@/types/errorZod';
import { encrypt } from '@/lib/encripts';

const { string, number } = zod;

const schema = zod.object({
  'numero-identificacion': string(),
  'certificado-registro': string(),
  'licencia-comercial': string(),
  'nombre': string(),
  'direccion': string().array(),
  'telefono': string().array(),
  'email': string().array(),
  'contrasena': string(),
  'redes-sociales': string().array(),
  'mision': string(),
  'vision': string(),
  'objetivos': string().array(),
  'puntuacion': number(),
  'imagen': string(),
});

class Empresa {
  async obtenerEmpresas(req: Request, res: Response): Promise<void> {
    try {
      const data: TypeEmpresa[] = await requestDataBaseEmpresa.obtenerEmpresas();

      res.status(200).json({ message: 'Empresas obtenidas', data });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las empresas', error });
    }
  }
  async obtenerEmpresa(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data: TypeEmpresa[] = await requestDataBaseEmpresa.obtenerEmpresa(id);

      if(data.length === 0) {
        res.status(404).json({ message: 'Empresa no encontrada' });
        return;
      }

      res.status(200).json({ message: 'Empresa obtenida', data });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la empresa', error });
    }
  };
  async crearEmpresa(req: Request, res: Response): Promise<void> {
    try {
      const data: TypeEmpresa = req.body as TypeEmpresa;

      schema.parse(req.body);

      for(const email of data.email) {
        const response1 = await requestDataBaseEmpresa.obtenerEmpresaPorEmail(email);

        if(response1.length > 0) {
          res.status(400).json({ message: `El email '${email}' ya está en uso` });
          return;
        }

        const response2 = await requestDatabaseTrabajadores.obtenerTrabajadorPorEmail(email);

        if(response2.length > 0) {
          res.status(400).json({ message: `El email '${email}' ya está en uso` });
          return;
        }
      }

      data.id = crypto.randomUUID();
      data.contrasena = encrypt(data.contrasena);
      await requestDataBaseEmpresa.crearEmpresa(data);

      res.status(200).json({ message: 'Empresa creada con éxito' });
    } catch (error) {
      manejarError(res, error as ErrorZodType);
    }
  }
  async actualizarEmpresa(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const emp: TypeEmpresa[] = await requestDataBaseEmpresa.obtenerEmpresa(id);

      if(emp.length === 0) {
        res.status(404).json({ message: 'Empresa no encontrada' });
        return;
      }

      const data: TypeEmpresa = req.body as TypeEmpresa;

      schema.parse(req.body);

      for(const email of data.email) {
        const response = await requestDataBaseEmpresa.obtenerEmpresaPorEmail(email);

        if(response.length > 0 && response[0].id !== id) {
          res.status(400).json({ message: `El email '${email}' ya está en uso` });
          return;
        }

        const response2 = await requestDatabaseTrabajadores.obtenerTrabajadorPorEmail(email);

        if(response2.length > 0) {
          res.status(400).json({ message: `El email '${email}' ya está en uso` });
          return;
        }
      }

      data.contrasena = encrypt(data.contrasena);
      await requestDataBaseEmpresa.actualizarEmpresa(id, data);

      res.status(200).json({ message: 'Empresa actualizada con éxito' });
    } catch (error) {
      manejarError(res, error as ErrorZodType);
    }
  }
  async eliminarEmpresa(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data: TypeEmpresa[] = await requestDataBaseEmpresa.obtenerEmpresa(id);

      if(data.length === 0) {
        res.status(404).json({ message: 'Empresa no encontrada' });
        return;
      }

      await requestDataBaseEmpresa.eliminarEmpresa(id);

      res.status(200).json({ message: 'Empresa eliminada con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la empresa', error });
    }
  }
}

const empresas = new Empresa();

export default empresas;
