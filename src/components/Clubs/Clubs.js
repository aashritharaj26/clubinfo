import React from 'react'
import {Link,Outlet,useNavigate} from "react-router-dom"

import './Clubs.css'
function Clubs() 
{

let navigate=useNavigate();

function fun()
{
  navigate('/csi')
}



  return (
    <div>
         <div class="container ">
            <div class="flex">
  
           
              <div className=''>
              <div class="card-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2WawkMQAlyH7bt7JNxC-vWQmGEGsQIkCr3QHjQ76DA&s" width="200px"  alt="" />
              </div>
              <button className='btn btn-success' onClick={fun}>CSI</button>
              </div>
              <div className=''>
              <div class="card-img">
                <img src="data:image/png;base64,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" width="250px" alt="" />
              </div>
              <button className='btn btn-success' onClick={fun}>IEEE</button>
              </div>
              <div className=''>
              <div class="card-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxImnlB0617HU09Ahk9SkjFtcusIXWqTKSkBiU5ipnHA&s" width="100px" alt="" />
          
              </div>
              <button className='btn btn-success' onClick={fun}>ACM</button>
              </div>
              <div className=''>
              <div class="card-img">
              <img src="https://dkgct.in/wp-content/uploads/2022/04/19B206B9-9BF5-4313-8DC3-3EBD7A715A8F.png"width="250px"alt="" />
    
              </div>
              <button className='btn btn-success' onClick={fun}>NSS</button>
              </div>
              <div className=''>
              <div class="card-img">
                <img src="data:image/jpeg;base64,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" width="250px" alt="" />
              
              </div>
              <button className='btn btn-success' onClick={fun}>CREATIVE ARTS</button>
              </div>
              <div className=''>
              <div class="card-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqmijuI0oCKOh3Fyboq5oBLtT0QXOgSMPnoLc0pmaFg&s" width="250px" alt="" />
              </div>
              <button className='btn btn-success' onClick={fun}>SCINTILLATE</button>
              </div>
             
              <div className=''>
              <div class="card-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtAgqg6sMwcZyZ-DaiCJsc1K61YV-HB9CFCFBu8ZMgGA&s" width="250px" alt="" />
              </div>
              <button className='btn btn-success' onClick={fun}>DRAMATICS</button>
              </div>
              
            </div>
          </div>
          <Outlet/>
    </div>
  )
}

export default Clubs
       
  