import { Check } from 'lucide-react';

export const MostrarInfo = ({ option }: { option: string[]}) => {
  return (
    <>
      {option.map((op, index) => (
        <div className="flex items-center gap-4" key={index}>
          <Check className="text-green-600" width={35} height={35} />
          <p>{op}</p>
        </div>
      ))}
    </>
  );
};
