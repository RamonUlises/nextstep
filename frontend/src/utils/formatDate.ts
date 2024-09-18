export const formatDateFunc = (date: Date) => {
  const dia: string = String(date.getDate()).padStart(2, '0');
  const mes: string = String(date.getMonth() + 1).padStart(2, '0');
  const anio: string = String(date.getFullYear());

  return `${dia}/${mes}/${anio}`;
};