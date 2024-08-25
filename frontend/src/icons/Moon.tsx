export const Moon = ({ width, height }: { width: number; height: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2" // Cambiado de stroke-width a strokeWidth
      strokeLinecap="round" // Cambiado de stroke-linecap a strokeLinecap
      strokeLinejoin="round" // Cambiado de stroke-linejoin a strokeLinejoin
      className="icon icon-tabler icons-tabler-outline icon-tabler-moon cursor-pointer"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
    </svg>
  );
};
