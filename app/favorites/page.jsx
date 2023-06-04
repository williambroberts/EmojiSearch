"use client"
import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { IsAUserLoggedInContext } from '@/contexts/authContext'
import LogoutComponent from '@/components/auth/logout'
import FavouriteEmojisComponent from '@/components/favourites/favouriteEmojis'
import { Caveat } from 'next/font/google'
import Filler from '@/components/setup/filler'
const caveat = Caveat({subsets:["cyrillic"],weight:["400","500","600"]})
const FavoritesPage = () => {
  const {user,setUser}=useContext(IsAUserLoggedInContext)
  const router=useRouter()
  useEffect(()=>{
    console.log("user",user)
    if (user===null){
      router.push("/")
      return
    }
    
  },[user,router])
  return (
   <main>
    <h4 className={`${caveat.className} h4`}>Hello {user===null? "null" :user.email}</h4>
    {/* logged in user favorites */}
    <FavouriteEmojisComponent/>
    <span className='logout-wrapper'><LogoutComponent/></span>
    <Filler height={"1rem"}/> 
   </main>
  )
}

export default FavoritesPage