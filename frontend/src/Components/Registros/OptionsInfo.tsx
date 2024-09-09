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
    <div className="grid grid-cols-[auto,1fr] grid-rows-[30px,1fr] overflow-hidden w-full gap-2">
      <label className="">{text}</label>
      <div className="row-span-2 flex flex-col gap-1 border-2 p-1">
        {option.map((t, i) => (
          <InputsOptions
            deleteInput={deleteOption}
            value={t.value}
            change={changeOption}
            index={i}
            key={t.id}
          />
        ))}
      </div>
      <div>
        <button
          type="button"
          className="cursor-pointer bg-principal-400 text-white px-2 py-1 rounded-md"
          onClick={addNew}
        >
          Añadir
        </button>
      </div>
    </div>
  );
};
