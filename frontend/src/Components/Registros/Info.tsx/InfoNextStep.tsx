import { LayoutAtropos } from '@/Components/LayoutAtropos';
import { Clock, Document, File } from './Icons';
import { TextInfo } from './TextInfo';

export const InfoNextStep = ({ img, url }: { img: string, url: string }) => {
  return (
    <main className="flex  h-screen overflow-hidden relative dark:bg-zinc-800">
      <LayoutAtropos
        innerClass="w-20 h-20 rounded-full bg-gradient-to-r from-[#C3480B] to-[#E75F0B]  dark:to-zinc-700 dark:from-zinc-600"
        styles="absolute top-8 right-[18%]"
      ></LayoutAtropos>
      <LayoutAtropos
        innerClass="w-32 h-32 rounded-full bg-gradient-to-r from-[#C3480B] to-[#E75F0B] dark:to-zinc-700 dark:from-zinc-600"
        styles="absolute top-[78%] right-[29%]"
      ></LayoutAtropos>
      <LayoutAtropos
        innerClass="w-96 h-96 rounded-full bg-gradient-to-r from-[#C3480B] to-[#E75F0B]  dark:to-zinc-700 dark:from-zinc-600"
        styles="absolute top-[14%] -right-[5%]"
      ></LayoutAtropos>
      <div className="absolute top-[40%] right-[28%] dark:text-white hidden flex-col gap-8 md:flex">
        <Clock />
        <Document />
        <File />
      </div>
      <div className="flex flex-col items-center justify-center md:w-[70%] h-full px-[30px] lg:px-[100px] z-40 relative overflow-hidden">
        <TextInfo url={url} />
      </div>
      <div className="md:flex justify-end w-[30%] h-full items-end hidden">
        <img
          src={img}
          alt="Imagen registro"
          className="w-auto h-[80%] max-h-[500px] lg:max-h-full z-10"
        />
      </div>
    </main>
  );
};
