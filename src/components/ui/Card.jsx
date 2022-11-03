const Card = ({ item }) => {
  const { title, stage, tecnologies, url, client, cover } = item;
  return (
    <div className="card">
      <div className="card-header" style={{ background: `url(${cover})` }}>
        <span>{stage}</span>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-text">Tecnologies: {tecnologies.join(", ")}</div>
      </div>
      <div className="card-footer">
        <a href={url} target="blank">
          Url
        </a>
        {client}
      </div>
    </div>
  );
};

export default Card;
