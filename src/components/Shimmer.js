import React from 'react'
import '../css/shimmer.css'
import { data } from '../utils/constant'
const Shimmer = () => {
    
        return (
       
        <div className='mt-40 '>
             <div className='  flex justify-center animate-pulse'>
                             <input className=' w-96 m-2 p-2 rounded-lg '/>
               </div>
                 <div className='mx-4 mb-5 px-4 gap-10 flex  justify-center animate-pulse  '>
                                  <button className='p-4 w-28  bg-slate-400 rounded-lg' ></button>
                                  <button className='p-4 w-28  bg-slate-400 rounded-lg' ></button>
                </div>
        <div className='flex flex-wrap justify-center z-10 ' >

            {data.map((value)=>(
               
                        <div key={value.info.id} className="m-4 p-2 h-[300px] w-64 bg-slate-100  rounded-md">
                            <img className="h-10 w-10 m-3  bg-slate-400 rounded-full" />
                                    <span className="block p-3 m-3 rounded-md bg-slate-400"></span>
                                    <span className="flex justify-between" ><span className=" w-20 p-3 m-3 rounded-md  bg-slate-400"></span><span className=" w-20 p-3 m-3 rounded-md  bg-slate-400"></span></span> 
                                    <span className='flex justify-between'><img className="rounded-full h-8 w-10 m-3 bg-slate-400"/><span className="w-20 h-8 m-3 rounded-md  bg-slate-400"></span></span>
                                    <span className="block p-3 m-3 rounded-md  bg-slate-400"></span>
                                    
                        </div>
                
                    ))}
            </div>
                
        </div>
        
    )
      
}

export default Shimmer
