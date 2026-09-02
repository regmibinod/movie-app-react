import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="nav-logo">Movie App</h1>

      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-item">Home</NavLink>
        </li>
        <li>
          <NavLink to="/favourites" className="nav-item">Favourites</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
