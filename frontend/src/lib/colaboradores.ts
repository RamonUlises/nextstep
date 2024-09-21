import axios from 'axios';
import auth from './authServer';
import { TypeColaboradores } from '../types/colaboradores';

const url: string = auth.editing ? auth.desarrollo : auth.produccion;

class Colaboradores {
  async agregarColaborador(colaborador: TypeColaboradores) {
    try {
      const response = await axios.post(
        `${url}/colaboradores`,
        colaborador,
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
        `${url}/colaboradores/contrasena-perdida/${id}`,
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
  async actualizarImagen2(id: string, imagen: string) {
    try {
      const response = await axios.put(
        `${url}/colaboradores/imagen-2/${id}`,
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
  async eliminarColaborador(id: string) {
    try {
      const response = await axios.delete(
        `${url}/colaboradores/${id}`,
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
  async cambiarContrasena(id: string, contrasenaNueva: string, contrasenaAntigua: string) {
    try {
      const response = await axios.put(
        `${url}/colaboradores/contrasena/${id}`,
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
}

const colaborador = new Colaboradores();

export default colaborador;
