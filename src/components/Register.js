import React, { useState } from 'react'
import loginlogo from '../utils/loginlogo.svg'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addInfo } from '../utils/slices/userSlice'
const Register = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch(store=>store.user.info)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [pswrd,setPswrd]=useState('')
    const [contact,setContact]=useState('')
    const [deliveryAddress,setDeliveryAddress]=useState('')
    return (
        <div className='h-screen mt-24 flex flex-row justify-evenly'>
            <div>
          <img
              src={loginlogo}
              className="w-full h-5/6"
              alt="Sample image"
            />
          </div>
            <div className='mt-6 text-center'>
                <span  className='text-4xl font-semibold  '>SignUp</span>
                <form className='flex flex-col items-center mt-4 shadow-xl'>
                    <input type='text' onChange={(e)=>(setName(e.target.value))} name='name' placeholder='Enter Name'value={name} className=' w-[350px] p-2 m-2 rounded-lg border-b-4 border-l-2 ' />
                    <input type='email' onChange={(e)=>(setEmail(e.target.value))}  name='email' placeholder='Enter Email Address'value={email} className=' w-[350px] p-2 m-2 rounded-lg  border-b-4 border-l-2' />
                    <input type='password' onChange={(e)=>(setPswrd(e.target.value))}  placeholder='Enter Password' value={pswrd} className=' w-[350px] p-2 m-2 rounded-lg  border-b-4 border-l-2 '/>
                    <input type='text' onChange={(e)=>(setContact(e.target.value))}  placeholder='Enter Contact Number'value={contact} className=' w-[350px] p-2 m-2 rounded-lg  border-b-4 border-l-2'/>
                    <input type='text' onChange={(e)=>(setDeliveryAddress(e.target.value))}  placeholder='Enter Delivery Address' value={deliveryAddress} className=' w-[350px] p-2 m-2 rounded-lg  border-b-4 border-l-2 '/>
                    <span className='p-2 m-2 bg-orange-500 rounded-lg w-28 hover:scale-110   ease-in duration-300 ' 
                    
                 onClick={(e)=>{


                    const data={
                        name:name,
                        email:email,
                        password:pswrd,
                        contact:contact,
                        deliveryAddress:deliveryAddress,
                        loggedInUser:false
                    }
                    dispatch(addInfo(data))
                    alert('succesfully Registered ')
                    navigate('/login')
                }
                } 
                    >SignUp</span>
                    <span className='text-sm font-semibold text-neutral-500 m-2'>By creating an Account I accept the terms & Conditopns & Privacy polity</span>
                </form>
            </div>
            
        </div>
    )
}

export default Register
