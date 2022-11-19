import { contacts } from "../data";

const Contact = () => {
  return (
    <div className="page">
      <div className="title-holder">
        <h1>Contact</h1>
      </div>
      <h3>Get in touch</h3>
      <ul className="list">
        {contacts.map(({ id, url, title }) => (
          <li key={id}>
            <a href={url} target="blank">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
