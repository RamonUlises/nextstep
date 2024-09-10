export const TextTarea = ({
  value,
  text,
  setDescripcion,
}: {
  value: string;
  text: string;
  setDescripcion: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <label className="text-sm dark:text-white">{text}</label>
      <textarea
        value={value}
        onChange={(e) => setDescripcion(e.target.value)}
        name="descripcion"
        className="outline-none p-2 font-light  shadow drop-shadow rounded dark:bg-zinc-700 dark:text-white"
      ></textarea>
    </>
  );
};
