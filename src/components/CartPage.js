import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import Item from './Item'
import {clearAll} from '../utils/slices/cartSlice'

const CartPage = () => {
    const cartItems=useSelector(store=>store.cart.items)
    const dispatch=useDispatch()
    const handleClear=()=>{
        dispatch(clearAll())
    }
    return (
        <div className='m-40'>
           <div className='flex flex-col items-center '>

                <div className='m-5 flex gap-80'>
                {/* <span className='h-15 m-2 p-3 text-lg font-bold   bg-blue-600 rounded-xl '> Cart Items</span> */}
                <span onClick={()=>handleClear()} className='h-15 p-3 m-2 text-lg font-bold text-white hover:text-black cursor-pointer  bg-red-600 rounded-xl '> Clear Cart</span>
                   
                </div>
                    {cartItems.map((item)=>(
                    <div key={item.card.info.id} className='flex flex-row w-auto bg-white'>
                        <Item  item={item}/>
                        <svg className='h-7 w-7 my-24 hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                        

                    </div>
                    ))}

           </div>
        </div>
    )
}

export default CartPage
