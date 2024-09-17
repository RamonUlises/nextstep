import { Boxes, HandshakeIcon } from 'lucide-react';

export const Card = ({ text, titulo }: { text: string; titulo: string }) => {
  return (
    <div className="bg-white dark:bg-zinc-700 p-8 rounded-xl shadow-2xl relative mt-24 sm:max-w-[60%] w-full md:max-w-[45%] md:mt-0 lg:max-w-[43%] xl:w-[32%]">
      <div className="absolute top-2 left-0 w-full">
        <div className="decoration-nosotros w-[200px] h-[60px] bg-principal-600 relative mx-auto flex items-center justify-center dark:bg-zinc-600">
          <p className="text-white font-bold text-xl">{titulo}</p>
        </div>
      </div>
      <div className="rounded-2xl border-principal-600 border-4 w-full px-4 pt-16 pb-8 text-sm sm:text-base xl:text-lg dark:border-white/80 dark:text-white">
        <p>{text}</p>
      </div>
      <div className="w-full flex justify-center">
        <div className=" w-32 h-32 rounded-full bg-white border-principal-700 border-4 dark:to-zinc-700 dark:from-zinc-600 absolute -bottom-[60px] flex items-center justify-center z-20 shadow-2xl dark:bg-zinc-600 dark:border-white">
          {titulo === 'Misión' ? (
            <HandshakeIcon size={50} className="text-principal-600 dark:text-white" />
          ) : (
            titulo === 'Visión' && (
              <Boxes size={50} className="text-principal-600 dark:text-white" />
            )
          )}
        </div>
      </div>
    </div>
  );
};
