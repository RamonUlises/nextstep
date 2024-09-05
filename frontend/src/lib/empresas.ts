import axios from 'axios';
import auth from './authServer';
import { TypeEmpresa } from '../types/empresas';

const url: string = auth.editing ? auth.desarrollo : auth.produccion;

class Empresas {
  async obtenerEmpresas(): Promise<{ data: TypeEmpresa[]; status: number }> {
    const response = await axios.get<TypeEmpresa[]>(`${url}/empresas`, auth.options);
    return { data: response.data, status: response.status };
  }
  async obtenerEmpresa(id: string): Promise<{ data: TypeEmpresa; status: number }> {
    const response = await axios.get<TypeEmpresa>(`${url}/empresas/${id}`, auth.options);
    return { data: response.data, status: response.status };
  }
  async crearEmpresa(empresa: TypeEmpresa): Promise<{ data: TypeEmpresa; status: number }> {
    const response = await axios.post<TypeEmpresa>(`${url}/empresas`, empresa, auth.options);
    return { data: response.data, status: response.status };
  }
}

const empresas = new Empresas();

export default empresas;