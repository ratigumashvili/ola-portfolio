import { NavLink } from "react-router-dom";
import { navBar } from "../../data";

const Header = () => {
  return (
    <header>
      <nav className="main-navigation">
        <ul>
          {navBar.map((item) => (
            <li key={item.name}>
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
