import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import Item from './Item'
import {clearAll} from '../utils/slices/cartSlice'
import Cart from './Cart'

const CartPage = () => {
    
    const cartItems=useSelector(store=>store.cart.items)
    const dispatch=useDispatch()
    const handleClear=()=>{
        dispatch(clearAll())
    }

    return (
        <div className='my-40 flex flex-row  w-11/12 h-screen'>
                   
            <div className='m-2 p-3 h-fit  border-black   '>
                <div className=''>
                    <div className='mx-96 my-4  hover:scale-110 ease-in duration-300'>
                
                 <span onClick={()=>handleClear()} className='h-15 p-2 m-2  items-end text-lg  text-black  hover:text-white  cursor-pointer  bg-red-600 rounded-xl '> Clear Cart</span>
                   
                 </div>
                 <div className='mx-14 flex flex-wrap w-11/12  '>

                     {cartItems.map((item)=>(
                     <div key={item.id} className='flex flex-row  m-2 bg-white '>
                        {
                            item?.price&&  <Cart item={item}/>}
                     </div>
                     ))}
                 </div>
                </div>
                <button className='text-lg bg-violet-600 p-2 rounded-xl mx-96 my-4  hover:scale-110 ease-in duration-300'>Place Order</button>
            </div>
            <div className='bg-pink-500 m-5 flex flex-col text-lg h-fit p-5'>
                <div>UserInfo</div>
                <div>
                        <h4>Name:</h4>
                        <h4>Email:</h4>
                        <h4>mobile:</h4>
                        <h4>Address:</h4>
                </div>
               


            </div>
        </div>
    )
}

export default CartPage
