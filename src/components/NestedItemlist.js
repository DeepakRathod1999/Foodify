import React, { useEffect, useState } from 'react'
import NestedCards from './NestedCards';

const NestedItemlist = ({vegClassifier,title,nestedlist}) => {

   const [showcard,setShowcard]=useState(false);
   const [Nested,setNested]=useState(nestedlist)

// console.log(nestedlist)
   useEffect(()=>{
      demo()
      // console.log("abc")
   },[vegClassifier])
  
   const demo=()=>{
      const abc=nestedlist
      const data=vegClassifier=="all"?nestedlist:abc.map((list)=> 
         list.itemCards.length!=0 && {
            title:list.title,
            itemCards:list.itemCards.filter((item)=>item?.card?.info?.itemAttribute?.vegClassifier.toLowerCase()===vegClassifier.toLowerCase())
         }
      ).filter((list) => list.itemCards.length > 0); 
      setNested(data);
      // console.log(Nested.length)
   }
        


   const handleclick=()=>{
    setShowcard(!showcard);
  }

  
    return (
       <div>
         <span onClick={handleclick} className="border-b-2 cursor-pointer border-slate-600 h-10 m-3 p-2 flex rounded-lg font-bold text-xl bg-white justify-between"><span>{title}({Nested.length})</span><span> ⬇️</span></span>
            {
                showcard&& Nested.map((list)=>(
                   <div  key={list.title}>
                        { <NestedCards vegClassifier={vegClassifier} list={list}/> }
                    </div>
                
                
                
                ))
            }
       </div>
    )
}


export default NestedItemlist
