import { contacts } from "../../data";

const Footer = () => {
  return (
    <footer>
      <div className="icons">
        {contacts.map((item) => (
          <a key={item.id} href={item.url} target="blank" title={item.title}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 496 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={item.icon}></path>
            </svg>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
