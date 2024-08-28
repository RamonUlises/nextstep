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

(() => {
  async function obtenerEmpresas(): Promise<{ data: TypeEmpresa[]; status: number }> {
    const response = await axios.get<TypeEmpresa[]>(`${url}/empresas`, options);

    return { data: response.data, status: response.status };
  }

  window.empresas = {
    obtenerEmpresas,
  };
})();
