import React from "react";
import  "../css/nav.css";
import loginlogo from "../utils/loginlogo.svg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {useSelector} from 'react-redux'
export const Nav = () => {
 const {status,onlineStatus}= useOnlineStatus();
 const cartItems=useSelector((store)=>store.cart.items)
  return (
  
      <div className="  font-poppins flex p-2 justify-between border-gray-200 border-b-2  bg-slate-800 fixed top-0  left-0 right-0 z-50   ">
       <Link className="flex flex-row text-center items-center" to='/'>
       <svg className="rounded-lg h-12 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#f97e0b" d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1L61.1 224zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L64 352c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16l0 16c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-16z"/></svg>
       <span className="text-white text-4xl font-extrabold ">FoodBazaar</span>
       </Link>
       <div className="flex items-center">
       <ul className="flex  px-4 m-4 text-lg text-white font-bold gap-4 align-text-bottom">
            <li>{status} {onlineStatus?"✅":"🔴"}</li>
            <li className="hover:scale-110 ease-in duration-300"><Link to="/"  >Home</Link></li>
            <li className="hover:scale-110 ease-in duration-300"><Link to="/about" >AboutUs</Link></li>
            <li className="hover:scale-110 ease-in duration-300"><Link to="/contact" >ContactUs</Link></li>
            <li className="hover:scale-110 ease-in duration-300"><Link to='/grocery'>Grocery</Link></li>
            <li className="hover:scale-110 ease-in duration-300"><Link to='/cart'><span className="mx-4 text-black relative">{cartItems?.length}</span><svg xmlns="http://www.w3.org/2000/svg" className=" -mt-7 h-10 w-10" viewBox="0 0 576 512"><path fill="#fafafa" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></Link></li>
            <li className="hover:scale-110 ease-in duration-300"><Link to='/login'>login</Link></li> 
        </ul>
       </div>
        
   
    </div>

  );
};

export default Nav;