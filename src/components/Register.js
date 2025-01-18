import React from 'react'
import loginlogo from '../utils/loginlogo.svg'

const Register = () => {
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
                <div className='flex flex-col items-center mt-4 shadow-xl'>
                    <input placeholder='Enter Name' className=' w-[350px] p-2 m-2 rounded-lg '/>
                    <input placeholder='Enter Email Address' className=' w-[350px] p-2 m-2 rounded-lg '/>
                    <input placeholder='Enter Contact Number' className=' w-[350px] p-2 m-2 rounded-lg '/>
                    <input placeholder='Enter Delivery Address' className=' w-[350px] p-2 m-2 rounded-lg '/>
                    <button className='p-2 m-2 bg-orange-500 rounded-lg w-28 hover:scale-110   ease-in duration-300 '>SignUp</button>
                    <span className='text-sm font-semibold text-neutral-500 m-2'>By creating an Account I accept the terms & Conditopns & Privacy polity</span>
                </div>
            </div>
            
        </div>
    )
}

export default Register
