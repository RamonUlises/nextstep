import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import trabajos from './router/trabajos.js';
import trabajadores from './router/trabajadores.js';
import empresas from './router/empresas.js';
import './database/connection.js';
import { verifyAuth } from './lib/verifyAuth.js';
const app = express();
const port = process.env.PORT ?? 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use((req, res, next) => {
    const response = verifyAuth(req, res);
    if (response)
        next();
});
app.use('/api/trabajos', trabajos);
app.use('/api/trabajadores', trabajadores);
app.use('/api/empresas', empresas);
app.use((req, res) => {
    res.status(404).json({
        message: 'La ruta no existe',
        documentation: 'https://github.com/RamonUlises/nextstep/blob/main/backend/README.md',
    });
});
export default function createServer() {
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port.toString()}`);
    });
}
