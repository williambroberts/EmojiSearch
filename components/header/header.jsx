"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import ThemeButton from '../theme/themeButton'
import Hamburger from './hamburger'
const Header = () => {
  const [isHamburger,setIsHamburger]=useState(false)
  return (
   <header className='header'>
    <nav className='header-nav'>
      <Link className='header-item' href={"/"}>Home</Link>
      <Link className='header-item' href={"/categories"}>Categories</Link>
      <Link className='header-item' href={"/search"}>Search</Link>
      <Link className='header-item' href={"/favorites"}>Favorites</Link>
      <span className='header-theme'><ThemeButton/></span>
      <Link className='header-item' href={"/login"}>Login</Link>
      <Link className='header-item' href={"/signup"}>Sign up</Link>
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