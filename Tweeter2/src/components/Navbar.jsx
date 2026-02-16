import { NavLink } from "react-router";
import "./Navbar.css";


export default function Navbar({ children }) {
  return (
    <>
      <nav className="header">

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/ProfilePage">Profile</NavLink>
          </li>
          {/* <li>
          <NavLink to="/about">About</NavLink>
        </li> */}
        </ul>
      </nav>
      <div className="page-content">
        {children}
      </div>
    </>
  );
}
