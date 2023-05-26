"use client"
import React, { useContext } from 'react'
import FlexCol from '../setup/flexCol'
import HamburgerItem from './hamburgerItem'
import { IsAUserLoggedInContext } from '@/contexts/authContext'
const Hamburger = ({setIsHAmburger,isHamburger}) => {
  const {user} = useContext(IsAUserLoggedInContext)
  return (
    <div className={`hamburger ${isHamburger? "open":""} `}>
        <FlexCol>
          <HamburgerItem link={"/"} text={"Home"} icon={""}/>
          <HamburgerItem link={"/categories"} text={"Categories"} icon={""}/>
          <HamburgerItem link={"/search"} text={"Search"} icon={""}/>
         {user===null? "":<HamburgerItem link={"/favorites"} text={"Favorites"} icon={""}/>}
          <HamburgerItem link={"/login"} text={"Login"} icon={""}/>
          <HamburgerItem link={"/signup"} text={"Sign up"} icon={""}/>
        </FlexCol>
    </div>
  )
}

export default Hamburger