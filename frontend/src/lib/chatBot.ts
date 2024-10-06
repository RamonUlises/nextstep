import axios from 'axios';
import auth from './authServer';

const url: string = auth.editing ? auth.desarrollo : auth.produccion;

export const preguntar = async (pregunta: string) => {
  try {
    const response = await axios.post(`${url}/chatbot/preguntar`, { pregunta }, auth.options);

    return response.data.respuesta;
  } catch (error) {
    console.error('Error al realizar la pregunta', error);
  }
};
