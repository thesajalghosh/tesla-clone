import React, { useState, useRef, useEffect } from 'react'
import logo from '../Logo/logo.svg'
import '../CssFile/Header.css'
import {AiOutlineClose} from 'react-icons/ai'



const Header = () => {

const [sideMenu, setSideMenu] = useState(false);

const open = (sideMenu) => {
  return setSideMenu(sideMenu)
}
const domeNode = useRef()
  const updateState = (event) => {
    if (domeNode.current.contains(event.target)) {
      return
    }
    setSideMenu(false)
  }
  useEffect(() => {
    document.addEventListener('mousedown', updateState)
    return () => {
      document.removeEventListener('mousedown', updateState)
    }
  }, [])



  return (
    <div className='navbar'>
      <div className='Header__container'>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>

        <div className='manu'>

          <p><a href="/#"> Model S</a></p>
          <p><a href="/#"> Model 3</a></p>
          <p><a href="/#"> Model X</a></p>
          <p><a href="/#"> Model Y</a></p>
          <p><a href="/#"> Sun Roof</a></p>
          <p><a href="/#"> Solar Panels</a></p>


        </div>
        <div className='left__manu'>
          <p><a href="/#"> Shop</a></p>
          <p><a href="/#"> Account</a></p>
          <p onClick={() => {
              open(sideMenu)
            }}> Menu</p>

        </div>

      </div>
     
      <div className= 'sidenav' style={{  }} >
      <div className='close__wraper'>
          <AiOutlineClose className='close__icon' onClick={() => {
              open(sideMenu)
            }}></AiOutlineClose></div>
          <li><a href='/#'>Model S</a></li>
          <li><a href='/#'>Model X</a></li>
          <li><a href='/#'>Model 3</a></li>
          <li><a href='/#'>Model Y</a></li>
          <li><a href='/#'>Solar Roop</a></li>
          <li><a href='/#'>Solar Panels</a></li>
          <li><a href='/#'> Existing Inventory</a></li>
          <li><a href='/#'> Used Inventory</a></li>
          <li><a href='/#'> Trade-In</a></li>
          <li><a href='/#'>Demo Drive</a></li>
          <li><a href='/#'>Insurance</a></li>
          <li><a href='/#'>Powerwall</a></li>
          <li><a href='/#'>Commercial Energy</a></li>
          <li><a href='/#'>Utilities</a></li>
          <li><a href='/#'>Charging</a></li>
          <li><a href='/#'>Find Us</a></li>
          {/* <li><a href='#'>Support</a></li>
          <li><a href='#'>Invertor Relations</a></li>
          <li><a href='#'> Shop</a></li>
          <li><a href='#'>Account</a></li>
          <li><a href='#'>More</a></li> */}

      </div>
    



    </div>
  )
}

export default Header
