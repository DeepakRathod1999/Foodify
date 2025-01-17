import React from 'react'
import Nav from './src/components/Nav'
import {Outlet} from 'react-router-dom';
import {Provider} from 'react-redux'
import appStore from './src/utils/appStore';
const App = () => {
  return (
    <Provider store={appStore}>
      <div className='bg-slate-200  '>
            <Nav/>
            <Outlet/>
            <div>footer</div>

    </div>
   
    </Provider>

        
  )
}

export default App
