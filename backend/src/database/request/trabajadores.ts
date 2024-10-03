import { TypeTrabajadores } from '@/types/trabajadores';
import trabajadores from '@schemas/trabajadores';

class RequestDatabase {
  async obtenerTrabajadores(): Promise<TypeTrabajadores[]> {
    try {
      const data = await trabajadores.find();
      return data;
    } catch {
      throw new Error('Error al obtener los trabajadores');
    }
  }
  async obtenerTrabajador(id: string): Promise<TypeTrabajadores[]> {
    try {
      const data = await trabajadores.find({ id });
      return data;
    } catch {
      throw new Error('Error al obtener el trabajador');
    }
  }
  async crearTrabajador(data: TypeTrabajadores): Promise<void> {
    try {
      await trabajadores.create(data);
    } catch {
      throw new Error('Error al crear el trabajador');
    }
  }
  async actualizarTrabajador( id: string, data: Partial<TypeTrabajadores> ): Promise<void> {
    try {
      delete data.id;
      delete data.puntos;
      delete data.puntuacion;
      delete data.saldo;
      await trabajadores.updateOne({ id }, data);
    } catch {
      throw new Error('Error al actualizar el trabajador');
    }
  }
  async eliminarTrabajador(id: string): Promise<void> {
    try {
      await trabajadores.deleteOne({ id });
    } catch {
      throw new Error('Error al eliminar el trabajador');
    }
  }
  async obtenerTrabajadorPorEmail(email: string): Promise<TypeTrabajadores[]> {
    try {
      const data = await trabajadores.find({ email });
      return data;
    } catch {
      throw new Error('Error al obtener el trabajador');
    }
  }
  async obtenerTrabajadorPorUsuario(usuario: string): Promise<TypeTrabajadores[]> {
    try {
      const data = await trabajadores.find({ usuario });
      return data;
    } catch {
      throw new Error('Error al obtener el trabajador');
    }
  }
  async cambiarContrasena(id: string, contrasena: string): Promise<void> {
    try {
      await trabajadores.updateOne({ id }, { contrasena });
    } catch {
      throw new Error('Error al cambiar la contraseña');
    }
  }
  async actualizarImagen2(id: string, imagen: string): Promise<void> {
    try {
      await trabajadores.updateOne({ id }, { 'imagen-2': imagen });
    } catch {
      throw new Error('Error al actualizar la imagen');
    }
  }
  async actualizarPuntuacion(usuario: string, puntuacionn: number, puntoss: number, saldoo: number): Promise<void> {
    try {
      const trabajador: TypeTrabajadores[] = await trabajadores.find({ usuario });

      if (trabajador.length === 0) {
        throw new Error('Trabajador no encontrado');
      }

      const puntuacion = trabajador[0].puntuacion + puntuacionn;
      const puntuados = trabajador[0].puntuados + 1;
      const puntos = trabajador[0].puntos + puntoss;
      const saldo = trabajador[0].saldo + saldoo;

      await trabajadores.updateOne({ usuario }, { puntuacion, puntuados, puntos, saldo });
    } catch {
      throw new Error('Error al actualizar la puntuación');
    }
  }
}

const requestDatabase = new RequestDatabase();

export default requestDatabase;
