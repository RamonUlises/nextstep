interface authServer {
  editing: boolean;
  produccion: string;
  desarrollo: string;
  options: { headers: { 'Content-Type': string }; auth: { username: string; password: string } };
};

const auth: authServer = {
  editing: false,
  desarrollo: 'http://localhost:3000/api',
  produccion: 'https://nextstep-gpli.onrender.com/api',
  options: {
    headers: {
      'Content-Type': 'application/json',
    },
    auth: {
      username: 'xnpxvlzo',
      password: '',
    }
  }
};

export default auth;