"use client"
import React, { useContext,useState } from 'react'
import FlexCol from '../setup/flexCol'
import HamburgerItem from './hamburgerItem'
import { Caveat } from 'next/font/google'
import { IsAUserLoggedInContext } from '@/contexts/authContext'
import LogoutComponent from '../auth/logout'
const caveat = Caveat({subsets:["cyrillic"],weight:["400","500","600"]})
const Hamburger = ({setIsHamburger,isHamburger}) => {
  const {user} = useContext(IsAUserLoggedInContext)
  const [hovers,setHovers]=useState([true,true,true,true,true])
  const handleFadeRest = (index)=>{
    let newHovers = Array(5).fill(false)
    newHovers[index]=true
    setHovers((prev)=>newHovers)
    //console.log("faded")
  }
  const handleResetHovers = ()=>{
    let newHovers = Array(5).fill(true)
    setHovers((prev)=>newHovers)
    //console.log("reset")
  }
  return (
    <div className={`hamburger ${isHamburger? "open":""} `}>
        <FlexCol width={"100%"} gap={"0.0rem"} align={"flex-start"}>
        <h3 className={`${caveat.className} emoji-hamburger-title`}> EmojiSearch 🌮</h3>
          <HamburgerItem link={"/"} text={"Home"} icon={""} setIsHamburger={setIsHamburger} isHover={hovers[0]} 
          handleResetHovers={handleResetHovers} handleFadeRest={handleFadeRest} index={0}/>
          <HamburgerItem link={"/categories"} text={"Categories"} icon={""} setIsHamburger={setIsHamburger} isHover={hovers[1]} 
            handleResetHovers={handleResetHovers} handleFadeRest={handleFadeRest} index={1}/>
          <HamburgerItem link={"/search"} text={"Search"} icon={""} setIsHamburger={setIsHamburger} isHover={hovers[2]} 
            handleResetHovers={handleResetHovers} handleFadeRest={handleFadeRest} index={2}/>
         {user===null?   <HamburgerItem link={"/login"} text={"Login"} icon={""} setIsHamburger={setIsHamburger} isHover={hovers[3]} 
           handleResetHovers={handleResetHovers} handleFadeRest={handleFadeRest} index={3}/>:
         <HamburgerItem link={"/favorites"} text={"Favorites"} icon={""} setIsHamburger={setIsHamburger} isHover={hovers[3]} 
         handleResetHovers={handleResetHovers} handleFadeRest={handleFadeRest} index={3}/>}
        
        {user ===null?  <HamburgerItem link={"/signup"} text={"Sign up"} icon={""} setIsHamburger={setIsHamburger} isHover={hovers[4]}
          handleResetHovers={handleResetHovers}  handleFadeRest={handleFadeRest} index={4}/>:
       <span className='hamburger-item' style={{color:hovers[4]===true? "var(--t-1)":"var(--t-3)"}} 
       onMouseEnter={()=>handleFadeRest(4)} onMouseLeave={()=>handleResetHovers()}
       ><LogoutComponent/></span>
        } 
        </FlexCol>
    </div>
  )
}

export default Hamburger