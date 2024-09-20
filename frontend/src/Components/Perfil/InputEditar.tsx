export const InputEditar = ({
  type,
  name,
  value,
  placeholder,
  handleChange,
}: {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };

  return (
    <div className="flex gap-2">
      <label className="font-medium">{name.charAt(0).toUpperCase() + name.slice(1)}</label>
      <input type={type} name={name} value={value} onChange={onHandleChange} className="border-b-2 border-secundario-600 pl-2 outline-none dark:bg-zinc-700 dark:border-white" placeholder={placeholder} />
    </div>
  );
};
