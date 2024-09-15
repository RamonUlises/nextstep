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
      <img src={imagen} alt="" />
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="type">{type}</p>
        <p className="description">{description}</p>
        <div className="button">
          <button>Ver más</button>
        </div>
      </div>
    </div>
  );
};
