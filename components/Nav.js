import React from "react";
import "../css/nav.css";
import logo from "../img/logo.jpg";
const Nav = () => {
  return (
    <div className="nav-container">
        <img  className="logo" src={logo} alt="Foodify" />
      
        <ul className="navbar">
            <li>Home</li>
            <li>About Us</li>
            <li>Cart</li>
        </ul>
      </div>

  );
};

export default Nav;
