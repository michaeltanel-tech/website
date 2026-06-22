import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        Michael <span>Tanel</span>
      </NavLink>
      <ul className="navbar-menu">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/work-experience" className={({ isActive }) => (isActive ? "active" : "")}>
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" className={({ isActive }) => (isActive ? "active" : "")}>
            Education
          </NavLink>
        </li>
        <li>
          <NavLink to="/interests" className={({ isActive }) => (isActive ? "active" : "")}>
            Interests
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
