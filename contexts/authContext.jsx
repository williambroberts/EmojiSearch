"use client"
import React, { createContext, useEffect,useState } from 'react'
import { doc,onSnapshot } from 'firebase/firestore';
import {
    onAuthStateChanged,
    getAuth,   
} from 'firebase/auth';
import firebase_app, {firestore} from '@/firebase/config';
export const IsAUserLoggedInContext = createContext()
const auth = getAuth(firebase_app)
const IsAUserLoggedInProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [isLoading,setisLoading]=useState(true)
    const [usersFavs,setUsersFavs]=useState()
    useEffect(()=>{
        const isUser = onAuthStateChanged(auth, (person)=>{
            if (person){
                setUser(person)
            }else{
                setUser(null)
            }
            setisLoading(false)
           
           
        })
         //isUser()
         return ()=> isUser()
    },[])

    useEffect(()=>{
        if (user!==null){
            try{
            const unsub = onSnapshot(doc(firestore, "favorites", `${user?.email}`), (doc) => {
                        setUsersFavs(doc.data()?.emojis)
                    // console.log(doc.data()?.emojis)
                    })
        }catch(err){
            console.log(err)
        }
        }
        
        
    },[user?.email])


  return (
   <IsAUserLoggedInContext.Provider value={{user,setUser,usersFavs}}>
        {isLoading? <span>Loading...</span>: children }
   </IsAUserLoggedInContext.Provider>
  )
}

export default IsAUserLoggedInProvider