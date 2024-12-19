import React from 'react'
import Nav from './src/components/Nav'
import {Outlet} from 'react-router-dom';
const App = () => {
  return (
    
    <div className='bg-slate-800  '>
         <Nav/>
        <Outlet/>
        <div>footer</div>
    </div>
    
  )
}

export default App
