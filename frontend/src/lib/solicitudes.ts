import { TypeSolicitudes } from '@/types/solicitudes';
import axios from 'axios';
import auth from './authServer';

const url = auth.editing ? auth.desarrollo : auth.produccion;

class Solicitudes {
  async crearSolicitud(solicitud: TypeSolicitudes) {
    try {
      const response = await axios.post(
        `${url}/solicitudes`,
        solicitud,
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
  async obtenerSolicitud(id: string, idColaborador?: string) {
    try {
      let peticion = '';

      if (idColaborador) {
        peticion = `${url}/solicitudes/${id}?colaborador=${idColaborador}`;
      } else {
        peticion = `${url}/solicitudes/${id}`;
      }

      const response = await axios.get(peticion, auth.options);
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
  async obtenerSolicitudesEmpesa(id: string){
    try {
      const response = await axios.get(`${url}/solicitudes/empresa/${id}`, auth.options);
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
  async actualizarEstadoSolicitud(id: string, estado: string, idTrabajo: string, usuario: string) {
    try {
      const response = await axios.put(
        `${url}/solicitudes/estado/${id}`,
        { estado, idTrabajo, usuario },
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
  async obtenerSolicitudesTrabajador(id: string){
    try {
      const response = await axios.get(`${url}/solicitudes/colaborador/${id}`, auth.options);
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
  async obtenerCalificaciones(usuario: string){
    try {
      const response = await axios.get(`${url}/solicitudes/calificaciones/${usuario}`, auth.options);
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

const solicitudes = new Solicitudes();

export default solicitudes;
