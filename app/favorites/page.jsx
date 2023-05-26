"use client"
import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { IsAUserLoggedInContext } from '@/contexts/authContext'
import LogoutComponent from '@/components/auth/logout'
const FavoritesPage = () => {
  const {user,setUser}=useContext(IsAUserLoggedInContext)
  const router=useRouter()
  useEffect(()=>{
    console.log("user",user)
    if (user===null){
      router.push("/")
      return
    }
    
  },[user])
  return (
   <main>
    Favorites {user===null? "null" :user.email}
    {/* logged in user favorites */}
    <LogoutComponent/>
   </main>
  )
}

export default FavoritesPage