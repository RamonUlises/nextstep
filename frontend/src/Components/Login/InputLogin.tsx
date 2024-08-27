import { ChangeEvent, useState } from 'react';
import { Eye } from '../../icons/Eye';

export const InputLogin = ({
  text,
  type,
  name,
  onInputChange,
}: {
  text: string;
  type: string;
  name: string;
  onInputChange: (event: { prop: string, value: string }) => void;
}) => {
  const [value, setValue] = useState<number>(0);
  const [eye, setEye] = useState<boolean>(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const prop = event.target.name;

    setValue(value.length);
    onInputChange({ prop, value });
  }

  function handleElementClick({ value }: { value: boolean }) {
    setEye(value);
  }

  return (
    <>
      <input
        required
        className="w-[250px] border-2 border-[#E75F0B] text-[#E75F0B] h-[50px] rounded-md text-sm py-0 px-4 bg-transparent outline-none dark:border-white dark:text-white"
        name={name}
        type={eye ? 'text' : type}
        onChange={handleChange}
      />
      <label className={`text-[#E75F0B] absolute top-[50%] left-[15px] translate-y-[-50%] text-sm pointer-events-none transition-all duration-300 dark:text-white ${value > 0 ? 'active' : ''}`}>
        {text}
      </label>
      {
        (type === 'password' && value > 0) ? (
          <Eye styles='absolute top-[12px] right-[12px] cursor-pointer text-[#E75F0B] dark:text-white' onElementClick={handleElementClick} />
        ) : null
      }
    </>
  );
};
