import React, { useEffect, useState } from 'react'
import loginlogo from '../utils/loginlogo.svg'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { verifyUser } from '../utils/slices/userSlice'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const accountDetails=useSelector(store=>store.user.accountDetails)
  const isValidateUser=useSelector(store=>store.user.isValidateUser)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [pswrd,setPswrd]=useState('')

  useEffect(()=>{
    
   
      if(accountDetails?.loggedInuser!=null){
        if(accountDetails?.loggedInuser){
          alert(`Welcome ${accountDetails?.name}`)
          localStorage.setItem("customer",JSON.stringify(accountDetails))
          navigate('/cart')
  
         }
         else{
          alert("invalid email or pswrd")
         }
      }
    
    
    
  },[accountDetails])

  const handleLogin=()=>{
   
    const data={email:email,password:pswrd}
    
    dispatch(verifyUser(data))
  //  console.log(accountDetails)
  
   
    


  }
    return (
        <div className='h-screen mt-24 flex flex-row justify-evenly'>
          <div>
          <img
              src={loginlogo}
              className="w-full h-5/6"
              alt="Sample image"
            />
          </div>
          <div className='flex flex-col flex-wrap  w-4/12 shadow-2xl '>
            <div className=' m-10 p-5 text-center  '>
                    <span className='text-xl  items-center'>Login to your Account</span>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email address'className=' w-[350px] p-2 m-2 rounded-lg  border-b-4 border-l-2'/>
                    <input type='text' value={pswrd} onChange={(e)=>setPswrd(e.target.value)} placeholder='Password' className=' w-[350px] p-2 m-2 rounded-lg  border-b-4 border-l-2'/>
                    <button className='p-2 m-2 bg-violet-500 rounded-lg w-28 hover:scale-110   ease-in duration-300 ' onClick={handleLogin}>SignIn</button>
            </div>
            <span className=' text-center m-2 text-lg font-semibold text-neutral-500'>Don't have an account? <Link className='text-red-600' to='/register'>Register</Link></span>
          </div>
        </div>
    )
}

export default Login
