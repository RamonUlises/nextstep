import authDataBase from '../database/request/auth.js';
import { decrypt } from '../lib/encripts.js';
class Auth {
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const { empresa, trabajador } = await authDataBase.login(email);
            if (empresa.length === 0 && trabajador.length === 0) {
                res.status(404).json({ message: 'Email no registrado' });
                return;
            }
            empresa.forEach(empre => {
                if (empre.contrasena) {
                    empre.contrasena = decrypt(empre.contrasena);
                }
            });
            if (empresa.length > 0) {
                if (empresa[0].contrasena !== password) {
                    res.status(400).json({ message: 'Contraseña incorrecta' });
                    return;
                }
            }
            trabajador.forEach(trab => {
                trab.contrasena = decrypt(trab.contrasena);
            });
            if (trabajador.length > 0) {
                if (trabajador[0].contrasena !== password) {
                    res.status(400).json({ message: 'Contraseña incorrecta' });
                    return;
                }
            }
            res.status(200).json({ message: 'Login correcto' });
        }
        catch (error) {
            res.status(500).json({ message: 'Error en el servidor', error });
        }
    }
}
const auth = new Auth();
export default auth;
