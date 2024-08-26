import { MenuDesktop } from '../Components/MenuDesktop';
import { MenuMovil } from '../Components/MenuMovil';
import { InputLogin } from '../Components/Login/InputLogin';
import logo from '../assets/logo.png';

export const Login = () => {
  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <MenuDesktop />
      <MenuMovil />
      <div className="grid h-full grid-cols-2 grid-rows-1">
        <section className="bg-[url(./assets/image-login.png)] bg-cover bg-no-repeat"></section>
        <section className="flex flex-col items-center justify-center w-full h-full"> <img src={logo} alt="Logo NextStep" className='w-[60%] mb-4' />
          <form className="flex flex-col items-center px-16 py-8 bg-white shadow-xl rounded-2xl ">
            <h3 className="mt-6 mb-7 text-center text-[#E75F0B] text-2xl font-bold">
              Iniciar Sesión
            </h3>
            <div className="relative mt-5 input-google">
              <InputLogin text="Correo eléctronico" />
            </div>
            <div className="relative mt-5 input-google">
              <InputLogin text="Contraseña" />
            </div>
            <button className="bg-[#E75F0B] p-3 rounded-xl text-white font-medium hover:bg-[#FA7C15] transition-colors duration-300   mt-12">
              Inicia sesión
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};
