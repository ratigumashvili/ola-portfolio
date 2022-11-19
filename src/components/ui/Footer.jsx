import { contacts } from "../../data";

const Footer = () => {
  return (
    <footer>
      <div className="icons">
        {contacts.map(({ id, url, title, icon }) => (
          <a key={id} href={url} target="blank" title={title}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 496 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={icon}></path>
            </svg>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
