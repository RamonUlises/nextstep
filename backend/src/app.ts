import express from 'express';
import cors from 'cors';
import morgan, { StreamOptions } from 'morgan';
import trabajos from '@router/trabajos';
import trabajadores from '@router/trabajadores';
import empresas from '@router/empresas';
import '@database/verifyIp';

const app: express.Application = express();
const port: number | string = process.env.PORT ?? 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('dev') as express.RequestHandler<StreamOptions>);

app.use('/trabajos', trabajos);
app.use('/trabajadores', trabajadores);
app.use('/empresas', empresas);

export default function createServer(): void {
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port.toString()}`);
  });
}
