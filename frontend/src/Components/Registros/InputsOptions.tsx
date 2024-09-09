import { Minus } from 'lucide-react';

export const InputsOptions = ({
  index,
  value,
  option,
  change,
  deleteInput,
}: {
  index: number;
  value: string | undefined;
  option: { id: string; value: string | undefined }[];
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
        className="bg-transparent border-[3px] border-principal-300 rounded-sm outline-none focus:border-principal-200 px-2 w-full valid:font-light max-w-[250px]"
      />
      <button disabled={index === 0 && option.length === 1 } className={`w-[22px] h-[22px] ${(index === 0 && option.length === 1)? 'bg-red-300' : 'bg-red-500'} rounded-full`}>
        <Minus onClick={deleteInp} width={22} height={22} className='flex-grow-0 text-white cursor-pointer' />
      </button>
    </div>
  );
};
