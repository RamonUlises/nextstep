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
    <article className="bg-gradient-to-l to-principal-600 from-principal-700 rounded-2xl -mt-8 z-20 py-4 px-8 opacity-90">
      <figure className="flex flex-col items-center mt-4">
        {imagen !== 'sin-imagen' ? (
          <div className="bg-principal-600 text-white rounded-full shadow-xl drop-shadow-xl">
            <img src={imagen} alt="foto de perfil" className="" />
          </div>
        ) : (
          <div className="bg-white text-white rounded-full shadow-xl drop-shadow-xl w-auto h-auto p-8">
            <UserRoundXIcon
              width={60}
              height={60}
              className="text-principal-600"
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
        <Estrellas value={value} />
      </figure>
    </article>
  );
};
