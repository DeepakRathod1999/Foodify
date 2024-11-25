import React from 'react'
import {data as mockdata} from '../utils/constant';
import RestroCard from './RestroCard';
import {useState,useEffect} from "react";
import home from '../css/home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    const [listOfRestaurent,setListofRestaurent]=useState([]);
    const [filteredRestaurent,setFilteredRestaurent]=useState([]);
//    let str='https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4087934&lng=76.5603828&restaurantId=417293&submitAction=ENTER'
    
    useEffect(()=>{
        // fetchData(); 
        setListofRestaurent(mockdata);
        setFilteredRestaurent(mockdata)
        console.log(mockdata);
    },[]);

    const fetchData=async()=>{
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const data= await response.json();
        setListofRestaurent(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurent(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(filteredRestaurent);
       
    }
   const  searchbar=(e)=>{
    
    const filterdata=listOfRestaurent.filter((res)=>res.info.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredRestaurent(filterdata);
   }
   const allrestro=()=>{
    setFilteredRestaurent(listOfRestaurent);
   }
   const toprestro=()=>{
    console.log("clicked");
    const top=listOfRestaurent.filter((res)=>res.info.avgRating>4);
    setFilteredRestaurent(top);
   }
   const lowrestro=()=>{
    const top=listOfRestaurent.filter((res)=>res.info.avgRating<4);
    setFilteredRestaurent(top);
   }
  
    return (
       
         <div>
            <div className='home'>
                <input className='search Restaurent' placeholder='Search' onChange={searchbar}/>
                <button className='top-restro'onClick={allrestro}>All Restaurent</button>
                <button className='top-restro'onClick={toprestro}>Top Rated Restaurent</button>
                <button className='top-restro'onClick={lowrestro}>Low Rated Restaurent</button>         
                
            </div>
             <div className="RestaurentContainer" >
                {filteredRestaurent.map((restaurent)=>(
                     <RestroCard key={restaurent.info.id}resdata={restaurent}/>
                    ))}
            </div>
            
        </div>
       
    )
}

export default Home
