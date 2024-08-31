import axios from 'axios';
import authA from './authServer';

const url: string = authA.editing ? authA.desarrollo : authA.produccion;

export async function auth(user: {
  email: string;
  password: string;
}): Promise<{ data: { message: string; id: string}; status: number; }> {
  try {
    const response = await axios.post(`${url}/auth/login`, { email: user.email, password: user.password} ,authA.options);

    return { data: response.data, status: response.status };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return { data: error.response.data, status: error.response.status };
    } else {
      return { data: { message: 'Unknown error', id: 'undefined' }, status: 500 };
    }
  }
}
