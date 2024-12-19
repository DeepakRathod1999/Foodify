import React from 'react'
import {data as mockdata} from '../utils/constant';
import RestroCard from './RestroCard';
import {useState,useEffect} from "react";
import home from '../css/home.css'
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";
const Home = () => {
    const [listOfRestaurent,setListofRestaurent]=useState([]);
    const [filteredRestaurent,setFilteredRestaurent]=useState([]);
    useEffect(()=>{
        // fetchData(); 
                setListofRestaurent(mockdata);
                setFilteredRestaurent(mockdata)
        // console.log(filteredRestaurent);
        
    },[]); 

    const fetchData=async()=>{
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const data= await response.json();
        setListofRestaurent(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurent(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(filteredRestaurent);
       
    }
   const  searchbar=(e)=>{
    
    const filterdata=listOfRestaurent.filter((res)=>res.info.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredRestaurent(filterdata);
   }
   const allrestro=()=>{
    setFilteredRestaurent(listOfRestaurent);
   }
   const toprestro=()=>{
    // console.log("clicked");
    const top=listOfRestaurent.filter((res)=>res.info.avgRating>4.5);
    setFilteredRestaurent(top);
   }

 //return <Shimmer/>
    return listOfRestaurent.length==0?<Shimmer/>:(
       
         <div className='font-poppins mt-40'>
            <div className='  flex  justify-center  p-1'>
                <input className=' w-96 m-2 p-2 rounded-lg text-xl border border-solid border-black' placeholder='Search Restaurents' onChange={searchbar}/>
            </div>
            <div className='mx-4 mb-5 px-4 gap-10 flex  justify-center  '>
                    <button className='px-4 py-2 hover:scale-110 ease-in duration-300 text-neutral-100 bg-green-700 rounded-lg' onClick={allrestro}>All Restaurent</button>
                    <button className='px-4 py-2 hover:scale-110 ease-in duration-300 text-neutral-100 bg-red-600 rounded-lg' onClick={toprestro}>Top Rated Restaurent</button>
            </div>
            {filteredRestaurent.length== 0&&<div className=' flex justify-center h-screen w-auto  text-2xl font-bold text-white' >There  are No  Matching Restaurants Found !!</div >}
            <div className=' flex flex-wrap justify-center z-10  '>
                {filteredRestaurent.map((restaurent)=>(
                     <Link key={restaurent.info.id} to={`/restaurent/${restaurent.info.id}`}><RestroCard resdata={restaurent}/></Link>
                    ))}
            </div>
            
        </div>
       
   )
}

export default Home
