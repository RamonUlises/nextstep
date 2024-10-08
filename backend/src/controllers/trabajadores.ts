import zod from 'zod';
import crypto from 'node:crypto';
import requestDatabaseTrabajador from '@/database/request/trabajadores';
import { Request, Response } from 'express';
import { TypeTrabajadores } from '@/types/trabajadores';
import { decrypt, encrypt } from '@/lib/encripts';
import { manejarError } from '@/lib/errores';
import { ErrorZodType } from '@/types/errorZod';
import { TypeEmpresa } from '@/types/empresas';
import requestDatabaseEmpresas from '@/database/request/empresas';

const { string, boolean, } = zod;

const schema = zod.object({
  'nombres': string(),
  'usuario': string(),
  'telefono': string(),
  'email': string(),
  'contrasena': string(),
  'redes-sociales': string().array(),
  'imagen': string(),
  'descripcion': string(),
  'educacion-primaria': boolean(),
  'educacion-secundaria': boolean(),
  'titulos': string().array(),
  'idiomas': string().array(),
  'certificados': string().array(),
  'referencias': string().array(),
  'habilidades': string().array(),
  'imagen-2': string().optional(),
});

class Trabajadores {
  async obtenerTrabajadores(req: Request, res: Response) {
    try {
      const data: TypeTrabajadores[] = await requestDatabaseTrabajador.obtenerTrabajadores();

      res.status(200).json({ message: 'Trabajadores obtenidos', data });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los trabajadores', error });
    }
  }
  async obtenerTrabajador(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: TypeTrabajadores[] = await requestDatabaseTrabajador.obtenerTrabajador(id);

      if(data.length === 0) {
        res.status(404).json({ message: 'Trabajador no encontrado' });
        return;
      }

      res.status(200).json({ message: 'Trabajador obtenido', data });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el trabajador', error });
    }
  }
  async crearTrabajador(req: Request, res: Response) {
    try {
      const data: TypeTrabajadores = req.body as TypeTrabajadores;

      schema.parse(req.body);

      // Verificar que el usuario no exista
      const ress1: TypeTrabajadores[] = await requestDatabaseTrabajador.obtenerTrabajadorPorUsuario(data.usuario);

      if(ress1.length > 0) {
        res.status(400).json({ message: 'Ya existe un trabajador registrado con este usuario' });
        return;
      }

      // Verificar que el correo no exista
      const  ress2: TypeTrabajadores[] = await requestDatabaseTrabajador.obtenerTrabajadorPorEmail(data.email);

      if(ress2.length > 0) {
        res.status(400).json({ message: 'Ya existe un trabajador registrado con este correo' });
        return;
      } 

      const ress3: TypeEmpresa[] = await requestDatabaseEmpresas.obtenerEmpresaPorEmail(data.email);

      if(ress3.length > 0) {
        res.status(400).json({ message: 'Ya existe una empresa registrada con este correo' });
        return;
      }

      data.id = crypto.randomUUID();
      if (data.contrasena) {
        data.contrasena = encrypt(data.contrasena);
      } else {
        throw new Error('La contraseña no puede estar vacía');
      }

      data.puntos = 0;
      data.puntuacion = 0;
      data.saldo = 0;
      await requestDatabaseTrabajador.crearTrabajador(data);

      res.status(200).json({ message: 'Trabajador creado con éxito' });
    } catch (error) {
      manejarError(res, error as ErrorZodType);
    }
  }
  async actualizarTrabajador(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const trab: TypeTrabajadores[] = await requestDatabaseTrabajador.obtenerTrabajador(id);

      if(trab.length === 0) {
        res.status(404).json({ message: 'Trabajador no encontrado' });
        return;
      }

      const data: TypeTrabajadores = req.body as TypeTrabajadores;

      schema.parse(req.body);

      if(trab[0].usuario !== data.usuario) {
        const ress1: TypeTrabajadores[] = await requestDatabaseTrabajador.obtenerTrabajadorPorUsuario(data.usuario);

        if(ress1.length > 0) {
          res.status(400).json({ message: 'Ya existe un trabajador registrado con este usuario' });
          return;
        }
      }

      if(trab[0].email !== data.email) {
        const ress2: TypeTrabajadores[] = await requestDatabaseTrabajador.obtenerTrabajadorPorEmail(data.email);

        if(ress2.length > 0) {
          res.status(400).json({ message: 'Ya existe un trabajador registrado con este correo' });
          return;
        }
      }

      const ress3: TypeEmpresa[] = await requestDatabaseEmpresas.obtenerEmpresaPorEmail(data.email);

      if(ress3.length > 0) {
        res.status(400).json({ message: 'Ya existe una empresa registrada con este correo' });
        return;
      }

      delete data.contrasena;
      await requestDatabaseTrabajador.actualizarTrabajador(id, data);

      res.status(200).json({ message: 'Trabajador actualizado con éxito' });
    } catch (error) {
      manejarError(res, error as ErrorZodType);
    }
  }
  async eliminarTrabajador(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const trab: TypeTrabajadores[] = await requestDatabaseTrabajador.obtenerTrabajador(id);

      if(trab.length === 0) {
        res.status(404).json({ message: 'Trabajador no encontrado' });
        return;
      }

      await requestDatabaseTrabajador.eliminarTrabajador(id);

      res.status(200).json({ message: 'Trabajador eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el trabajador', error });
    }
  }
  async cambiarContrasenaPerdida(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const { contrasena } = req.body as { contrasena: string };

      await requestDatabaseTrabajador.cambiarContrasena(id, encrypt(contrasena));

      res.status(200).json({ message: 'Contraseña cambiada con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al cambiar la contraseña', error });
    }
  }
  async actualizarImagen2(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { imagen } = req.body as { imagen: string };

      const data: TypeTrabajadores[] = await requestDatabaseTrabajador.obtenerTrabajador(id);

      if(data.length === 0) {
        res.status(404).json({ message: 'Trabajador no encontrado' });
        return;
      }

      console.log(imagen);
      await requestDatabaseTrabajador.actualizarImagen2(id, imagen);

      res.status(200).json({ message: 'Imagen actualizada con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la imagen', error });
    }
  }
  async cambiarContrasena(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { contrasenaNueva, contrasenaAntigua } = req.body as { contrasenaNueva: string; contrasenaAntigua: string };

      console.log(contrasenaAntigua);

      const data: TypeTrabajadores[] = await requestDatabaseTrabajador.obtenerTrabajador(id);

      if(data.length === 0) {
        res.status(404).json({ message: 'Trabajador no encontrado' });
        return;
      }

      const contraAntigua = data[0].contrasena ? decrypt(data[0].contrasena) : '';

      if(contraAntigua !== contrasenaAntigua) {
        res.status(400).json({ message: 'Contraseña antigua incorrecta' });
        return;
      }

      await requestDatabaseTrabajador.cambiarContrasena(id, encrypt(contrasenaNueva));

      res.status(200).json({ message: 'Contraseña cambiada con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al cambiar la contraseña', error });
    }
  }
}

const trabajadores = new Trabajadores();

export default trabajadores;