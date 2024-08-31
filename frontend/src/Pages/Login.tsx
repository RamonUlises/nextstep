import { MenuDesktop } from '../Components/MenuDesktop';
import { MenuMovil } from '../Components/MenuMovil';
import { InputLogin } from '../Components/Login/InputLogin';
import logo from '../assets/logo.png';
import { FormEvent, useEffect, useState } from 'react';
import { auth } from '../lib/servidor/auth';
import { agregarCookie, obtenerCookie } from '../lib/cookies';

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
        <section className="flex flex-col items-center w-full h-full md:justify-center bg-gradient-to-r dark:from-zinc-800 dark:to-zinc-700">
          <img
            src={logo}
            alt="Logo NextStep"
            className="w-[60%] mt-4 md:mt-0 mb-4"
          />
          <form onSubmit={handleSubmit} className="flex flex-col items-center px-16 py-8 bg-white shadow-xl rounded-2xl dark:bg-zinc-800">
            <h3 className="mt-6 mb-7 text-center text-[#E75F0B] text-2xl font-bold dark:text-white">
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
            <p className='mt-6 dark:text-white'>{error}</p>
            <input
              value="Enviar"
              type="submit"
              className="bg-[#E75F0B] py-3 px-6 rounded-xl text-white font-medium hover:bg-[#FA7C15] transition-colors duration-300 mt-6 dark:bg-zinc-600 dark:hover:bg-zinc-500 cursor-pointer"
            />
          </form>
        </section>
      </div>
    </main>
  );
};
