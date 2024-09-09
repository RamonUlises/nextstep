import { Plus } from 'lucide-react';
import { InputsOptions } from './InputsOptions';

export const OptionsInfo = ({
  text,
  option,
  setOption,
}: {
  text: string;
  option: { id: string; value: string | undefined }[];
  setOption: (value: { id: string; value: string | undefined }[]) => void;
}) => {

  const addNew = () => {
    for(const op of option) {
      if(op.value === '') return;
    }

    setOption([...option, { id: crypto.randomUUID(), value: '' }]);
  };

  const changeOption = ({ index, value }: { index: number, value: string}) => {
    const newOption = [...option];
    newOption[index].value = value;
    setOption(newOption);
  };

  const deleteOption = ({ index }: { index: number }) => {
    const newOption = [...option];
    newOption.splice(index, 1);
    setOption(newOption);
  };

  return (
    <div className="flex w-full justify-center overflow-hidden gap-2">
      <label className="row-span-2">{text}</label>
      <div className="flex items-end gap-1 p-1 max-w-[320px]">
        <div className='bg-green-600 rounded-full w-[23px] h-[23px] text-white cursor-pointer mb-2'>
          <Plus onClick={addNew} width={23} height={23} />
        </div>
        <div className="flex flex-col gap-1 p-1">
          {option.map((t, i) => (
            <InputsOptions
              option={option}
              deleteInput={deleteOption}
              value={t.value}
              change={changeOption}
              index={i}
              key={t.id}
            />  
          ))}
        </div>
      </div>
    </div>
  );
};
