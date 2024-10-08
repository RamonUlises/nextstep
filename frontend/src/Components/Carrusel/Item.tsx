import { Link } from 'react-router-dom';

export const Item = ({
  imagen,
  type,
  description,
  taller,
}: {
  imagen: string;
  type: string;
  description: string;
  taller: string;
}) => {
  return (
    <div className="item">
      <img src={imagen} alt="imagen del item" />
      <div className="content">
        <h2 className="title text-[2em] md:text-[4em] font-bold leading-[1.3]">
          Conoce más sobre...
        </h2>
        <p className="type text-[2em] md:text-[3em] font-bold leading-[1.3]">
          {type}
        </p>
        <p className="description">{description}</p>
        <div className="button">
          <Link className='bg-principal-600 px-4 py-3 rounded-md hover:scale-110 dark:bg-zinc-700' to={`/talleres-info#${taller}`}>Ver más</Link>
        </div>
      </div>
    </div>
  );
};
