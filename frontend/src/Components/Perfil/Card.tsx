import { UserRoundXIcon, Phone, Mail, BadgeCheck } from 'lucide-react';
import { Estrellas } from './Estrellas';

export const Card = ({
  imagen,
  nombre,
  telefono,
  email,
  value,
}: {
  imagen: string;
  nombre: string;
  telefono: string;
  email: string;
  value: number;
}) => {
  return (
    <article className="bg-gradient-to-l to-principal-600 from-principal-700 rounded-2xl -mt-8 z-20 py-4 px-8 opacity-90 max-w-[350px] w-full mx-auto dark:to-zinc-800 dark:from-zinc-700">
      <figure className="flex flex-col items-center mt-4">
        {imagen !== 'sin-imagen' ? (
          <div className="bg-transparent rounded-full w-[150px] h-[150px] flex items-center justify-center overflow-hidden">
            <img src={imagen} alt="foto de perfil" className="w-full object-cover" />
          </div>
        ) : (
          <div className="bg-white text-white rounded-full shadow-xl drop-shadow-xl w-auto h-auto p-8 dark:bg-zinc-700">
            <UserRoundXIcon
              width={60}
              height={60}
              className="text-principal-600 dark:text-white"
            />
          </div>
        )}
        <div className="flex items-center gap-3 mt-8 text-white">
          <BadgeCheck />
          <h4 className="font-bold">{nombre}</h4>
        </div>
        <div className="flex items-center gap-3 mt-16 text-white">
          <Phone />
          <p>+505 {telefono}</p>
        </div>
        <div className="flex items-center gap-3 mt-4 text-white">
          <Mail />
          <p>{email}</p>
        </div>
        <Estrellas color='text-white' value={value} />
      </figure>
    </article>
  );
};
