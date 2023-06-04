"use client"
import React from 'react'
import logOut from '@/firebase/auth/logoutFunc'
import { useRouter } from 'next/navigation'
const LogoutComponent = () => {
    const router = useRouter()
    const handleLogout = ()=>{
        router.push("/")
        console.log("logged out")
        logOut()
        
    }

  return (
    <span onClick={()=>handleLogout()} className='logout-button'>Logout</span>
  )
}

export default LogoutComponent