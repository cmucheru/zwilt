import React from "react";
import "../styles/NavBar.css";
import { ReactComponent as NavBarIcon } from "../assets/navbar-ico.svg";

const Logo = () => <NavBarIcon alt="Company Logo" className="logo" />;

const NavLink = ({ children }) => <div className="nav-link">{children}</div>;

const Button = ({ children }) => <div className="button">{children}</div>;

const NavBar = () => (
  <header className="header">
    <Logo />
    <nav className="nav">
      {["Find Work", "Find Talent", "Articles", "About Us", "Contact Us"].map(
        (item, index) => (
          <NavLink key={index}>{item}</NavLink>
        )
      )}
    </nav>
    <div className="user-actions">
      <div className="login-link">Log In</div>
      <Button>Join Now</Button>
    </div>
  </header>
);

export default NavBar;
