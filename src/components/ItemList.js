import React, { useEffect, useState } from "react";
import Item from "./Item";
const ItemList = ({ vegClassifier, title, itemlist }) => {
  const [show, setshow] = useState(false);
  const [newItem, setnewItem] = useState(itemlist);

  useEffect(() => {
    demo();
    // console.log(vegClassifier)
  }, [vegClassifier]);

  const demo = () => {
    const abc = itemlist;
    const data =
      vegClassifier == "all"
        ? itemlist
        : abc.filter(
            (item) =>
              item?.card?.info?.itemAttribute?.vegClassifier?.toLowerCase() ===
              vegClassifier?.toLowerCase()
          );

    setnewItem(data);
  };

  const handler = () => {
    setshow(!show);
  };
  
  //  console.log(newItem)
  return (
    newItem.length != 0 && (
      <div className="">
        <span
          onClick={handler}
          className="border-b-2 h-10 m-3 p-2 cursor-pointer flex font-bold text-lg rounded-lg bg-white justify-between"
        >
          <span>
            {title}({newItem.length})
          </span>
          <span> ⬇️</span>
        </span>
        {show &&
          newItem.map((item) => (
           <Item  key={item?.card?.info?.id} item={item}/>
          ))}
      </div>
    )
  );
};

export default ItemList;
