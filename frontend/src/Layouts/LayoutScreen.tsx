import { MenuDesktop } from '../Components/MenuDesktop';
import { MenuMovil } from '../Components/MenuMovil';
import { ReactNode } from 'react';

export const LayoutScreen = ({ children, className } : { children: ReactNode; className?: string } ) => {
  return (
    <section className='flex flex-col bg-gradient-to-tl dark:from-zinc-700 dark:to-zinc-800 h-screen'>
      <MenuDesktop />
      <MenuMovil />
      <div className={`px-4 ${className}`}>
        {children}
      </div>
    </section>
  );
};
