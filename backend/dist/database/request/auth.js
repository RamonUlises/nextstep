import empresas from '../../schemas/empresas.js';
import trabajadores from '../../schemas/trabajadores.js';
class Auth {
    async login(email) {
        try {
            const empresa = await empresas.find({ email });
            const trabajador = await trabajadores.find({ email });
            return { empresa, trabajador };
        }
        catch {
            throw new Error('Error en el servidor');
        }
    }
}
const auth = new Auth();
export default auth;
