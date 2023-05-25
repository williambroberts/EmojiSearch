"use client"

import React, { useState } from 'react'
import ThemeButton from '../theme/themeButton'
import Hamburger from './hamburger'
const Header = () => {
  const [isHamburger,setIsHamburger]=useState(false)
  return (
   <header className='header'>
    <nav className='header-nav'>
      <span className='header-theme'><ThemeButton/></span>
        <span className='header-menu' onClick={()=>setIsHamburger((prev)=>true)}>☰</span>
    </nav>

    <div className={`hamburger-blur ${isHamburger? 'open':''}`} onClick={()=>setIsHamburger((prev)=>!prev)}></div>
    
    <Hamburger isHamburger={isHamburger}
    setIsHamburger={setIsHamburger}
    />
   </header>
  )
}

export default Header