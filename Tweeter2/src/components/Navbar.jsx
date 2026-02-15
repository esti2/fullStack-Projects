import { NavLink } from "react-router";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav class="header">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Profile">Profile</NavLink>
        </li>
        {/* <li>
          <NavLink to="/about">About</NavLink>
        </li> */}
      </ul>
    </nav>
  );
}
