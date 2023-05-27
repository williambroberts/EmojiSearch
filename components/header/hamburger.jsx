"use client"
import React, { useContext } from 'react'
import FlexCol from '../setup/flexCol'
import HamburgerItem from './hamburgerItem'
import { IsAUserLoggedInContext } from '@/contexts/authContext'
const Hamburger = ({setIsHamburger,isHamburger}) => {
  const {user} = useContext(IsAUserLoggedInContext)
  return (
    <div className={`hamburger ${isHamburger? "open":""} `}>
        <FlexCol>
          <HamburgerItem link={"/"} text={"Home"} icon={""} setIsHamburger={setIsHamburger}/>
          <HamburgerItem link={"/categories"} text={"Categories"} icon={""} setIsHamburger={setIsHamburger}/>
          <HamburgerItem link={"/search"} text={"Search"} icon={""} setIsHamburger={setIsHamburger}/>
         {user===null? "":<HamburgerItem link={"/favorites"} text={"Favorites"} icon={""} setIsHamburger={setIsHamburger}/>}
          <HamburgerItem link={"/login"} text={"Login"} icon={""} setIsHamburger={setIsHamburger}/>
          <HamburgerItem link={"/signup"} text={"Sign up"} icon={""} setIsHamburger={setIsHamburger}/>
        </FlexCol>
    </div>
  )
}

export default Hamburger