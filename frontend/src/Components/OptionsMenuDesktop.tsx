import {
  User,
} from 'lucide-react';

import { Button } from '@/Components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';

export function OptionsMenuDesktop({
  img,
  nombre,
}: {
  img: string;
  nombre: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='bg-transparent border-none outline-none hover:bg-transparent hover:text-white flex gap-2 dark:bg-transparent dark:hover:bg-transparent'>
          <h3>{nombre}</h3>
          <div className="w-[35px] h-[35px] rounded-full bg-slate-300 overflow-hidden">
            {img === 'sin-imagen' ? (
              <User width={33} height={33} />
            ) : (
              <img src={img} alt="Image" />
            )}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-principal-500/90 text-white dark:bg-zinc-800/80">
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
