import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';

export const Options = ({ text } : { text: string}) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <label>{text}</label>
      <Select>
        <SelectTrigger className="w-[80px] justify-evenly border-none bg-slate-300 dark:bg-zinc-700 dark:text-white">
          <SelectValue placeholder="No" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem className="cursor-pointer" value="si">
              Si
            </SelectItem>
            <SelectItem className="cursor-pointer" value="no">
              No
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
