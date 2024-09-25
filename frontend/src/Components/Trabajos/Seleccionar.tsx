import { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export const Seleccionar = ({
  options,
  defaultOption = 'Contrato',
  setOption,
}: {
  options: string[];
  defaultOption?: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [opcion, setOpcion] = useState<string>('');

  useEffect(() => {
    setOption(opcion);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opcion]);

  return (
    <div>
      <Select onValueChange={(op) => setOpcion(op)}>
        <SelectTrigger className="w-full bg-zinc-300 dark:bg-zinc-600 dark:border dark:border-white">
          <SelectValue placeholder={defaultOption} />
        </SelectTrigger>
        <SelectContent className='dark:dark:bg-zinc-600'>
          <SelectGroup>
            {options.map((option, i) => (
              <SelectItem className='dark:focus:bg-zinc-500' key={i} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
