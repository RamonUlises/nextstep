import express, { Request, Response, NextFunction} from 'express';
import morgan, { StreamOptions } from 'morgan';
import cors from 'cors';

import info from '@router/info';
import trabajos from '@router/trabajos';
import { verifyAuth } from '@lib/verifyAuth';
import trabajadores from '@router/trabajadores';
import empresas from '@router/empresas';
import auth from '@router/auth';
import '@database/connection';

const app: express.Application = express();
const port: number | string = process.env.PORT ?? 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('dev') as express.RequestHandler<StreamOptions>);

app.use((req: Request, res: Response, next: NextFunction) => {
  const response: boolean = verifyAuth(req, res);
  if(response) next();
});

app.use('/api/trabajos', trabajos);
app.use('/api/trabajadores', trabajadores);
app.use('/api/empresas', empresas);
app.use('/api/auth', auth);
app.use('/api/info', info);

app.use((req, res) => {
  res.status(404).json({
    message: 'La ruta no existe',
    documentation: 'https://github.com/RamonUlises/nextstep/blob/main/backend/README.md',
  });
});

function createServer(): void {
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port.toString()}`);
  });
}

export default createServer;
