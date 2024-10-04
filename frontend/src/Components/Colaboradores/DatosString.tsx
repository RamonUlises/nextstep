export const DatosString = ({ text, info} : { text: string; info: string }) => {
  return (
    <div className="flex flex-wrap gap-1 justify-evenly">
      <h4 className="font-semibold mr-4">{info}:</h4>
      <p>{text}.</p>
    </div>
  );
};
