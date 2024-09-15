export const Inputs = ({
  type,
  placeholder,
  name,
  value,
  format,
  setProp,
}: {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  format: string;
  setProp: (React.Dispatch<React.SetStateAction<string>>) | undefined;
}) => {
  return (
    <>
      <section className="flex flex-col items-center w-full sm:px-4">
        <div className="w-full flex flex-col md:flex-row items-center md:items-end md:gap-4">
          <label className="text-sm md:text-base dark:text-white font-bold">{placeholder}</label>
          <input
            onChange={(e) => setProp && setProp(e.target.value)}
            className="outline-none valid:font-light border-b-2 bg-transparent border-principal-500 dark:border-zinc-300 dark:valid:text-white w-full max-w-[280px]"
            type={type}
            name={name}
            value={value}
            placeholder={format}
          />
        </div>
      </section>
    </>
  );
};
