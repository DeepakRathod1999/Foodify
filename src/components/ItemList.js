import React, { useEffect, useState } from 'react'
import {CDNurl} from '../utils/constant'

const ItemList = ({vegClassifier,title,itemlist}) => {
    const [show,setshow]=useState(false);

    const [newItem,setnewItem]=useState(itemlist)
    useEffect(()=>{
        demo()
        // console.log(vegClassifier)
     },[vegClassifier])
     const demo=()=>{
         const abc=itemlist
         const data=
         vegClassifier=="all"?itemlist:
         abc.filter((item)=>item?.card?.info?.itemAttribute?.vegClassifier?.toLowerCase() === vegClassifier?.toLowerCase())
 
         setnewItem(data);
     }
    const handler=()=>{
        setshow(!show)
    }
    
    //  console.log(newItem)
    return (
        newItem.length!=0 &&
        <div className=''>
                <span onClick={handler} className="border-b-2 h-10 m-3 p-2 cursor-pointer flex font-bold text-lg rounded-lg bg-white justify-between"><span>{title}({newItem.length})</span><span> ⬇️</span></span>
                {show&& newItem.map((item)=>(

               <div key={item.card.info.id} className='bg-white border-b-2 border-slate-600 rounded-lg flex justify-between gap-10 m-3 p-2 '>
                    <div className=' flex flex-col text-left '>
                    <span className='from-neutral-700 font-semibold text-lg'> {item.card.info.name}</span>
                    {item?.card?.info?.price &&<span className='font-bold from-neutral-700 '>₹{item?.card?.info?.price/100}</span>}
                    {item?.card?.info?.ratings?.aggregatedRating?.rating&&<span className='from-neutral-700 font-semibold text-base'>⭐{item?.card?.info?.ratings?.aggregatedRating?.rating}({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</span>}
                    <div className='flex flex-wrap text-left text-slate-400'>{item.card.info.description}</div>
                    </div>
                    
                    {item?.card?.info?.imageId &&  <img className='rounded-lg h-[200px] w-[200px]'  src={CDNurl+item?.card?.info?.imageId}  />}
                    
                    <button className={item?.card?.info?.imageId?'bg-white text-green-500 rounded-lg text-right mx-[800px] my-36 px-6 py-2 absolute':'bg-white text-green-500 rounded-lg text-right mx-[800px] my-3 px-6 bg-opacity-0 absolute'}>ADD</button>
                    
                    
                    </div>
                    ))}

        </div>
        
        
      
    )
}

export default ItemList
