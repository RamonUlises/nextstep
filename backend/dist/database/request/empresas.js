import empresas from '../../schemas/empresas.js';
class RequesDatabase {
    async obtenerEmpresas() {
        try {
            const data = await empresas.find();
            return data;
        }
        catch {
            throw new Error('Error al obtener las empresas');
        }
    }
    async obtenerEmpresa(id) {
        try {
            const data = await empresas.find({ id });
            return data;
        }
        catch (error) {
            console.log(error);
            throw new Error('Error al obtener la empresa');
        }
    }
    async crearEmpresa(data) {
        try {
            await empresas.create(data);
        }
        catch {
            throw new Error('Error al crear la empresa');
        }
    }
    async actualizarEmpresa(id, data) {
        try {
            delete data.id;
            await empresas.updateOne({ id }, data);
        }
        catch {
            throw new Error('Error al actualizar la empresa');
        }
    }
    async eliminarEmpresa(id) {
        try {
            await empresas.deleteOne({ id });
        }
        catch {
            throw new Error('Error al eliminar la empresa');
        }
    }
    async obtenerEmpresaPorEmail(email) {
        try {
            const data = await empresas.find({ email });
            return data;
        }
        catch {
            throw new Error('Error al obtener la empresa');
        }
    }
}
const requestDatabase = new RequesDatabase();
export default requestDatabase;
