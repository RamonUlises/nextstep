import trabajadores from '../../schemas/trabajadores.js';
class RequestDatabase {
    async obtenerTrabajadores() {
        try {
            const data = await trabajadores.find();
            return data;
        }
        catch {
            throw new Error('Error al obtener los trabajadores');
        }
    }
    async obtenerTrabajador(id) {
        try {
            const data = await trabajadores.find({ id });
            return data;
        }
        catch {
            throw new Error('Error al obtener el trabajador');
        }
    }
    async crearTrabajador(data) {
        try {
            await trabajadores.create(data);
        }
        catch {
            throw new Error('Error al crear el trabajador');
        }
    }
    async actualizarTrabajador(id, data) {
        try {
            delete data.id;
            delete data.puntos;
            delete data.puntuacion;
            delete data.saldo;
            await trabajadores.updateOne({ id }, data);
        }
        catch {
            throw new Error('Error al actualizar el trabajador');
        }
    }
    async eliminarTrabajador(id) {
        try {
            await trabajadores.deleteOne({ id });
        }
        catch {
            throw new Error('Error al eliminar el trabajador');
        }
    }
    async obtenerTrabajadorPorEmail(email) {
        try {
            const data = await trabajadores.find({ email });
            return data;
        }
        catch {
            throw new Error('Error al obtener el trabajador');
        }
    }
    async obtenerTrabajadorPorUsuario(usuario) {
        try {
            const data = await trabajadores.find({ usuario });
            return data;
        }
        catch {
            throw new Error('Error al obtener el trabajador');
        }
    }
}
const requestDatabase = new RequestDatabase();
export default requestDatabase;
