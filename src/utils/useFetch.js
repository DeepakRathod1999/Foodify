import { useEffect, useState } from "react";
import { pageurl } from "./constant";

export const useFetch=(id)=>{
    const [resInfo, setResinfo] = useState(null);
    const proxy = "https://cors.bridged.cc/";
    useEffect(() => {
        fetchPage();
      }, []);
    
      const fetchPage = async () => {
        try{
          const data = await fetch(proxy + pageurl + id);
          const response = await data.json();    
         setResinfo(response.data);
        //  console.log(resInfo);
        }catch(err){
          // console.log(err.messege);
          return null

         }
      };
      return resInfo;  
}