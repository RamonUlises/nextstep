import { Factory } from '../icons/Factory';
import { Home } from '../icons/Home';
import { Job } from '../icons/Job';
import { Jobs } from '../icons/Jobs';
import { Settings } from '../icons/Settings';

export const MenuMovil = () => {
  return (
    <>
      <header className="flex md:hidden fixed bottom-0 left-0  w-full ">
        <nav className="flex py-4 w-full  justify-evenly  bg-gradient-to-r from-[#C3480B] to-[#E75F0B] dark:from-zinc-800 dark:to-zinc-700 ">
          <div className="rounded-full bg-[#FA7C15] p-1  hover:scale-125 transition-transform duration-300 dark:bg-zinc-600">
            <Home />
          </div>
          <div className='rounded-full bg-[#FA7C15] p-1 hover:scale-125 transition-transform duration-300 dark:bg-zinc-600'><Job></Job> </div>
          <div className='rounded-full bg-[#FA7C15] p-1  hover:scale-125 transition-transform duration-300  dark:bg-zinc-600'><Jobs></Jobs> </div>
          <div className='rounded-full bg-[#FC9A3B] p-1  hover:scale-125 transition-transform duration-300  dark:bg-zinc-600'><Factory></Factory></div>
          <div className='rounded-full bg-[#FC9A3B] p-1  hover:scale-125 transition-transform duration-300  dark:bg-zinc-600'><Settings></Settings></div>
        </nav>
      </header>
    </>
  );
};
