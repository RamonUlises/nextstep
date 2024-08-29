import axios from 'axios';
import auth from './authServer';
import { TypeEmpresa } from '../types/empresas';

const url: string = 'https://nextstep-gpli.onrender.com/api';
const options: { headers: { 'Content-Type': string }; auth: { username: string; password: string } } = {
  headers: {
    'Content-Type': 'application/json',
  },
  auth: {
    username: auth.username,
    password: auth.password,
  }
};

class Empresas {
  async obtenerEmpresas(): Promise<{ data: TypeEmpresa[]; status: number }> {
    const response = await axios.get<TypeEmpresa[]>(`${url}/empresas`, options);
    return { data: response.data, status: response.status };
  }
  async obtenerEmpresa(id: string): Promise<{ data: TypeEmpresa; status: number }> {
    const response = await axios.get<TypeEmpresa>(`${url}/empresas/${id}`, options);
    return { data: response.data, status: response.status };
  }
  async crearEmpresa(empresa: TypeEmpresa): Promise<{ data: TypeEmpresa; status: number }> {
    const response = await axios.post<TypeEmpresa>(`${url}/empresas`, empresa, options);
    return { data: response.data, status: response.status };
  }
}

const empresas = new Empresas();

export default empresas;