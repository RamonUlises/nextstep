export const Datos = ({
  title,
  text,
}: {
  title: string;
  text: string | string[];
}) => {
  return (
    <div className="flex items-center justify-around">
      <h5 className="font-medium text-base">{title}</h5>
      {typeof text !== 'string' ? (
        <ul className="list-disc">
          {text.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};
