export const Inputs = ({
  type,
  placeholder,
  name,
}: {
  type: string;
  placeholder: string;
  name: string;
}) => {
  return (
    <>
      <section className="flex flex-col items-center w-full max-w-[400px] sm:px-4">
        <div className="w-full max-w-[300px]">
          <input
            className="outline-none valid:font-light w-full border-b-2 bg-transparent border-principal-500 dark:border-zinc-300"
            type={type}
            name={name}
          />
          <label className="text-sm  dark:text-white">{placeholder}</label>
        </div>
      </section>
    </>
  );
};
