import { contacts } from "../data";

const Contact = () => {
  return (
    <div className="page">
      <div className="title-holder">
        <h1>Contact</h1>
      </div>
      <h3>Get in touch</h3>
      <ul className="list">
        {contacts.map((item) => (
          <li key={item.id}>
            <a href={item.url} target="blank">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
