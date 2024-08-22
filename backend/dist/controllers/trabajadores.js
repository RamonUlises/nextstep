import zod from 'zod';
import crypto from 'node:crypto';
import requestDatabaseTrabajador from '../database/request/trabajadores.js';
import { decrypt, encrypt } from '../lib/encripts.js';
import { manejarError } from '../lib/errores.js';
const { string } = zod;
const schema = zod.object({
    'nombres': string(),
    'usuario': string(),
    'telefono': string(),
    'email': string(),
    'contrasena': string(),
    'redes-sociales': string().array(),
    'imagen': string(),
    'descripcion': string(),
    'educacion-primaria': string(),
    'educacion-secundaria': string(),
    'titulos': string().array(),
    'idiomas': string().array(),
    'certificados': string().array(),
    'referencias': string().array(),
    'habilidades': string().array(),
});
class Trabajadores {
    async obtenerTrabajadores(req, res) {
        try {
            const data = await requestDatabaseTrabajador.obtenerTrabajadores();
            data.forEach((trabajador) => {
                trabajador.contrasena = decrypt(trabajador.contrasena);
            });
            res.status(200).json({ message: 'Trabajadores obtenidos', data });
        }
        catch (error) {
            res.status(500).json({ message: 'Error al obtener los trabajadores', error });
        }
    }
    async obtenerTrabajador(req, res) {
        try {
            const { id } = req.params;
            const data = await requestDatabaseTrabajador.obtenerTrabajador(id);
            if (data.length === 0) {
                res.status(404).json({ message: 'Trabajador no encontrado' });
                return;
            }
            data.forEach((trabajador) => {
                trabajador.contrasena = decrypt(trabajador.contrasena);
            });
            res.status(200).json({ message: 'Trabajador obtenido', data });
        }
        catch (error) {
            res.status(500).json({ message: 'Error al obtener el trabajador', error });
        }
    }
    async crearTrabajador(req, res) {
        try {
            const data = req.body;
            schema.parse(req.body);
            // Verificar que el usuario no exista
            const ress1 = await requestDatabaseTrabajador.obtenerTrabajadorPorUsuario(data.usuario);
            if (ress1.length > 0) {
                res.status(400).json({ message: 'Ya existe un trabajador registrado con este usuario' });
                return;
            }
            // Verificar que el correo no exista
            const ress2 = await requestDatabaseTrabajador.obtenerTrabajadorPorEmail(data.email);
            if (ress2.length > 0) {
                res.status(400).json({ message: 'Ya existe un trabajador registrado con este correo' });
                return;
            }
            data.id = crypto.randomUUID();
            data.contrasena = encrypt(data.contrasena);
            data.puntos = 0;
            data.puntuacion = 0;
            data.saldo = 0;
            await requestDatabaseTrabajador.crearTrabajador(data);
            res.status(200).json({ message: 'Trabajador creado con éxito' });
        }
        catch (error) {
            manejarError(res, error);
        }
    }
    async actualizarTrabajador(req, res) {
        try {
            const { id } = req.params;
            const trab = await requestDatabaseTrabajador.obtenerTrabajador(id);
            if (trab.length === 0) {
                res.status(404).json({ message: 'Trabajador no encontrado' });
                return;
            }
            const data = req.body;
            schema.parse(req.body);
            if (trab[0].usuario !== data.usuario) {
                const ress1 = await requestDatabaseTrabajador.obtenerTrabajadorPorUsuario(data.usuario);
                if (ress1.length > 0) {
                    res.status(400).json({ message: 'Ya existe un trabajador registrado con este usuario' });
                    return;
                }
            }
            if (trab[0].email !== data.email) {
                const ress2 = await requestDatabaseTrabajador.obtenerTrabajadorPorEmail(data.email);
                if (ress2.length > 0) {
                    res.status(400).json({ message: 'Ya existe un trabajador registrado con este correo' });
                    return;
                }
            }
            data.contrasena = encrypt(data.contrasena);
            await requestDatabaseTrabajador.actualizarTrabajador(id, data);
            res.status(200).json({ message: 'Trabajador actualizado con éxito' });
        }
        catch (error) {
            manejarError(res, error);
        }
    }
    async eliminarTrabajador(req, res) {
        try {
            const { id } = req.params;
            const trab = await requestDatabaseTrabajador.obtenerTrabajador(id);
            if (trab.length === 0) {
                res.status(404).json({ message: 'Trabajador no encontrado' });
                return;
            }
            await requestDatabaseTrabajador.eliminarTrabajador(id);
            res.status(200).json({ message: 'Trabajador eliminado con éxito' });
        }
        catch (error) {
            res.status(500).json({ message: 'Error al eliminar el trabajador', error });
        }
    }
}
const trabajadores = new Trabajadores();
export default trabajadores;