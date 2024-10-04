export const DatosArray = ({
  title,
  text,
}: {
  title: string;
  text: string[];
}) => {
  return (
    <div className="flex flex-col px-5">
      <h5 className="font-medium text-base">{title}</h5>
      <ul className="list-disc ml-8 mt-6">
        {text.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </div>
  );
};
