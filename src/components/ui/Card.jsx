import { FaExternalLinkAlt } from "react-icons/fa";

const Card = ({ item }) => {
  const { title, stage, tecnologies, url, client, cover } = item;
  return (
    <article className="card">
      <div className="card-header" style={{ background: `url(${cover})` }}>
        <span>{stage}</span>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-text">
          <b>Technologies:</b> {tecnologies.join(", ")}
        </div>
      </div>
      <div className="card-footer">
        <a href={url} target="blank" title="Visit url">
          <FaExternalLinkAlt />
        </a>
        {client && (
          <div>
            <b>Client:</b> {client}
          </div>
        )}
      </div>
    </article>
  );
};

export default Card;
