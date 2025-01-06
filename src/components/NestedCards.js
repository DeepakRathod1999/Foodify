import React, { useEffect, useState } from 'react'
import {CDNurl} from '../utils/constant'


const NestedCards = ({vegClassifier,list}) => {
    const [showlist,setshowlist]=useState(false);
    // const [card,setCard]=useState(list)
    // useEffect(()=>{
    //     demo();
    //     // console.log(card)
    // },[vegClassifier])
    const handler=()=>{
        setshowlist(!showlist);
       }



       const demo=()=>{
        const abc=list
        const data=vegClassifier=="all"?list:
        {title:abc.title,itemCards:abc.itemCards.filter((item)=>item?.card?.info?.itemAttribute?.vegClassifier.toLowerCase()===vegClassifier.toLowerCase())}
        // [abc.itemCards.filter((item)=>item?.card?.info?.itemAttribute?.vegClassifier.toLowerCase()===vegClassifier.toLowerCase())]
        setCard(data)
       }
    return (
        list?.itemCards?.length!=0 &&
        <div>
            
            <div onClick={handler} className=' border-b-2 cursor-pointer border-slate-600 text-base font-semibold  bg-white rounded-lg h-10 m-3 p-2 flex text-left justify-between' ><span>{list?.title}({list?.itemCards?.length})</span><span>🔻</span></div>
                  {showlist && list.itemCards.map((item)=>(
                                <div  key={item.card.info.id} className='bg-white rounded-lg flex justify-between gap-10 m-3 p-2 '>
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
         </div>
    )
}

export default NestedCards
