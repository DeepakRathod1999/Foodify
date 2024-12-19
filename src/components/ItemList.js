import React, { useState } from 'react'
import {CDNurl} from '../utils/constant'

const ItemList = ({title,itemlist}) => {
    const [show,setshow]=useState(false);
    const handler=()=>{
        setshow(!show)
    }
    
    return (
        <div className=''>
                <span onClick={handler} className="border-b-2 border-slate-600 h-10 m-3 p-2 cursor-pointer flex font-bold text-lg rounded-lg bg-white justify-between"><span>{title}({itemlist.length})</span><span> ⬇️</span></span>
                {show&& itemlist.map((item)=>(

               <div key={item.card.info.id} className='bg-white border-b-2 border-slate-600 rounded-lg flex justify-between gap-10 m-3 p-2 '>
                    <div className=' flex flex-col text-left '>
                        <span className='from-neutral-700 font-semibold text-lg'> {item.card.info.name}</span>
                    <span className='font-bold from-neutral-700 '>₹{item.card.info.price/100}</span>
                    <span className='from-neutral-700 font-semibold text-base'>⭐{item?.card?.info?.ratings?.aggregatedRating?.rating}({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</span>
                    <div className='flex flex-wrap text-left text-slate-400'>{item.card.info.description}</div>
                    </div>
                    
                    <img className='rounded-lg h-[200px] w-[200px]' src={CDNurl+item.card.info.imageId}  />
                    <button className='bg-white text-green-500 rounded-lg text-right mx-[800px] my-36 px-6 py-3 absolute'>ADD</button>
                    
                    
                    </div>
                    ))}

        </div>
        
        
      
    )
}

export default ItemList
