import axios from 'axios';
import auth from './authServer';
import { TypeEmpresa } from '../../types/empresas';
import { TypeTrabajadores } from '../../types/trabajadores';

const url = auth.editing ? auth.desarrollo : auth.produccion;

export const obtenerInfo = async (id: string): Promise<{ data: TypeEmpresa[] | TypeTrabajadores[]; status:number }> => {
  try{
    const response = await axios.get(`${url}/info/${id}`, auth.options);

    return { data: response.data, status: response.status };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return { data: error.response.data, status: error.response.status };
    } else {
      return { data: [], status: 500 };
    }
  }
};