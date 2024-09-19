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
      password: '5f5e5b3f4-659a-44ed-9e44-2b1f99ae6517',
    }
  }
};

export default auth;