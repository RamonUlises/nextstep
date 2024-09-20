export const TextAreaEditar = ({
  name,
  value,
  placeholder,
  handleChange,
}: {
  name: string;
  value: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) => {

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleChange(e);
  };

  return (
    <div>
      <label className="font-medium">{name.charAt(0).toUpperCase() + name.slice(1)}</label>
      <textarea name={name} value={value} onChange={onHandleChange} className="border-2 border-secundario-600 pl-2 outline-none w-full dark:bg-zinc-700 dark:border-white" placeholder={placeholder} rows={3} />
    </div>
  );
};
