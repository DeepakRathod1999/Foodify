import React from "react";
import  "../css/nav.css";
import logo from "../utils/logo.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Nav = () => {
 const {status,onlineStatus}= useOnlineStatus();
  return (
  
      <div className="  font-poppins flex p-2 justify-between border-gray-200 border-b-2  bg-slate-800 fixed top-0  left-0 right-0 z-50   ">
        <img className="w-20 rounded-lg"  src={logo} alt="Foodify"/>
       <div className="flex items-center">
       <ul className="flex  px-4 m-4 text-lg text-white font-bold gap-4 align-text-bottom">
            <li>{status} {onlineStatus?"✅":"🔴"}</li>
            <li><Link to="/"  >Home</Link></li>
            <li><Link to="/about" >AboutUs</Link></li>
            <li><Link to="/contact" >ContactUs</Link></li>
            <li><Link to='/grocery'>Grocery</Link></li>
            <li>Cart</li>
            <li><button>login</button></li> 
        </ul>
       </div>
        
   
    </div>

  );
};

export default Nav;