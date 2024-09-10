export const Inputs = ({
  type,
  placeholder,
  name,
  value,
  setProp,
}: {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  setProp: (React.Dispatch<React.SetStateAction<string>>) | undefined;
}) => {
  return (
    <>
      <section className="flex flex-col items-center w-full max-w-[400px] sm:px-4">
        <div className="w-full max-w-[300px]">
          <input
            onChange={(e) => setProp && setProp(e.target.value)}
            className="outline-none valid:font-light w-full border-b-2 bg-transparent border-principal-500 dark:border-zinc-300 dark:valid:text-white"
            type={type}
            name={name}
            value={value}
          />
          <label className="text-sm  dark:text-white">{placeholder}</label>
        </div>
      </section>
    </>
  );
};
