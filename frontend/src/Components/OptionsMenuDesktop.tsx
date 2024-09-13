import { Book, LogOut, PencilRuler, User } from 'lucide-react';

import { Button } from '@/Components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { cookieExist } from '@/utils/cookies';

export function OptionsMenuDesktop({
  img = 'sin-imagen',
  nombre,
}: {
  img: string;
  nombre: string;
}) {
  const [login] = useState(
    cookieExist('UserId')
  );

  function logOut() {
    document.cookie = 'UserId=; max-age=0';
    window.location.href = '/';
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-transparent border-none outline-none hover:bg-transparent hover:text-white flex gap-2 dark:bg-transparent dark:hover:bg-transparent"
        >
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
        <DropdownMenuItem disabled={!login}>
          <Link to="/perfil" className="w-full flex items-center">
            <User className="mr-2 h-4 w-4" />
            Perfil
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/blog" className="w-full flex items-center">
            <Book className="mr-2 h-4 w-4" />
            Blog
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/talleres" className="w-full flex items-center">
            <PencilRuler className="mr-2 h-4 w-4" />
            Talleres
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={logOut} disabled={!login}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Cerrar sesión</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
