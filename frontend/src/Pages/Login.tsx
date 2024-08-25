import { MenuDesktop } from '../Components/Home/MenuDesktop';
import { MenuMovil } from '../Components/Home/MenuMovil';
import { InputLogin } from '../Components/Login/InputLogin';
import logo from '../assets/logo.png';

export const Login = () => {
  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <MenuDesktop />
      <MenuMovil />
      <div className="grid h-full grid-cols-2 grid-rows-1">
        <section className="bg-[url(./assets/image-login.png)] bg-cover bg-no-repeat"></section>
        <section className="w-full h-full flex flex-col justify-center items-center"> <img src={logo} alt="Logo NextStep" className='w-[60%] mb-4' />
          <form className="py-8 px-16 bg-white shadow-xl rounded-2xl flex flex-col items-center ">
            <h3 className="mt-6 mb-7 text-center text-[#E75F0B] text-2xl font-bold">
              Iniciar Sesión
            </h3>
            <div className="input-google">
              <InputLogin text="Correo eléctronico" />
            </div>
            <div className="input-google">
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
