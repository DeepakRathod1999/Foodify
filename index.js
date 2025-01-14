import  ReactDOM  from "react-dom/client";
import App from "./App";
import {RouterProvider} from 'react-router-dom';
import { allroutes } from "./src/Routes/allRoutes";


const root =ReactDOM.createRoot(document.getElementById("root"));

    
    root.render(
      
        <RouterProvider router={allroutes}/>
    );