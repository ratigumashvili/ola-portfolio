import { Link } from "react-router-dom";
import { navBar } from "../../data";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          {navBar.map((item) => (
            <li key={item.name}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
