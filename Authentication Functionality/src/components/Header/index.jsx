import { NavLink } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <>
      <ul className="nav-header">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
      </ul>
    </>
  );
};

export default Header;
