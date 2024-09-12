// Funcion para cambiar el tema de la pagina
export function changeThemeClick(theme: string) {
  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }

  if (theme === 'system') {
    const systemTheme = getSystemTheme();

    if (systemTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', 'system');
  }
}

// Obtener el tema actual de la pagina
export function getTheme() {
  return localStorage.getItem('theme') || 'system';
}
// Obtener tema del sistema
export function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};
