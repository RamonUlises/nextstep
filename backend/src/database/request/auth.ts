import empresas from '@/schemas/empresas';
import { TypeEmpresa } from '@/types/empresas';
import { TypeTrabajadores } from '@/types/trabajadores';

class Auth {
  async login(email: string) {
    try {
      const empresa: TypeEmpresa[] = await empresas.find({ email });
      const trabajador: TypeTrabajadores[] = await empresas.find({ email });

      return { empresa, trabajador };
    } catch {
      throw new Error('Error en el servidor');
    }
  }
}

const auth = new Auth();

export default auth;
