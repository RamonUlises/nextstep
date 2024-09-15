import { Minus } from 'lucide-react';

export const InputsOptions = ({
  index,
  value,
  option,
  format,
  change,
  deleteInput,
}: {
  index: number;
  value: string | undefined;
  option: { id: string; value: string | undefined }[];
  format: string;
  change: ({ index, value }: { index: number; value: string }) => void;
  deleteInput: ({ index }: { index: number}) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    change({ index, value: e.target.value });
    e.target.focus();
  };

  const deleteInp = () => {
    deleteInput({ index });
  };

  return (
    <div className="flex w-full items-center gap-1 justify-center">
      <input
        onChange={handleChange}
        type="text"
        value={value ?? ''}
        className="bg-transparent border-none outline-none px-2 w-full valid:font-light max-w-[250px]"
        placeholder={format}
      />
      <button disabled={index === 0 && option.length === 1 } className="w-[22px] h-[22px] $ rounded-full">
        <Minus onClick={deleteInp} width={22} height={22} className={`flex-grow-0 ${(index === 0 && option.length === 1)? 'text-red-500/60' : 'text-red-500'} cursor-pointer`} />
      </button>
    </div>
  );
};
