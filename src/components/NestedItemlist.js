import React, { useState } from 'react'
import NestedCards from './NestedCards';

const NestedItemlist = ({title,nestedlist}) => {
   const [showlist,setshowlist]=useState(false);
   const [showcard,setShowcard]=useState(false);

//    console.log(nestedlist)

   const handleclick=()=>{
    setShowcard(!showcard);
  }

  
    return (
       <div>
         <span onClick={handleclick} className="border-b-2 cursor-pointer border-slate-600 h-10 m-3 p-2 flex rounded-lg font-bold text-xl bg-white justify-between"><span>{title}({nestedlist.length})</span><span> ⬇️</span></span>
            {
                showcard&& nestedlist.map((list)=>(
                   <div  key={list.title}>
                        { <NestedCards list={list}/> }
                    </div>
                
                
                
                ))
            }
       </div>
    )
}

export default NestedItemlist
