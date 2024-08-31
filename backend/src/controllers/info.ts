import requestDatabase from '@/database/request/info';
import { Request, Response } from 'express';

class Info {
  async obtenerInfo(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params as { id: string };
      const info = await requestDatabase.obtenerInfo(id);

      if (info.length > 0) {
        res.status(200).json(info);
      } else {
        res.status(404).json({ message: 'No se encontró la información' });
      }
    } catch {
      res.status(500).json({ message: 'Error al obtener la información' });
    }
  }
}

const info = new Info();

export default info;
