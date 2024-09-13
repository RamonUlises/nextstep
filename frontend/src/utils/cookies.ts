export function agregarCookie({ name, value, days } : { name: string, value: string, days: number }) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

export function obtenerCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
}

export function eliminarCookie(name: string) {
  document.cookie = `${name}=; max-age=0`;
}

export function cookieExist(name: string) {
  const cookie = obtenerCookie(name);
  return cookie !== undefined;
}