import logo from '@/assets/logo.png';
import { Facebook, Github, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="flex flex-col py-5 px-8 md:px-20 bg-secundario-600 pb-[120px] md:pb-5 dark:bg-zinc-700">
      <section className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col items-center md:items-start md:w-[40%] lg:w-[30%]">
          <img src={logo} alt="logo" className="w-[50%] md:w-[80%]" />
          <p className="mt-4 text-white text-pretty">
            Puedes crecer personal como profesionalmente, unete a nosotros para
            mejorar tu futuro, NextStep sembrando talentos, cosechando
            oportunidades.
          </p>
          <div className="flex my-4 gap-3">
            <Github
              width={40}
              height={40}
              className="bg-white text-secundario-600 p-1 rounded-full cursor-pointer dark:bg-zinc-600 dark:text-white"
            />
            <Facebook
              width={40}
              height={40}
              className="bg-white text-secundario-600 p-1 rounded-full cursor-pointer dark:bg-zinc-600 dark:text-white"
            />
            <Instagram
              width={40}
              height={40}
              className="bg-white text-secundario-600 p-[5px] rounded-full cursor-pointer dark:bg-zinc-600 dark:text-white"
            />
          </div>
        </div>
        <div className="flex flex-col text-white mb-4 md:justify-center">
          <h4 className='text-xl font-bold mb-4'>Conoce más</h4>
          <div className='flex md:justify-end gap-8'>
            <div className='flex flex-col text-start'>
              <Link to="/">Inicio</Link>
              <Link to="/trabajos">Búsqueda de empleo</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/tienda">Tienda</Link>
              <Link to="/talleres">talleres</Link>
            </div>
            <div className='flex flex-col text-start'>
              <Link to="/contacto">Contacto</Link>
              <Link to="/sobre-nosotros">Nosotros</Link>
              <Link to="/soporte">Soporte</Link>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-none h-1 bg-white" />
      <section className="flex justify-between mt-4 text-white text-xs md:text-sm">
        <h5 className="cursor-pointer hover:opacity-80 transition-opacity duration-500">
          Hecho en Nicaragua.
        </h5>
        <div className="flex gap-3">
          <p className="cursor-pointer hover:opacity-80 transition-opacity duration-500">
            Terminos y servicios
          </p>
          <p>-</p>
          <p className="cursor-pointer hover:opacity-80 transition-opacity duration-500">
            Politicas de privacidad
          </p>
        </div>
      </section>
    </footer>
  );
};
