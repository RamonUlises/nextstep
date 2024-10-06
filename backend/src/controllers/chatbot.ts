import { Request, Response } from 'express';
import { preguntasRespuestas } from '@/lib/preguntas';
import { wikipedia } from '@/lib/wikipedia';

function normalizarTexto(text: string) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[¿?]/g, '')
    .trim()
    .toLowerCase();
}

export const preguntar = async (req: Request, res: Response) => {
  const { pregunta } = req.body as { pregunta: string };

  if(!pregunta) {
    return res.status(400).json({ error: 'Debes enviar una pregunta' });
  }

  const textoNormalizado = normalizarTexto(pregunta);

  console.log(textoNormalizado);
  for(const [clave, respuesta] of Object.entries(preguntasRespuestas)) {
    if(textoNormalizado.includes(clave)){
      return res.status(200).json({ respuesta });
    }
  }

  const response = await wikipedia(pregunta);

  res.status(200).json({ respuesta: response });
};
