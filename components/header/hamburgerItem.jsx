"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
const HamburgerItem = ({icon,link,text,setIsHamburger,isHover,handleResetHovers,handleFadeRest,index}) => {
  const pathname=usePathname()
  
  return (
    <Link  onMouseLeave={()=>handleResetHovers()}   onMouseEnter={()=>handleFadeRest(index)}
     href={link} onClick={()=>setIsHamburger(false)} className='hamburger-item' style={{color:isHover? "var(--t-1)":"var(--t-3)"}}>
        <span className='hamburger-item-icon'>{icon}</span>
        <span className='hamburger-item-text'>{text}</span>
    </Link>
  )
}

export default HamburgerItem