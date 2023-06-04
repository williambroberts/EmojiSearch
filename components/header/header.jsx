"use client"
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import ThemeButton from '../theme/themeButton'
import Hamburger from './hamburger'
import IsAUserLoggedInProvider, { IsAUserLoggedInContext } from '@/contexts/authContext'
import LogoutComponent from '../auth/logout'
const Header = () => {
  const {user}=useContext(IsAUserLoggedInContext)
  const [isHamburger,setIsHamburger]=useState(false)

  useEffect(()=>{
    let htmlTag = document.querySelector('html')
      if (isHamburger){
        htmlTag.style.overflowY="hidden"
      }else {
        htmlTag.style.overflowY="scroll"
      }
  },[isHamburger])
  return (
   <header className='header'>
    <nav className='header-nav'>
      <Link className='header-item' href={"/"}>Home</Link>
      <Link className='header-item' href={"/categories"}>Categories</Link>
      <Link className='header-item' href={"/search"}>Search</Link>
      {user===null?"": <Link className='header-item' href={"/favorites"}>Favorites</Link> }
      <span className='header-theme'><ThemeButton/></span>
      {user===null? <Link className='header-item' href={"/login"}>Login</Link> :<LogoutComponent/>}
      {user===null? <Link className='header-item' href={"/signup"}>Sign up</Link>:""}
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