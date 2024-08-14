import zod from 'zod';
import crypto from 'node:crypto';
import { Request, Response } from 'express';

import requestDatabase from '@/database/request/empresas';
import { TypeEmpresa } from '@/types/empresas';

const { string } = zod;

class Empresa {
  async obtenerEmpresas(req: Request, res: Response): Promise<void> {
    try {
      const data = await requestDatabase.obtenerEmpresas();

      res.status(200).json({ message: 'Empresas obtenidas', data });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las empresas', error });
    }
  }

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
      await requestDatabase.crearEmpresa(data);

      res.status(200).json({ message: 'Empresa creada' });
    } catch (error) {
      res.status(400).json({ message: 'Le faltan datos a la petición', error });
    }
  }
}

const empresas = new Empresa();

export default empresas;

/*  */
