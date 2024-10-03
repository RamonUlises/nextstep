import axios from 'axios';
import auth from './authServer';
import { TypeEmpresa } from '../types/empresas';

const url: string = auth.editing ? auth.desarrollo : auth.produccion;

class Empresas {
  // Obtiene todas las empresas
  async obtenerEmpresas(): Promise<{ data: TypeEmpresa[]; status: number }> {
    try {
      const response = await axios.get(`${url}/empresas`, auth.options);
      return { data: response.data.data, status: response.status };
    } catch (error) {
      if (error && typeof error === 'object' && 'response' in error) {
        const err = error as { response: { data: string[]; status: number } };
        throw { data: err.response.data, status: err.response.status };
      } else if (error instanceof Error) {
        throw { data: error.message, status: 500 };
      } else {
        throw { data: 'Error desconocido', status: 500 };
      }
    }
  }
  async obtenerEmpresa(
    id: string
  ): Promise<{ data: TypeEmpresa; status: number }> {
    const response = await axios.get(`${url}/empresas/${id}`, auth.options);
    return { data: response.data.data[0], status: response.status };
  }
  // Crea una empresa
  async crearEmpresa(
    empresa: TypeEmpresa
  ): Promise<{ data: string; status: number }> {
    try {
      if (empresa['sitio-web'] === '') {
        empresa['sitio-web'] = 'sin-sitio-web';
      }

      const response = await axios.post(
        `${url}/empresas`,
        empresa,
        auth.options
      );
      return { data: response.data, status: response.status };
    } catch (error) {
      if (error && typeof error === 'object' && 'response' in error) {
        const err = error as { response: { data: string[]; status: number } };
        throw { data: err.response.data, status: err.response.status };
      } else if (error instanceof Error) {
        throw { data: error.message, status: 500 };
      } else {
        throw { data: 'Error desconocido', status: 500 };
      }
    }
  }
  // Aceptar empresa
  async aceptarEmpresa(id: string, email: string) {
    try {
      const response = await axios.put(
        `${url}/empresas/aceptar/${id}`,
        { email },
        auth.options
      );
      return { data: response.data, status: response.status };
    } catch (error) {
      if (error && typeof error === 'object' && 'response' in error) {
        const err = error as { response: { data: string[]; status: number } };
        throw { data: err.response.data, status: err.response.status };
      } else if (error instanceof Error) {
        throw { data: error.message, status: 500 };
      } else {
        throw { data: 'Error desconocido', status: 500 };
      }
    }
  }
  async actualizarImagen2(id: string, imagen: string) {
    try {
      const response = await axios.put(
        `${url}/empresas/imagen-2/${id}`,
        { imagen },
        auth.options
      );
      return { data: response.data, status: response.status };
    } catch (error) {
      if (error && typeof error === 'object' && 'response' in error) {
        const err = error as { response: { data: string[]; status: number } };
        throw { data: err.response.data, status: err.response.status };
      } else if (error instanceof Error) {
        throw { data: error.message, status: 500 };
      } else {
        throw { data: 'Error desconocido', status: 500 };
      }
    }
  }
  async eliminarEmpresa(id: string) {
    try {
      const response = await axios.delete(
        `${url}/empresas/${id}`,
        auth.options
      );
      return { data: response.data, status: response.status };
    } catch (error) {
      if (error && typeof error === 'object' && 'response' in error) {
        const err = error as { response: { data: string[]; status: number } };
        throw { data: err.response.data, status: err.response.status };
      } else if (error instanceof Error) {
        throw { data: error.message, status: 500 };
      } else {
        throw { data: 'Error desconocido', status: 500 };
      }
    }
  }
  async editarEmpresa(
    id: string,
    empresa: TypeEmpresa
  ): Promise<{ data: string; status: number }> {
    try {
      if (empresa['sitio-web'] === '') {
        empresa['sitio-web'] = 'sin-sitio-web';
      }

      const response = await axios.put(
        `${url}/empresas/${id}`,
        empresa,
        auth.options
      );
      return { data: response.data, status: response.status };
    } catch (error) {
      if (error && typeof error === 'object' && 'response' in error) {
        const err = error as { response: { data: string[]; status: number } };
        throw { data: err.response.data, status: err.response.status };
      } else if (error instanceof Error) {
        throw { data: error.message, status: 500 };
      } else {
        throw { data: 'Error desconocido', status: 500 };
      }
    }
  }
  async cambiarContrasena(
    id: string,
    contrasenaNueva: string,
    contrasenaAntigua: string
  ) {
    try {
      const response = await axios.put(
        `${url}/empresas/contrasena/${id}`,
        { contrasenaNueva, contrasenaAntigua },
        auth.options
      );
      return { data: response.data, status: response.status };
    } catch (error) {
      if (error && typeof error === 'object' && 'response' in error) {
        const err = error as { response: { data: string[]; status: number } };
        throw { data: err.response.data, status: err.response.status };
      } else if (error instanceof Error) {
        throw { data: error.message, status: 500 };
      } else {
        throw { data: 'Error desconocido', status: 500 };
      }
    }
  }
  async cambiarContrasenaPerdida(id: string, contrasena: string) {
    try {
      const response = await axios.put(
        `${url}/empresas/contrasena-perdida/${id}`,
        { contrasena },
        auth.options
      );
      return { data: response.data, status: response.status };
    } catch (error) {
      if (error && typeof error === 'object' && 'response' in error) {
        const err = error as { response: { data: string[]; status: number } };
        throw { data: err.response.data, status: err.response.status };
      } else if (error instanceof Error) {
        throw { data: error.message, status: 500 };
      } else {
        throw { data: 'Error desconocido', status: 500 };
      }
    }
  }
  async subirNivel(id: string, nivel: number) {
    try {
      const response = await axios.put(
        `${url}/empresas/subir-nivel/${id}`,
        {
          nivel,
        },
        auth.options
      );
      return { data: response.data, status: response.status };
    } catch (error) {
      if (error && typeof error === 'object' && 'response' in error) {
        const err = error as { response: { data: string[]; status: number } };
        throw { data: err.response.data, status: err.response.status };
      } else if (error instanceof Error) {
        throw { data: error.message, status: 500 };
      } else {
        throw { data: 'Error desconocido', status: 500 };
      }
    }
  }
  async calificarEmpresa(id: string, puntuacion: number, idCalificacion: string ){
    try {
      const response = await axios.put(
        `${url}/empresas/calificar/${id}`,
        { puntuacion, idCalificacion },
        auth.options
      );
      return { data: response.data, status: response.status };
    } catch (error) {
      if (error && typeof error === 'object' && 'response' in error) {
        const err = error as { response: { data: string[]; status: number } };
        throw { data: err.response.data, status: err.response.status };
      } else if (error instanceof Error) {
        throw { data: error.message, status: 500 };
      } else {
        throw { data: 'Error desconocido', status: 500 };
      }
    }
  }
}

const empresas = new Empresas();

export default empresas;
