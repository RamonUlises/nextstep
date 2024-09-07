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

export function InputsRedes ({
  redes,
  change,
  deleteInput,
}: {
  redes: string[];
  change: (event: { prop: string | undefined; value: string }) => void;
  deleteInput: (prop: string | undefined) => void;
}) {
  const [prop, setProp] = useState<string | undefined>(undefined);
  const [value, setValue] = useState<string>('');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    change({ prop, value: newValue });
  };

  const handleProp = (prop: string) => {
    setProp(prop);
    change({ prop, value });
  };

  return (
    <>
      <section className="flex my-2 justify-center items-center">
        <Select onValueChange={handleProp} name="prop">
          <SelectTrigger className="w-auto border-none bg-slate-300 rounded-none rounded-s-xl">
            <SelectValue placeholder="Redes" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem disabled={redes.includes('facebook')} className="cursor-pointer" value="facebook">
                Facebook
              </SelectItem>
              <SelectItem disabled={redes.includes('instagram')} className="cursor-pointer" value="instagram">
                Instagram
              </SelectItem>
              <SelectItem disabled={redes.includes('x')} className="cursor-pointer" value="x">
                X
              </SelectItem>
              <SelectItem disabled={redes.includes('whatsapp')} className="cursor-pointer" value="whatsapp">
                WhatsApp
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <input
          name="url"
          type="text"
          value={value}
          className="border-2 rounded-e-xl outline-none valid:pl-2 font-light h-8 min-w-[150px] border-l-0"
          placeholder="Nombre o url"
          onChange={onInputChange}
        />
        <Minus onClick={() => deleteInput(prop)} className='text-white bg-red-600 rounded-full ml-2 cursor-pointer' />
      </section>
    </>
  );
};