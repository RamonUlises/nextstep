export const Item = ({
  imagen,
  title,
  type,
  description,
}: {
  imagen: string;
  title: string;
  type: string;
  description: string;
}) => {
  return (
    <div className="item">
      <img src={imagen} alt="imagen del item" />
      <div className="content">
        <h2 className="title text-[4em] md:text-[5em] font-bold leading-[1.3]">{title}</h2>
        <p className="type text-[2em] md:text-[3em] font-bold leading-[1.3]">{type}</p>
        <p className="description">{description}</p>
        <div className="button">
          <button>Ver más</button>
        </div>
      </div>
    </div>
  );
};
