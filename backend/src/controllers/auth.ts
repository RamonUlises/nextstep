import { TypeAuth } from '@/types/auth';
import { Request, Response } from 'express';
import authDataBase from '@/database/request/auth';
import { decrypt } from '@/lib/encripts';
import { enviarCorreoRecoverPassword } from '@/lib/enviarCorreo';
import { generarCodigo } from '@/lib/token';

class Auth {
  async login(req: Request, res: Response) {
    try {
      const { email, password }: TypeAuth = req.body as TypeAuth;

      const { empresa, trabajador } = await authDataBase.login(email);

      if (empresa.length === 0 && trabajador.length === 0) {
        res.status(404).json({ message: 'Email no registrado' });
        return;
      }

      empresa.forEach((empre) => {
        if (empre.contrasena) {
          empre.contrasena = decrypt(empre.contrasena);
        }
      });

      if (empresa.length > 0) {
        if (!empresa[0].verificado) {
          res.status(400).json({ message: 'Empresa no verificada' });
          return;
        }

        if (empresa[0].contrasena !== password) {
          res.status(400).json({ message: 'Contraseña incorrecta' });
          return;
        }
      }

      trabajador.forEach((trab) => {
        if (trab.contrasena) {
          trab.contrasena = decrypt(trab.contrasena);
        }
      });

      if (trabajador.length > 0) {
        if (trabajador[0].contrasena !== password) {
          res.status(400).json({ message: 'Contraseña incorrecta' });
          return;
        }
      }

      const id = empresa.length > 0 ? empresa[0].id : trabajador[0].id;

      res.status(200).json({ message: 'Login correcto', id });
    } catch (error) {
      res.status(500).json({ message: 'Error en el servidor', error });
    }
  }
  accessAdmin(req: Request, res: Response) {
    const { contrasena } = req.body as { contrasena: string };
    const pass = process.env.PASSWORD_ADMINISTRATOR;
    if (contrasena !== pass) {
      res.status(400).json({ message: 'Contraseña incorrecta' });
      return;
    }

    res.status(200).json({ message: 'Login correcto' });
  }
  async recoverPassword(req: Request, res: Response) {
    try {
      const { email } = req.body as { email: string };

      const { empresa, trabajador } = await authDataBase.recoverPassword(email);

      if (empresa.length === 0 && trabajador.length === 0) {
        res.status(404).json({ message: 'Email no registrado' });
        return;
      }

      let type = '';
      let id = '';

      if (empresa.length > 0) {
        type = 'empresa';
        id = empresa[0].id;
      } else {
        type = 'colaborador';
        id = trabajador[0].id;
      }

      const token = generarCodigo();

      const response = await enviarCorreoRecoverPassword(email, token);

      if (!response) {
        res.status(500).json({ message: 'Error al enviar el correo' });
        return;
      }

      res
        .status(200)
        .json({ message: `Correo enviado a ${email}`, type, token, id });
    } catch (error) {
      res.status(500).json({ message: 'Error en el servidor', error });
    }
  }
}

const auth = new Auth();

export default auth;
