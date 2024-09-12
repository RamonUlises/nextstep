import { TypeAuth } from '@/types/auth';
import { Request, Response } from 'express';
import authDataBase from '@/database/request/auth';
import { decrypt } from '@/lib/encripts';

class Auth {
  async login(req: Request, res: Response) {
    try {
      const { email, password }: TypeAuth = req.body as TypeAuth;

      const { empresa, trabajador } = await authDataBase.login(email);

      if (empresa.length === 0 && trabajador.length === 0) {
        res.status(404).json({ message: 'Email no registrado' });
        return;
      }

      empresa.forEach(empre => {
        if (empre.contrasena) {
          empre.contrasena = decrypt(empre.contrasena);
        }
      });

      if(empresa.length > 0){
        if(empresa[0].contrasena !== password) {
          res.status(400).json({ message: 'Contraseña incorrecta' });
          return;
        }
      }

      trabajador.forEach(trab => {
        trab.contrasena = decrypt(trab.contrasena);
      });

      if(trabajador.length > 0){
        if(trabajador[0].contrasena !== password) {
          res.status(400).json({ message: 'Contraseña incorrecta' });
          return;
        }
      }
      
      const id = empresa.length > 0 ? empresa[0].id : trabajador[0].id;
      
      res.status(200).json({ message: 'Login correcto', id }); 
    } catch (error) {
      res.status(500).json({ message: 'Error en el servidor', error });
      console.log(error);
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
  };
}

const auth = new Auth();

export default auth;
