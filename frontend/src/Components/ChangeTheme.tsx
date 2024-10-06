import { useState } from 'react';
import { Moon } from '../icons/Moon';
import { Sun } from '../icons/Sun';
import { System } from '../icons/System';
import { changeThemeClick } from '../utils/changeThemeClick';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';

export const ChangeTheme = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') ?? 'system'
  );

  function cambiarIconTheme(newTheme: string) {
    setTheme(newTheme);
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent border-none p-0"
        >
          <Button variant="outline" className='hover:text-white'>
            {theme === 'light' ? (
              <Sun width={24} height={24} />
            ) : theme === 'dark' ? (
              <Moon width={24} height={24} />
            ) : (
              <System width={24} height={24} />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 flex flex-col py-2 dark:bg-zinc-800 bg-white text-black border-none">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={
              () => {
                changeThemeClick('light');
                cambiarIconTheme('light');
              }
            } className='gap-2 focus:bg-secundario-600 focus:text-white dark:focus:bg-zinc-700'>
              <Sun width={24} height={24} />
              <p>Claro</p>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={
              () => {
                changeThemeClick('dark');
                cambiarIconTheme('dark');
              }
            } className='gap-2 focus:bg-secundario-600 focus:text-white dark:focus:bg-zinc-700'>
              <Moon width={24} height={24} />
              <p>Oscuro</p>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={
              () => {
                changeThemeClick('system');
                cambiarIconTheme('system');
              }
            } className='gap-2 focus:bg-secundario-600 focus:text-white dark:focus:bg-zinc-700'>
              <System width={24} height={24} />
              <p>Sistema</p>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
