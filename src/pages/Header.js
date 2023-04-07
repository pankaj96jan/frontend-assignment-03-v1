import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/company-info">Company Info</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
