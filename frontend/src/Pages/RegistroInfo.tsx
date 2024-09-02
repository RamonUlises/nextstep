import imagenRegistro from '../assets/imagen-registro.png';
import { TextInfo } from '../Components/Login/TextInfo';
export const RegistroInfo = () => {
  return (
    <>
      <main className="flex  h-screen overflow-hidden relative dark:bg-zinc-800">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#C3480B] to-[#E75F0B] absolute top-8 right-[18%] dark:to-zinc-700 dark:from-zinc-600"></div>
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#C3480B] to-[#E75F0B] absolute top-[78%] right-[29%] dark:to-zinc-700 dark:from-zinc-600"></div>
        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-[#C3480B] to-[#E75F0B] absolute top-[14%] -right-[5%]  dark:to-zinc-700 dark:from-zinc-600 "></div>
        <div className="absolute top-[40%] right-[24%] dark:text-white hidden flex-col gap-8 md:flex">
          <Clock />
          <Document />
          <File />
        </div>
        <div className="flex flex-col items-center justify-center md:w-[70%] h-full px-[30px] lg:px-[100px] z-40 relative overflow-hidden">
          <TextInfo />
        </div>
        <div className="md:flex justify-end w-[30%] h-full items-end hidden">
          <img
            src={imagenRegistro}
            alt="Imagen registro"
            className="w-auto h-[80%] max-h-[500px] lg:max-h-full z-10"
          />
        </div>
      </main>
    </>
  );
};
function Clock() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-clock"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}
function Document() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-checklist"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
      <path d="M14 19l2 2l4 -4" />
      <path d="M9 8h4" />
      <path d="M9 12h2" />
    </svg>
  );
}

function File() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-file-horizontal"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 5v4a1 1 0 0 0 1 1h4" />
      <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-7l-5 -5h-11a2 2 0 0 0 -2 2z" />
    </svg>
  );
}
