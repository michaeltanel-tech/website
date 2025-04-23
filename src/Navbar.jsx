import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-menu">
          <li>
            <NavLink to="/" activeClassName="active">
              Summary
            </NavLink>
          </li>
          <li>
            <NavLink to="/work-experience" activeClassName="active">
              Work Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" activeClassName="active">
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/Interests" activeClassName="active">
              Interests
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
