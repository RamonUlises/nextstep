import zod from 'zod';
import crypto from 'node:crypto';
import { Request, Response } from 'express';

import requestDataBaseEmpresa from '@/database/request/empresas';
import { TypeEmpresa } from '@/types/empresas';
import { manejarError } from '@/lib/errores';
import { ErrorZodType } from '@/types/errorZod';
import  { decrypt, encrypt } from '@/lib/encripts';

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
      
      data.forEach((empresa) => {
        empresa.contrasena = decrypt(empresa.contrasena);
      });

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

      data.forEach((empresa) => {
        empresa.contrasena = decrypt(empresa.contrasena);
      });

      res.status(200).json({ message: 'Empresa obtenida', data });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la empresa', error });
    }
  };
  async crearEmpresa(req: Request, res: Response): Promise<void> {
    try {
      const data: TypeEmpresa = req.body as TypeEmpresa;

      schema.parse(req.body);

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
