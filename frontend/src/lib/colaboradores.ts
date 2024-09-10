import axios from 'axios';
import auth from './authServer';
import { TypeColaboradores } from '../types/colaboradores';

const url: string = auth.editing ? auth.desarrollo : auth.produccion;

class Colaboradores {
  async agregarColaborador(colaborador: TypeColaboradores) {
    const response = await axios.post(
      `${url}/colaboradores`,
      colaborador,
      auth.options
    );
    return { data: response.data, status: response.status };
  }
}

const colaborador = new Colaboradores();

export default colaborador;
