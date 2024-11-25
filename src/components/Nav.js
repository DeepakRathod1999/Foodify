import React from "react";
import  "../css/nav.css";
import logo from "../utils/logo.jpg";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="nav-container">
        <img  className="logo" src={logo} alt="Foodify" />
      
        <ul className="navbar">
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about" >ABoutUs</Link></li>
            <li><Link to="/contact">ContactUs</Link></li>
            <li>Cart</li>
            <button>login</button>
        </ul>
      </div>

  );
};

export default Nav;