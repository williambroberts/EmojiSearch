"use client"
import React, { createContext, useEffect,useState } from 'react'
import {
    onAuthStateChanged,
    getAuth,
} from 'firebase/auth';
import firebase_app from '@/firebase/config';
export const IsAUserLoggedInContext = createContext()
const auth = getAuth(firebase_app)
const IsAUserLoggedInProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [isLoading,setisLoading]=useState(true)
    useEffect(()=>{
        const isUser = onAuthStateChanged(auth, (user)=>{
            if (user){
                setUser(user)
            }else{
                setUser(null)
            }
            setisLoading(false)
           
           
        })
         //isUser()
         return ()=> isUser()
    },[])
  return (
   <IsAUserLoggedInContext.Provider value={{user,setUser}}>
        {isLoading? <span>Loading...</span>: children }
   </IsAUserLoggedInContext.Provider>
  )
}

export default IsAUserLoggedInProvider