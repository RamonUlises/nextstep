import { TypeTrabajos } from '@/types/trabajos';
import { Minus, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';

type Opcion = {
  id: string;
  value: string;
};

export const InputAgregar = ({ text, setTrabajo, textClass, inputClass, iconClass }: { text: string; setTrabajo: React.Dispatch<React.SetStateAction<TypeTrabajos>>; textClass?: string, inputClass?: string; iconClass?: string}) => {
  const [opcion, setOpcion] = useState<Opcion[]>([
    {
      id: crypto.randomUUID(),
      value: '',
    },
  ]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { value } = event.target;
    const newOpcion = opcion.map((item) => {
      if (item.id === id) {
        return { ...item, value };
      }
      return item;
    });
    setOpcion(newOpcion);
  };

  const addNewInput = () => {
    for (const op of opcion) {
      if (op.value === '') {
        return;
      }
    }

    setOpcion([...opcion, { id: crypto.randomUUID(), value: '' }]);
  };

  const deleteInput = (id: string) => {
    const newOpcion = opcion.filter((item) => item.id !== id);
    setOpcion(newOpcion);
  };

  const getOpcion = () => {
    return opcion.filter((item) => item.value !== '').map((item) => item.value);
  };

  useEffect(() => {
    setTrabajo((prev) => ({
      ...prev,
      [text.toLowerCase()]: getOpcion(),
    }));
  }, [opcion]);
  return (
    <div className="flex flex-col items-center mt-4">
      <div className="w-full">
        <label className={`font-medium block ${textClass}`}>{text}</label>
      </div>
      <div className="w-full flex flex-col gap-3">
        {opcion.map((item) => (
          <div key={item.id} className='flex items-center gap-4'>
            <input
              type="text"
              value={item.value}
              onChange={(e) => handleChange(e, item.id)}
              className={`bg-zinc-300 rounded-sm outline-none valid:pl-2 w-full ${inputClass}`}
            />
            <div onClick={() => deleteInput(item.id)} className='bg-red-600 rounded-full p-[1px] cursor-pointer'>
              <Minus className='text-white' />
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={addNewInput}
        className={`rounded-full border-2 mt-2 border-black cursor-pointer ${iconClass}`}
      >
        <Plus />
      </div>
    </div>
  );
};
