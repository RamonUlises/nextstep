import zod from 'zod';
import crypto from 'node:crypto';
import { Request, Response } from 'express';

import requestDataBaseEmpresa from '@/database/request/empresas';
import { TypeEmpresa } from '@/types/empresas';

const { string } = zod;

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
        'imagen': string(),
      });

      schema.parse(req.body);

      data.id = crypto.randomUUID();
      await requestDataBaseEmpresa.crearEmpresa(data);

      res.status(200).json({ message: 'Empresa creada' });
    } catch (error) {
      res.status(400).json({ message: 'Le faltan datos a la petición', error });
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
        'imagen': string(),
      });

      schema.parse(req.body);

      await requestDataBaseEmpresa.actualizarEmpresa(id, data);

      res.status(200).json({ message: 'Empresa actualizada' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la empresa', error });
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

      res.status(200).json({ message: 'Empresa eliminada' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la empresa', error });
    }
  }
}

const empresas = new Empresa();

export default empresas;

/*  */
