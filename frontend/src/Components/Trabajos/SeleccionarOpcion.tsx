import { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export const SeleccionarOpcion = ({
  options,
  id,
  setOption,
}: {
  options: string[];
  id: string;
  setOption: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        value: string;
      }[]
    >
  >;
}) => {
  const [otra, setOtra] = useState<string>('');
  const [opcion, setOpcion] = useState<string>('');

  useEffect(() => {
    if (opcion === 'otra') {
      setOtra('otra');
      setOpcion('');
    }

    for (const op of options) {
      if (op === opcion && op !== 'otra') {
        setOtra('');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otra, opcion]);

  useEffect(() => {
    setOption((prev) => {
      const newOptions = prev.map((option) => {
        if (option.id === id) {
          return {
            id: option.id,
            value: opcion,
          };
        }
        return option;
      });

      return newOptions;
    }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opcion]);

  return (
    <div>
      <Select onValueChange={(op) => setOpcion(op)}>
        <SelectTrigger className="w-full bg-white dark:bg-zinc-600 dark:border dark:border-white">
          <SelectValue placeholder="Categorias" />
        </SelectTrigger>
        <SelectContent className='dark:bg-zinc-700'>
          <SelectGroup>
            {options.map((option, i) => (
              <SelectItem key={i} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {otra === 'otra' && (
        <input
          onChange={(e) => {
            setOpcion(e.target.value);
          }}
          value={opcion}
          className="outline-none bg-white rounded-sm p-2 mt-2 w-full"
          placeholder="Especifique"
        />
      )}
    </div>
  );
};
