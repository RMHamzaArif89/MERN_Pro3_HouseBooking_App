import React, { useContext } from 'react'
import { FcHome } from "react-icons/fc";
import { IoIosAddCircleOutline } from "react-icons/io";
import './nav.css'
import {NavLink} from 'react-router-dom'


function Nav() {

  return (
    <div className='nav'>
     
   
      <img src="/images/logo1.jpg" className="logo-img" alt="" />
    
        <ul>
            <li><NavLink  className="navlink" to="/">Home</NavLink><FcHome/></li>
            <li><NavLink  className="navlink" to="/cities">Cities</NavLink></li>
            <li><NavLink  className="navlink" to="/houses">Cities</NavLink></li>
            <li><NavLink className='navlink' to="/addCities">Add Cities</NavLink></li>
            <li><NavLink className='navlink' to="/sign-up">Sign Up</NavLink></li>
            <li><NavLink className='navlink' to="/login">Login</NavLink></li>
            
        </ul>

       

      
    </div>
  )
}

export default Nav
