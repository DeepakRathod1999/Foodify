import React from "react";
import  "../css/nav.css";
import logo from "../utils/logo.svg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {useSelector} from 'react-redux'
export const Nav = () => {
 const {status,onlineStatus}= useOnlineStatus();
 const cartItems=useSelector((store)=>store.cart.items)
  return (
  
      <div className="  font-poppins flex p-2 justify-between border-gray-200 border-b-2  bg-slate-800 fixed top-0  left-0 right-0 z-50   ">
        <img className=" h-36 rounded-lg"  src={logo} alt="Foodify"/>
       <div className="flex items-center">
       <ul className="flex  px-4 m-4 text-lg text-white font-bold gap-4 align-text-bottom">
            <li>{status} {onlineStatus?"✅":"🔴"}</li>
            <li><Link to="/"  >Home</Link></li>
            <li><Link to="/about" >AboutUs</Link></li>
            <li><Link to="/contact" >ContactUs</Link></li>
            <li><Link to='/grocery'>Grocery</Link></li>
            <li><Link to='/cart'><span className="mx-4  relative">{cartItems?.length}</span><svg xmlns="http://www.w3.org/2000/svg" className=" -mt-7 h-10 w-10" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></Link></li>
            <li><button>login</button></li> 
        </ul>
       </div>
        
   
    </div>

  );
};

export default Nav;