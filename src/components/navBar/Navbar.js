import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import close from "../../assets/icons8-close-window-50.png";
import menuIcone from "../../assets/icons8-hamburger-menu-24.png";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { logout } = useAuth0();
  return (
    <nav className="navbar">
      <h3 className="logo">Logo</h3>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/todo" className="todo">
          <li>Todo</li>
        </Link>
        <Link to="/card" className="card">
          <li>Card</li>
        </Link>

        <Link to="/post" className="post">
          <li>Post</li>
        </Link>
        <Link to="/about" className="about">
          <li>About</li>
        </Link>
        <Link
          onClick={logout}
          to={window.location.origin + "/"}
          className="logout"
        >
          <li>Logout</li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => {
          setIsMobile(!isMobile);
        }}
      >
        {isMobile ? (
          <img className="close-icon" src={close}></img>
        ) : (
          <img src={menuIcone}></img>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
