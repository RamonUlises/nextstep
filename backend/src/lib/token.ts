export function generarCodigo() {
  // Genera un número aleatorio entre 100000 y 999999
  const codigo = Math.floor(100000 + Math.random() * 900000);
  return codigo.toString();
}