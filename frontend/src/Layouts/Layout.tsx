import { Footer } from '@/Components/Footer';
import { MenuDesktop } from '@/Components/MenuDesktop';
import { MenuMovil } from '@/Components/MenuMovil';
import { ReactNode } from 'react';

export const Layout = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <section className='flex flex-col bg-gradient-to-bl dark:from-zinc-700 dark:to-zinc-800'>
      <MenuDesktop />
      <MenuMovil />
      <div className={`${className}`}>
        {children}
      </div>
      <Footer />
    </section>
  );
};
