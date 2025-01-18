import React from 'react'
import loginlogo from '../utils/loginlogo.svg'
import {Link} from 'react-router-dom'
const Login = () => {
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
                    <input placeholder='Email address'className=' w-[350px] p-2 m-2 rounded-lg '/>
                    <input placeholder='Password' className=' w-[350px] p-2 m-2 rounded-lg'/>
                    <button className='p-2 m-2 bg-violet-500 rounded-lg w-28 hover:scale-110   ease-in duration-300 '>SignIn</button>
            </div>
            <span className=' text-center m-2 text-lg font-semibold text-neutral-500'>Don't have an account? <Link className='text-red-600' to='/register'>Register</Link></span>
          </div>
        </div>
    )
}

export default Login
