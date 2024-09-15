export const TextTarea = ({
  value,
  text,
  placeholder,
  setDescripcion,
}: {
  value: string;
  text: string;
  placeholder?: string;
  setDescripcion: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <label className="dark:text-white font-bold text-sm md:text-base">{text}</label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => setDescripcion(e.target.value)}
        name="descripcion"
        className="outline-none p-2 font-light  shadow drop-shadow rounded dark:bg-zinc-700 dark:text-white placeholder:text-xs valid:text-xs w-full max-w-[450px] h-28"
      ></textarea>
    </>
  );
};
