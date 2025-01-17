import React, { useState } from 'react'
import { CDNurl } from "../utils/constant";
import {useDispatch, useSelector} from 'react-redux'
import {addItem, deleteSingle} from '../utils/slices/cartSlice'

const Item = ({item}) => {
  const [added,setadded]=useState(false)
  const dispatch = useDispatch()
  
  const handleAdd=(item)=>{
    const data=item.card.info
    const payload={
      id:data.id,
      name:data.name,
      price:data.price,
      category:data.category,
      imageId:data.imageId,
      attribute:data.itemAttribute.vegClassifier,
      quantity:1
    }
    if(added){
      setadded(false)
      dispatch(deleteSingle(payload.id))
    }
    else{
      setadded(true)
      dispatch(addItem(payload))

    }


  
 }
 

    return (
       
        <div
              className="bg-white border-b-2 w-11/12 border-slate-600 rounded-lg flex justify-between gap-10 m-3 p-2 "
            >
              <div className=" flex flex-col text-left ">
                <span className="from-neutral-700 font-semibold text-lg">
                  {" "}
                  {item.card.info.name}
                </span>
                {item?.card?.info?.price && (
                  <span className="font-bold from-neutral-700 ">
                    ₹{item?.card?.info?.price / 100}
                  </span>
                )}
                {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                  <span className="from-neutral-700 font-semibold text-base">
                    ⭐{item?.card?.info?.ratings?.aggregatedRating?.rating}(
                    {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}
                    )
                  </span>
                )}
                <div className="flex flex-wrap text-left text-slate-400">
                  {item.card.info.description}
                </div>
              </div>

              {item?.card?.info?.imageId && (
                <img
                  className="rounded-lg h-[200px] w-[200px]"
                  src={CDNurl + item?.card?.info?.imageId}
                />
              )}
                {    added? <button onClick={()=>handleAdd(item)} className={item?.card?.info?.imageId &&'bg-black text-white  rounded-lg text-right mx-[720px] my-36 px-6 py-2 absolute'}>Selected</button>:   <button
                className={
                  item?.card?.info?.imageId
                    ? "bg-white text-green-500 rounded-lg text-right mx-[720px] my-36 px-6 py-2 absolute"
                    : "bg-white text-green-500 rounded-lg text-right mx-[690px] my-5 px-6 bg-opacity-0 absolute"
                }
                onClick={()=>handleAdd(item)}
              >
                ADD
              </button>
}
            </div>
    )
}

export default Item
