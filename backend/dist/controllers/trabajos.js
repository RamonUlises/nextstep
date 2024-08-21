import zod from 'zod';
import crypto from 'crypto';
import requestDatabaseTrabajo from '../database/request/trabajos.js';
import { manejarError } from '../lib/errores.js';
const { string, number } = zod;
const schema = zod.object({
    'empresa': string(),
    'descripcion': string(),
    'requerimientos': string().array(),
    'fecha-publicacion': string(),
    'fecha-inicio': string(),
    'fecha-expericacion': string(),
    'contrato': string(),
    'presupuesto': number(),
    'puntos': number(),
    'etiquetas': string().array(),
    'departamentos': string().array(),
});
class Trabajos {
    async obtenerTrabajos(req, res) {
        try {
            const data = await requestDatabaseTrabajo.obtenerTrabajos();
            res.status(200).json({ message: 'Trabajos obtenidos', data });
        }
        catch (error) {
            res.status(500).json({ message: 'Error al obtener los trabajos', error });
        }
    }
    async obtenerTrabajo(req, res) {
        try {
            const { id } = req.params;
            const data = await requestDatabaseTrabajo.obtenerTrabajo(id);
            if (data.length === 0) {
                res.status(404).json({ message: 'Trabajo no encontrado' });
                return;
            }
            res.status(200).json({ message: 'Trabajo obtenido', data });
        }
        catch (error) {
            res.status(500).json({ message: 'Error al obtener el trabajo', error });
        }
    }
    async crearTrabajo(req, res) {
        try {
            const data = req.body;
            schema.parse(req.body);
            data.id = crypto.randomUUID();
            await requestDatabaseTrabajo.crearTrabajo(data);
            res.status(200).json({ message: 'Trabajo creado con éxito' });
        }
        catch (error) {
            manejarError(res, error);
        }
    }
    async actualizarTrabajo(req, res) {
        try {
            const { id } = req.params;
            const trabajo = await requestDatabaseTrabajo.obtenerTrabajo(id);
            if (trabajo.length === 0) {
                res.status(404).json({ message: 'Trabajo no encontrado' });
                return;
            }
            const data = req.body;
            schema.parse(req.body);
            await requestDatabaseTrabajo.actualizarTrabajo(id, data);
            res.status(200).json({ message: 'Trabajo actualizado con éxito' });
        }
        catch (error) {
            manejarError(res, error);
        }
    }
    async eliminarTrabajo(req, res) {
        try {
            const { id } = req.params;
            const data = await requestDatabaseTrabajo.obtenerTrabajo(id);
            if (data.length === 0) {
                res.status(404).json({ message: 'Trabajo no encontrado' });
                return;
            }
            await requestDatabaseTrabajo.eliminarTrabajo(id);
            res.status(200).json({ message: 'Trabajo eliminado con éxito' });
        }
        catch (error) {
            res.status(500).json({ message: 'Error al eliminar el trabajo', error });
        }
    }
}
const trabajos = new Trabajos();
export default trabajos;
