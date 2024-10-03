import axios from 'axios';
import auth from './authServer';
import { TypeTrabajos } from '../types/trabajos';

const url: string = auth.editing ? auth.desarrollo : auth.produccion;

class Trabajos{
  async obtenerTrabajosPorEmpresa(empresa: string): Promise<{ data: TypeTrabajos[]; status: number }> {
    try {
      const response = await axios.get(
        `${url}/trabajos/empresa/${empresa}`,
        auth.options
      );
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
  async crearTrabajo(trabajo: TypeTrabajos): Promise<{ data: TypeTrabajos; status: number }> {
    try {
      const response = await axios.post(
        `${url}/trabajos`,
        trabajo,
        auth.options
      );
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
  async obtenerTrabajosPorUsuario(usuario: string, estado: string): Promise<{ data: TypeTrabajos[]; status: number }> {
    try {
      const response = await axios.get(
        `${url}/trabajos/usuario/${usuario}?estado=${estado}`,
        auth.options
      );
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
  async obtenerTrabajosActivos(): Promise<{ data: TypeTrabajos[]; status: number }> {
    try {
      const response = await axios.get(
        `${url}/trabajos/obtener/activos`,
        auth.options
      );
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
  async obtenerTrabajo(id: string): Promise<TypeTrabajos> {
    try {
      const response = await axios.get(
        `${url}/trabajos/${id}`,
        auth.options
      );
      return response.data.data[0];
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
  async caducarTrabajo(id: string): Promise<{ data: string; status: number }> {
    try {
      const response = await axios.put(
        `${url}/trabajos/${id}/caducar`,
        {},
        auth.options
      );
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
  async finalizarTrabajo(id: string, empresa: string, puntuados: string[], saldo:number, puntos: number, titulo: string, puntuaciones?: { usuario: string; puntuacion: number }[]): Promise<{ data: string; status: number }> {
    try {
      const response = await axios.put(
        `${url}/trabajos/${id}/finalizar`,
        { saldo, puntos, puntuaciones, puntuados, empresa, titulo },
        auth.options
      );
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
}

const trabajosLib = new Trabajos();

export default trabajosLib;