import { ErrorZodType } from '@/types/errorZod';
import { Response } from 'express';

export const manejarError = (res: Response, error: ErrorZodType): void => {
  const response: { propiedad: string; mensaje: string, recibido: string  }[] = [];

  error.issues.forEach((issue) => {
    response.push({
      propiedad: issue.path.join('.'),
      mensaje: issue.message,
      recibido: issue.received,
    });
  });

  res.status(400).json({ error: response });
};
