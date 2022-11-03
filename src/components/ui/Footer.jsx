import { FaGithub, FaTwitter, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="icons">
        <a
          href="https://github.com/ratigumashvili"
          target="blank"
          title="View my GitHub account"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/ratigumashvili"
          target="blank"
          title="Follow me on Twitter"
        >
          <FaTwitter />
        </a>
        <a href="mailto:ratigumashvili@gmail.com" title="Send me an email">
          <FaRegEnvelope />
        </a>
        <a href="tel:+995551005473" title="Call me">
          <FaPhoneAlt />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
