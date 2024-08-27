import { MenuDesktop } from '../Components/MenuDesktop';
import { MenuMovil } from '../Components/MenuMovil';
import { InputLogin } from '../Components/Login/InputLogin';
import logo from '../assets/logo.png';
import { useState } from 'react';

export const Login = () => {
  const [inputs, setInputs] = useState({ correo: '', contra: '' });

  function onInputChange({ prop, value }: { prop: string; value: string }) {
    setInputs({ ...inputs, [prop]: value });
  }

  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <MenuDesktop />
      <MenuMovil />
      <div className="flex h-full md:grid-rows-1 md:grid-cols-2 md:grid">
        <section className="hidden md:block bg-[url(./assets/image-login.png)] bg-cover bg-no-repeat"></section>
        <section className="flex flex-col items-center w-full h-full md:justify-center bg-gradient-to-r dark:from-zinc-800 dark:to-zinc-700">
          <img src={logo} alt="Logo NextStep" className="w-[60%] mt-4 md:mt-0 mb-4" />
          <form className="flex flex-col items-center px-16 py-8 bg-white shadow-xl rounded-2xl dark:bg-zinc-800">
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
            <button className="bg-[#E75F0B] p-3 rounded-xl text-white font-medium hover:bg-[#FA7C15] transition-colors duration-300   mt-12 dark:bg-zinc-600 dark:hover:bg-zinc-500">
              Inicia sesión
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};
