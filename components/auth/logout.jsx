"use client"
import React from 'react'
import logOut from '@/firebase/auth/logoutFunc'
import { useRouter } from 'next/navigation'
const LogoutComponent = () => {
    const router = useRouter()
    const handleLogout = ()=>{
        router.push("/")
        logOut()
        
    }

  return (
    <button onClick={()=>handleLogout()}>logout</button>
  )
}

export default LogoutComponent