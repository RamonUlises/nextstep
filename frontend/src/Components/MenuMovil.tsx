import { Link } from 'react-router-dom';
import { Factory } from '../icons/Factory';
import { Home } from '../icons/Home';
import { Job } from '../icons/Job';
import { Jobs } from '../icons/Jobs';
import { OptionsMenuMovil } from './OptionsMenuMovil';

export const MenuMovil = () => {
  return (
    <>
      <header className="fixed bottom-0 left-0 flex justify-center w-full md:hidden z-[50]">
        <nav className="flex py-4 w-full justify-evenly bg-gradient-to-r from-[#C3480B] to-[#E75F0B] dark:from-zinc-800 dark:to-zinc-700 max-w-[450px] rounded-3xl mb-2">
          <Link to={'/'} className="rounded-full bg-[#FA7C15] p-1  hover:scale-125 transition-transform duration-300 dark:bg-zinc-600 w-[47px] h-[47px] flex justify-center">
            <Home />
          </Link>
          <Link to='/trabajos' className="rounded-full bg-[#FA7C15] p-1 hover:scale-125 transition-transform duration-300 dark:bg-zinc-600 w-[47px] h-[47px] flex justify-center">
            <Job></Job>{' '}
          </Link>
          <div className="rounded-full bg-[#FA7C15] p-1  hover:scale-125 transition-transform duration-300  dark:bg-zinc-600 w-[47px] h-[47px] flex justify-center">
            <Jobs></Jobs>{' '}
          </div>
          <div className="rounded-full bg-[#FC9A3B] p-1  hover:scale-125 transition-transform duration-300  dark:bg-zinc-600 w-[47px] h-[47px] flex justify-center">
            <Factory></Factory>
          </div>
          <div className="rounded-full bg-[#FC9A3B] p-1  hover:scale-125 transition-transform duration-300 dark:bg-zinc-600 overflow-hidden w-[47px] h-[47px] flex justify-center items-center">
            <OptionsMenuMovil />
          </div>
        </nav>
      </header>
    </>
  );
};
