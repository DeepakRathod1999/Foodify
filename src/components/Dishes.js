import React, { useEffect, useState } from 'react'
import {CDNurl} from '../utils/constant'
import { useParams } from 'react-router-dom';
const Dishes = ({dishes,list}) => {
    // console.log(list)
    const{dishlist }=useParams();
    const [filteredDish,setFilteredDish]=useState([]);
    useEffect(()=>{setFilteredDish(list.filter((item)=>item.card.info.name.toLowerCase().includes(dishes.toLowerCase())))},[dishes])
    



    

    return (
        filteredDish.length!=0?<div>
            
            {filteredDish.map((item,index)=>(
             <div  key={index} className='bg-white rounded-lg flex justify-between gap-10 m-3 p-2 '>
                 <div className=' flex flex-col text-left '>
                 <span className='from-neutral-700 font-semibold text-lg'> {item.card.info.name}</span>
                 <span className='font-bold from-neutral-700 '>₹{item.card.info.price/100}</span>
                 <span className='from-neutral-700 font-semibold text-base'>⭐{item?.card?.info?.ratings?.aggregatedRating?.rating}({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</span>
                 <div className='flex flex-wrap text-left text-slate-400'>{item.card.info.description}</div>
                 </div>
             
                 <img className='rounded-lg h-[200px] w-[200px]' src={CDNurl+item.card.info.imageId} alt='no image'/>
                 <button className='bg-white text-green-500 rounded-lg text-right mx-[800px] my-36 px-6 py-3 absolute'>ADD</button>
             
         
     </div>
            ))}
        </div>:<div>There are No Matching Dishes At our Restaurent</div>
    )
}

export default Dishes