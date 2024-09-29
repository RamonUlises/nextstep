import { X } from 'lucide-react';
import { useEffect } from 'react';

export const Buzon = ({ option, handleBuzon }: { option: boolean; handleBuzon: (option: boolean) => void }) => {
  useEffect(() => {
    if (option) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [option]);
  return (
    <>
      <section
        className={`${
          option ? 'flex' : 'hidden'
        } fixed top-0 left-0 w-screen h-screen bg-black/70 z-[999] items-center justify-center`}
      >
        <div className="h-[80vh] w-[90%] max-w-[410px] sm:w-[60%] bg-white dark:bg-zinc-900 relative rounded-lg md:max-w-[480px]">
          <div onClick={() => handleBuzon(false)} className='absolute top-0 right-0 border-2 border-black rounded-full mt-2 mr-2 cursor-pointer'>
            <X width={30} height={30} />
          </div>
        </div>
      </section>
    </>
  );
};
