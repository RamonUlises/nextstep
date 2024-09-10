import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';

export const Options = ({
  text,
  default: option,
  setOption,
}: {
  text: string;
  default: boolean;
  setOption: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleOption = (value: string) => {
    if (value === 'Si') {
      setOption(true);
    } else {
      setOption(false);
    }
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <label className='dark:text-white'>{text}</label>
      <Select onValueChange={handleOption}>
        <SelectTrigger className="w-[80px] justify-evenly border-none bg-slate-300 dark:bg-zinc-700 dark:text-white">
          <SelectValue placeholder={option ? 'Si' : 'No'} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem className="cursor-pointer" value="Si">
              Si
            </SelectItem>
            <SelectItem className="cursor-pointer" value="No">
              No
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
