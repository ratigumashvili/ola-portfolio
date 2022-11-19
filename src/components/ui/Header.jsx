import { NavLink } from "react-router-dom";
import { navBar } from "../../data";

const Header = () => {
  return (
    <header>
      <nav className="main-navigation">
        <ul>
          {navBar.map(({ name, path }) => (
            <li key={name}>
              <NavLink to={path}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
