import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pageurl, CDNurl } from "../utils/constant";
import Shimmer from "../components/Shimmer";
import "../css/page.css";
import { useFetch } from "../utils/useFetch";
import ItemList from "./ItemList";
import NestedItemlist from "./NestedItemlist";
const RestaurentPage = () => {
 
  const { id } = useParams();
  const resInfo = useFetch(id);
  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cloudinaryImageId,
    cuisines,
    sla,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
  } = resInfo?.cards[2]?.card?.card?.info;
  
  const menuCard = resInfo?.cards.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
  );
  const menu = menuCard?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  // const menu = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // console.log(menu)

  const NestedItemCategory=menu.filter(
    (menu)=>
    menu.card.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  )
//  console.log(NestedItemCategory)

  const ItemCategory = menu.filter(
    (menu) =>
      menu.card.card["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  
 
  return (
    <div className="font-serif my-36 p-5">
      <div
        className=" m-auto w-4/5 p-5 rounded-lg bg-slate-200 flex justify-between"
      >
        <div
          className=" gap-5 flex flex-col"
        >
          <span className="text-2xl font-bold">{name}</span>
          <span className="font-bold text-base">
            {"⭐"+avgRatingString}({totalRatingsString})<span className="mx-3">{costForTwoMessage}</span>
          </span>
          <span className="text-orange-500 underline text-base"
          >
            {cuisines?.join(",")}
          </span>
          <span className="text-base">
            {sla?.maxDeliveryTime}- {sla?.minDeliveryTime}mins
          </span>
        </div>

        <div>
          <img
            className="h-44 w-44  rounded-full"
            src={CDNurl + cloudinaryImageId}
          />
        </div>
      </div>
      <div
        className=" bg-slate-400 flex flex-col mt-7 mx-auto rounded-lg w-4/5 items-center text-center p-5"
      >
        <span className="font-bold text-xl">MENU</span>
        <input className="w-96 m-2 p-2 rounded-lg text-xl border border-solid border-black" type="text" placeholder="search for dishes" />
        <div className=" flex text-lg gap-5 ">
          <input type="radio" name="veg" />
          <label>veg</label>
          <input type="radio" name="nonveg " />
          <label>nonveg</label>
        </div>

        <div className="bg-slate-300  w-full m-5 p-5 ">
          <ul>

          {ItemCategory.map((items)=>(

              <div   key={items.card.card.title}>
               <ItemList title={items.card.card.title}itemlist={items.card.card.itemCards} />
              </div>
           ))}
         
          
          {NestedItemCategory.map((nested)=>(
            <div  key={nested.card.card.title}>
              <NestedItemlist title={nested.card.card.title}nestedlist={nested.card.card.categories}  />
            </div>            
          ))}


          </ul>
        </div>
       
          
          
        




      </div>
    </div>
  );
};

export default RestaurentPage;
