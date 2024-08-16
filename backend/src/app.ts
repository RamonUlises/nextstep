import express from 'express';
import cors from 'cors';
import morgan, { StreamOptions } from 'morgan';
import trabajos from '@router/trabajos';
import trabajadores from '@router/trabajadores';
import empresas from '@router/empresas';
import '@database/connection';
//import { verifyAuth } from '@lib/verifyAuth';

const app: express.Application = express();
const port: number | string = process.env.PORT ?? 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('dev') as express.RequestHandler<StreamOptions>);

// app.use((req: Request, res: Response, next: NextFunction) => {
//   const response: boolean = verifyAuth(req, res);
//   if(response) next();
// });

app.use('/api/trabajos', trabajos);
app.use('/api/trabajadores', trabajadores);
app.use('/api/empresas', empresas);

app.use((req, res) => {
  res.status(404).json({
    message: 'La ruta no existe',
    documentation: 'https://github.com/RamonUlises/Startup-pixels',
  });
});

export default function createServer(): void {
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port.toString()}`);
  });
}
