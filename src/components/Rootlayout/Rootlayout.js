import React from 'react'
import MainLandingPage from '../MainLandingPage/MainLandingPage'
import { Outlet } from 'react-router-dom'
function Rootlayout() {
  return (
    <div>
     <Outlet/>
    </div>
  )
}

export default Rootlayout