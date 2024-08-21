import trabajos from '../../schemas/trabajos.js';
class RequesDatabase {
    async obtenerTrabajos() {
        try {
            const data = await trabajos.find();
            return data;
        }
        catch {
            throw new Error('Error al obtener los trabajos');
        }
    }
    async obtenerTrabajo(id) {
        try {
            const data = await trabajos.find({ id });
            return data;
        }
        catch {
            throw new Error('Error al obtener el trabajo');
        }
    }
    async crearTrabajo(data) {
        try {
            await trabajos.create(data);
        }
        catch {
            throw new Error('Error al crear el trabajo');
        }
    }
    async actualizarTrabajo(id, data) {
        try {
            delete data.id;
            await trabajos.updateOne({ id }, data);
        }
        catch {
            throw new Error('Error al actualizar el trabajo');
        }
    }
    async eliminarTrabajo(id) {
        try {
            await trabajos.deleteOne({ id });
        }
        catch {
            throw new Error('Error al eliminar el trabajo');
        }
    }
}
const requestDatabase = new RequesDatabase();
export default requestDatabase;
