import React, { useEffect, useState } from 'react'
import {CDNurl} from '../utils/constant'

import Item from './Item'
const NestedCards = ({vegClassifier,list}) => {
    const [showlist,setshowlist]=useState(false);
    
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
                    
                        <Item key={item.card.info.id} item={item}/>
                        ))}
         </div>
    )
}

export default NestedCards
