import { lazy,Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Error from "./Error";
import Shimmer from "../components/Shimmer";
import CartPage from '../components/CartPage'

const  RestaurentPage=lazy(()=>import("../components/RestaurentPage"));
const Grocery=lazy(()=>import('../components/Grocery')); 

export const allroutes=createBrowserRouter([
    {
        path:"/",
        element:<App/> ,
        children:[
            {
            path:"/",
            element:<Home/>,
            },
            {
                path:"/about",
                element:<About/>

            },
            {
                path:"/contact",
                element:<Contact/>  
            },
            {
                path:'/grocery',
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            }
            ,
            {
                path:"/restaurent/:id",
                element:<Suspense fallback={<Shimmer/>}><RestaurentPage/></Suspense>
            },
            {
                path:'/cart',
                element:<CartPage/>
            }
            ],
        errorElement:<Error/> 
    }
]);

 