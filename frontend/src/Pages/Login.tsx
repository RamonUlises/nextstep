import { MenuDesktop } from '../Components/MenuDesktop';
import { MenuMovil } from '../Components/MenuMovil';
import { InputLogin } from '../Components/Login/InputLogin';
import { FormEvent, useEffect, useState } from 'react';
import { auth } from '../lib/auth';
import { agregarCookie, obtenerCookie } from '../utils/cookies';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [inputs, setInputs] = useState({ correo: '', contra: '' });
  const [error, setError] = useState('');

  function onInputChange({ prop, value }: { prop: string; value: string }) {
    setInputs({ ...inputs, [prop]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError('');

    const response = await auth({ email: inputs.correo, password: inputs.contra });  
    
    if(response.status === 200) {
      setError('Sesión iniciada correctamente');
      agregarCookie({ name: 'UserId', value: response.data.id, days: 1 });
      setTimeout(() => {       
        window.location.href = '/';
      }, 2000);
      return;
    }

    setError(response.data.message);
  }

  useEffect(() => {
    const user = obtenerCookie('UserId');
    if (user) {
      window.location.href = '/';
    }
  }, []);

  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <MenuDesktop />
      <MenuMovil />
      <div className="flex h-full md:grid-rows-1 md:grid-cols-2 md:grid">
        <section className="hidden md:block bg-[url(./assets/image-login.png)] bg-cover bg-no-repeat"></section>
        <section className="flex flex-col items-center w-full h-full md:justify-center bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-700">
          <div className='w-72 h-40 md:w-96 mt-4 md:mt-0 mb-4 bg-[url(./assets/Logos/logo-original.png)] md:h-48 bg-contain bg-no-repeat dark:bg-[url(./assets/Logos/logo-blanco.png)]'></div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center px-16 py-8 bg-white shadow-xl rounded-2xl dark:bg-zinc-800">
            <h3 className="mt-6 mb-7 text-center text-secundario-600 text-2xl font-bold dark:text-white">
              Iniciar Sesión
            </h3>
            <div className="relative mt-5 input-google">
              <InputLogin
                text="Correo eléctronico"
                type="email"
                name="correo"
                onInputChange={onInputChange}
              />
            </div>
            <div className="relative mt-5 input-google">
              <InputLogin
                text="Contraseña"
                type="password"
                name="contra"
                onInputChange={onInputChange}
              />
            </div>
            <Link to="/recuperar-contrasena" className="text-secundario-600 mt-4 hover:underline dark:text-white">¿Olvidaste tu contraseña?</Link>
            <p className={`${error.includes('orrectamente') ? 'text-secundario-600' : 'text-red-600'} mt-6 dark:text-white`}>{error}</p>
            <input
              value="Enviar"
              type="submit"
              className="bg-principal-600 py-3 px-6 rounded-xl text-white font-medium hover:bg-[#FA7C15] transition-colors duration-300 mt-6 dark:bg-zinc-600 dark:hover:bg-zinc-500 cursor-pointer"
            />
          </form>
        </section>
      </div>
    </main>
  );
};
