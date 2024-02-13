import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav >
      <ul className="header__nav">
        <NavLink className="header__nav-link" to="/">
          <li>ACCUEIL</li>
        </NavLink>
        <NavLink className="header__nav-link" to="/a-propos">
          <li>À PROPOS</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
