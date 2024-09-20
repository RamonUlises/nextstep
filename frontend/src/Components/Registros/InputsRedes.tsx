import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Minus } from 'lucide-react';
import { Redes } from '@/utils/redesComponent';

export function InputsRedes({
  redes,
  change,
  deleteInput,
  changeProp,
  propiedad,
  valor,
  red,
  setRedesSociales,
  setRed,
  setRedes,
  redesSociales,
  options,
}: {
  redes: string[];
  change: (event: {
    prop: string | undefined;
    value: string;
    red: Redes[];
    setRedesSociales: React.Dispatch<React.SetStateAction<string[]>>;
  }) => void;
  deleteInput: (
    prop: string | undefined,
    red: Redes[],
    redes: string[],
    setRed: React.Dispatch<React.SetStateAction<Redes[]>>,
    setRedes: React.Dispatch<React.SetStateAction<string[]>>,
    redesSociales: string[],
    setRedesSociales: React.Dispatch<React.SetStateAction<string[]>>
  ) => void;
  changeProp: (event: {
    prop: string | undefined;
    newProp: string | undefined;
    value: string | undefined;
    red: Redes[];
    setRedes: React.Dispatch<React.SetStateAction<string[]>>;
    setRedesSociales: React.Dispatch<React.SetStateAction<string[]>>;
  }) => void;
  propiedad: string | undefined;
  valor: string | undefined;
  red: Redes[];
  setRedesSociales: React.Dispatch<React.SetStateAction<string[]>>;
  setRed: React.Dispatch<React.SetStateAction<Redes[]>>;
  setRedes: React.Dispatch<React.SetStateAction<string[]>>;
  redesSociales: string[];
  options: string[];
}) {
  const [prop, setProp] = useState<string | undefined>(propiedad);
  const [value, setValue] = useState<string>(valor !== undefined ? valor : '');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    change({ prop, value: newValue, red, setRedesSociales });
  };

  const handlePropChange = (newProp: string) => {
    changeProp({ prop, newProp, value, red, setRedes, setRedesSociales });
    setProp(newProp);
  };

  return (
    <>
      <section className="flex my-2 justify-center items-center">
        <Select onValueChange={handlePropChange} name="prop">
          <SelectTrigger className="w-auto border-none bg-slate-300 rounded-none rounded-s-xl dark:bg-zinc-700 dark:text-white">
            <SelectValue
              placeholder={propiedad === undefined ? 'Redes' : propiedad}
            />
          </SelectTrigger>
          <SelectContent className='z-[999]'>
            <SelectGroup>
              {
                options.map(option => (
                  <SelectItem
                    disabled={redes.includes(option)}
                    className="cursor-pointer"
                    value={option}
                    key={option}
                  >
                    {option}
                  </SelectItem>
                ))
              }
            </SelectGroup>
          </SelectContent>
        </Select>
        <input
          name="url"
          type="text"
          value={value}
          className="border-2 rounded-e-xl outline-none valid:pl-2 font-light h-8 min-w-[150px] border-l-0 dark:valid:text-black"
          placeholder="Nombre o url"
          onChange={onInputChange}
        />
        <Minus
          onClick={() => deleteInput(prop, red, redes, setRed, setRedes, redesSociales, setRedesSociales)}
          className="text-white bg-red-600 rounded-full ml-2 cursor-pointer"
        />
      </section>
    </>
  );
}
