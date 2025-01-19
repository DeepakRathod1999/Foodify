import React from 'react'

import { CDNurl } from '../utils/constant';
import nonveg from '../utils/nonveg.svg';
import vegmark from '../utils/veg.svg';
import { useDispatch } from 'react-redux';
import { increaseQuantity } from '../utils/slices/cartSlice';
import { decreaseQuantity } from '../utils/slices/cartSlice';
import { deleteSingle } from '../utils/slices/cartSlice';
const Cart = ({item}) => {
    const dispatch=useDispatch()
    const{id,name,price,category,imageId,attribute,quantity,totalPrice}=item;
    const handleDecrease=(id)=>{
        dispatch(decreaseQuantity(id))
    }
    const handleIncrease=(id)=>{
        dispatch(increaseQuantity(id))
    }
    const handleDelete=(id)=>{
        dispatch(deleteSingle(id))
    }
    return (
        <div className=' flex flex-wrap   border-black   border-b-4 border-r-4'>
            <div className='flex flex-col  p-2'>
            <span className='flex flex-wrap  text-lg'>{attribute=="VEG"?<img className='rounded-sm h-5 w-5' src={vegmark}></img>:<img className='rounded-sm h-5 w-5' src={nonveg}></img>}<span className=''>{name} </span></span> 
            <span className=' border-2 text-lg font-bold w-fit'><span className=' px-2 hover:cursor-pointer' onClick={()=>handleDecrease(id)}>➖</span>{quantity}<span className=' px-2 hover:cursor-pointer'onClick={()=>handleIncrease(id)}>➕</span> <span className='text-black'>₹{totalPrice}</span></span>
            <span ><svg  onClick={()=>handleDelete(id)} className='h-4 w-4 m-4 hover:cursor-pointer ' xmlns="http:www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
           </span>
            </div>
            <div className='flex flex-col  p-2 '>
                <img alt='broken' className=' h-[100px] w-[100px] rounded-lg' src={CDNurl+imageId}></img>

            </div>
        </div>
    )
}

export default Cart
