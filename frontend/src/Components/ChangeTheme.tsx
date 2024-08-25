import { useState } from 'react';
import { Moon } from '../icons/Moon';
import { Sun } from '../icons/Sun';
import { System } from '../icons/System';
import { changeThemeClick } from '../lib/changeThemeClick';

export const ChangeTheme = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') ?? 'system'
  );
  function cambiarIconTheme(newTheme: string) {
    setTheme(newTheme);
  }

  return (
    <>
      <ul className="menu">
        <li className="mt-2">
          {theme === 'light' ? (
            <Sun width={24} height={24} />
          ) : theme === 'dark' ? (
            <Moon width={24} height={24} />
          ) : (
            <System width={24} height={24} />
          )}
          <ul className="bg-[#FC9A3B] text-white rounded-lg py-1 -ml-24 dark:bg-zinc-700">
            <li
              className="flex items-center py-1 px-3 hover:bg-[#FA7C15] cursor-pointer gap-2 dark:hover:bg-zinc-600"
              onClick={() => {
                changeThemeClick('light');
                cambiarIconTheme('light');
              }}
            >
              <Sun width={24} height={24} />
              <p>Claro</p>
            </li>

            <li
              className="flex item-center py-1 px-3 hover:bg-[#FA7C15] cursor-pointer gap-2 dark:hover:bg-zinc-600"
              onClick={() => {
                changeThemeClick('dark');
                cambiarIconTheme('dark');
              }}
            >
              <Moon width={24} height={24} />
              <p>Oscuro</p>
            </li>
            <li
              className="flex item-center py-1 px-3 hover:bg-[#FA7C15] cursor-pointer gap-2 dark:hover:bg-zinc-600"
              onClick={() => {
                changeThemeClick('system');
                cambiarIconTheme('system');
              }}
            >
              <System width={24} height={24} />
              <p className="mr-5">Sistema</p>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};
