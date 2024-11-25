import React from 'react'
import Nav from './src/components/Nav'
import {Outlet} from 'react-router-dom';
const App = () => {
  return (
    <div>
        <div><Nav/></div>
        <Outlet/>
        <div>footer</div>
    </div>
  )
}

export default App
