
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import RestaurentPage from "../components/RestaurentPage";

export const allroutes=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
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
                path:`/restaurentpage`,
                element:<RestaurentPage/>
            }]
    }
]);

