import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pageurl, CDNurl } from "../utils/constant";
import Shimmer from "../components/Shimmer";
import "../css/page.css";
import { useFetch } from "../utils/useFetch";
import ItemList from "./ItemList";
import NestedItemlist from "./NestedItemlist";
import Dishes from "./Dishes";
const RestaurentPage = () => {
  const [dishes,setDishes]=useState('')
  const [vegClassifier,setVegClassifier]=useState('all')
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
  const changeHandler=(e)=>{
    setDishes(e.target.value)
  }

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
  const dishlist=  ItemCategory.flatMap((item)=>  item.card.card.itemCards||item.card.card.categories.flatMap((item)=>item.itemCards)||[] )

 const list =Array.from(new Map(dishlist.map((item)=>[item.card.info.id,item])).values())
  
 
  return (
    <div className="font-serif my-40 p-5">
      <div
        className=" m-auto w-4/5 p-5 rounded-lg bg-white flex justify-between"
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
        className=" bg-slate-100 flex flex-col mt-7 mx-auto rounded-lg w-4/5 items-center text-center p-5"
      >
              <span className="font-bold text-xl">MENU</span>

        <div className="inline-flex gap-6 p-2">
              <div className=" flex text-lg m-3 p-2 gap-5 ">
                      <input  className="relative size-4 appearance-none rounded-lg border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-lg before:bg-white checked:border-blue-600 checked:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" type="radio" name="vegClassifier" id="all" value="all"  onChange={(e)=>setVegClassifier(e.target.value)}/>
                      <label  htmlFor="all" className=" block text-md font-medium text-gray-900">all</label>
                      <input className="relative size-4 appearance-none rounded-lg border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-lg before:bg-white checked:border-green-600 checked:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" type="radio" name="vegClassifier" id="veg" value="veg" onChange={(e)=>setVegClassifier(e.target.value)}/>
                      <label htmlFor="veg" className="block text-md font-medium text-gray-900">veg</label>
                      <input className="relative size-4 appearance-none rounded-lg border border-gray-300 bg-white before:absolute before:inset-1  before:rounded-lg before:bg-white checked:border-red-600 checked:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2  focus-visible:outline-red-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" type="radio" name="vegClassifier" id="nonveg" value="nonveg" onChange={(e)=>setVegClassifier(e.target.value)}/>
                      <label className="block text-md font-medium text-gray-900" htmlFor="nonveg">nonveg</label>
                      {/* <span>{vegClassifier}</span> */}
              </div>
              
              <input className=" item-center w-96 m-2 p-2  rounded-lg text-xl border border-solid border-black" type="text" value={dishes} onChange={changeHandler} placeholder="search for dishes" />

              
        </div>

        <div className="bg-slate-100  w-full m-5 p-5 ">
          {dishes==''?<ul>

          {ItemCategory.map((items)=>(

              <div   key={items.card.card.title}>
               <ItemList  vegClassifier={vegClassifier}title={items.card.card.title}itemlist={items.card.card.itemCards} />
              </div>
           ))}
         
          
          {NestedItemCategory.map((nested)=>(
            <div  key={nested.card.card.title}>
              <NestedItemlist vegClassifier={vegClassifier} title={nested.card.card.title}nestedlist={nested.card.card.categories}  />
            </div>            
          ))}


          </ul>:
          <Dishes dishes={dishes}list={list} setDishes={setDishes}/>}
        </div>
       
          
          
        




      </div>
    </div>
  );
};

export default RestaurentPage;
