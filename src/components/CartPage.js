import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import Item from './Item'
import {clearAll} from '../utils/slices/cartSlice'
import Cart from './Cart'
import { Link } from 'react-router-dom'
const CartPage = () => {
    
    const cartItems=useSelector(store=>store.cart.items)
    const userInfo=useSelector(store=>store.user.info)
    const dispatch=useDispatch()
    const handleClear=()=>{
        dispatch(clearAll())
    }

    return (
        <div className='my-40 flex flex-row justify-between    '>
                   
            {cartItems.length!=0?
            <div className='m-2 p-3  h-auto w-11/12    border-black   '>
                <div className=''>
                    <div className=' my-4 flex flex-row justify-between'>
                        <span onClick={()=>handleClear()} className='h-10 ml-2  w-32 text-center p-2   hover:scale-110 ease-in duration-300 items-end text-lg  text-black  hover:text-white  cursor-pointer  bg-red-600 rounded-xl '> Clear Cart</span>
                    </div>
                 <div className='flex flex-wrap   '>

                     {cartItems.map((item)=>(
                     <div key={item.id} className='flex flex-row  m-2 bg-white '>
                        {
                            item?.price&&  <Cart item={item}/>}
                     </div>
                     ))}
                 </div>
                </div>
            </div>:
            <div className='h-screen w-11/12   text-center '>
                <div className='text-4xl mt-12 text-orange-600 font-extrabold'>Your Cart is Empty</div>
                <div className='text-neutral-400 font-semibold text-lg'>you can go to home page to view more restaurents</div>
                <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" className="  mx-96 h-52" viewBox="0 0 576 512"><path fill="#0f0f0f" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>               
                </div>
                <div className='m-6 hover:scale-110 ease-in duration-300'>
                <Link to='/' className='m-5 p-2 rounded-lg bg-orange-500 text-white text-lg'>See Restaurents Near You</Link>
                </div>

            </div>}
            <div className='h-auto m-2 flex flex-col text-lg w-11/12 p-5'>
                <div className='underline text-lg font-semibold m-2'>Account Details</div>
               {userInfo.map((user)=>(
                <div key={user.mobile} className='flex flex-wrap flex-col'>
                        <span className='font-semibold'>{user.name}</span>
                        <span className='font-semibold text-neutral-400'>{user.email}</span>
                        <span className='font-semibold text-neutral-400'>{user.mobile}</span>
                        <span className='font-semibold'>{user.address}</span>
                </div>
               )) }
                        <button className='text-lg  p-2 mt-10  w-auto b text-center  bg-orange-500 text-white  rounded-xl    hover:scale-110 ease-in duration-300'>Place Order</button>



            </div>
        </div>
    )
}

export default CartPage
