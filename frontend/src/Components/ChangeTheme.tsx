import { useState } from 'react';
import { Moon } from '../icons/Moon';
import { Sun } from '../icons/Sun';
import { System } from '../icons/System';
import { changeThemeClick } from '../lib/changeThemeClick';

export const ChangeTheme = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') ?? 'system'
  );
  const [clicked, setClicked] = useState<boolean>(false);

  function cambiarIconTheme(newTheme: string) {
    setTheme(newTheme);
  }
  function clickIcon() {
    setClicked(!clicked);
  }
  function mouseOut() {
    setClicked(false);
  }
  return (
    <>
      <ul className="menu">
        <li className="mt-2 relative inline-block">
          <div onClick={clickIcon}>
            {theme === 'light' ? (
              <Sun width={24} height={24} />
            ) : theme === 'dark' ? (
              <Moon width={24} height={24} />
            ) : (
              <System width={24} height={24} />
            )}
          </div>
          <ul
            onMouseLeave={mouseOut}
            className={`bg-[#FC9A3B] text-white rounded-lg py-1 -ml-24 dark:bg-zinc-700 absolute top-[100%] left-0 ${
              clicked ? 'block' : 'hidden'
            }`}
          >
            <li
              className="flex items-center py-1 px-3 hover:bg-[#FA7C15] cursor-pointer gap-2 dark:hover:bg-zinc-600"
              onClick={() => {
                changeThemeClick('light');
                cambiarIconTheme('light');
                clickIcon();
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
                clickIcon();
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
                clickIcon();
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
