import {
  Book,
  Computer,
  LogOut,
  Mail,
  Moon,
  PawPrintIcon,
  PencilRuler,
  ShoppingCart,
  Sun,
  User,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { Settings } from '@/icons/Settings';
import { changeThemeClick } from '@/utils/changeThemeClick';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { cookieExist } from '@/utils/cookies';

export const OptionsMenuMovil = () => {
  const [login] = useState(cookieExist('UserId'));

  function logOut() {
    document.cookie = 'UserId=; max-age=0';
    window.location.href = '/';
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="bg-transparent dark:bg-transparent border-0 hover:bg-transparent dark:hover:bg-transparent active:outline-none h-[80px]"
          >
            <Settings />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 z-40">
          <DropdownMenuGroup>
            <DropdownMenuItem disabled={!login} className='focus:bg-secundario-600 focus:text-white'>
              <Link to="/perfil" className="w-full flex items-center">
                <User className="mr-2 h-4 w-4" />
                Perfil
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem disabled={!login} className='focus:bg-secundario-600 focus:text-white'>
              <Mail className="mr-2 h-4 w-4" />
              Buzón
            </DropdownMenuItem>
            <DropdownMenuItem className='focus:bg-secundario-600 focus:text-white'>
              <Link to="/tienda" className="w-full flex items-center">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Tienda
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className='focus:bg-secundario-600 focus:text-white'>
              <Link to="/blog" className="w-full flex items-center">
                <Book className="mr-2 h-4 w-4" />
                Blog
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className='focus:bg-secundario-600 focus:text-white'>
              <Link to="/talleres" className="w-full flex items-center">
                <PencilRuler className="mr-2 h-4 w-4" />
                Talleres
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className='focus:bg-secundario-600 focus:text-white data-[state=open]:bg-secundario-600 data-[state=open]:text-white'>
                <PawPrintIcon className="mr-2 h-4 w-4" />
                <span>Tema</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem onClick={() => changeThemeClick('light')} className='focus:bg-secundario-600 focus:text-white'>
                    <Sun className="mr-2 h-4 w-4" />
                    <span>Claro</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeThemeClick('dark')} className='focus:bg-secundario-600 focus:text-white'>
                    <Moon className="mr-2 h-4 w-4" />
                    <span>Oscuro</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeThemeClick('system')} className='focus:bg-secundario-600 focus:text-white'>
                    <Computer className="mr-2 h-4 w-4" />
                    <span>Sistema</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logOut} disabled={!login}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Cerrar sesión</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
