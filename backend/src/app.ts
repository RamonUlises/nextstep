import express from 'express';
import '@database/verifyIp';

const app: express.Application = express();
const port: number | string = process.env.PORT ?? 3000;

export default function createServer(): void{
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port.toString()}`);
  });
};

