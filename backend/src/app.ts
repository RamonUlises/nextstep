import express, { Request, Response, NextFunction} from 'express';
import morgan, { StreamOptions } from 'morgan';
import cors from 'cors';

import info from '@router/info';
import trabajos from '@router/trabajos';
import { verifyAuth } from '@lib/verifyAuth';
import trabajadores from '@router/trabajadores';
import empresas from '@router/empresas';
import auth from '@router/auth';
import solicitudes from '@router/solicitudes';

import '@database/connection';

const app: express.Application = express();
const port: number | string = process.env.PORT ?? 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const corsOptions = {
  origin: ['https://nextstep-web.online', 'https://api.nextstep-web.online', 'http://localhost:3000', 'http://localhost:5173'],
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,  // Permitir cookies y credenciales
};

app.use(cors(corsOptions));
app.use(morgan('dev') as express.RequestHandler<StreamOptions>);

app.use((req: Request, res: Response, next: NextFunction) => {
  const response: boolean = verifyAuth(req, res);
  if(response) next();
});

app.use('/api/trabajos', trabajos);
app.use('/api/colaboradores', trabajadores);
app.use('/api/empresas', empresas);
app.use('/api/solicitudes', solicitudes);
app.use('/api/auth', auth);
app.use('/api/info', info);

app.use((req, res) => {
  res.status(404).json({
    message: 'La ruta no existe',
    documentation: 'https://github.com/RamonUlises/nextstep/blob/main/backend/README.md',
  });
});

export function createServer(): void {
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port.toString()}`);
  });
}

export default app;
