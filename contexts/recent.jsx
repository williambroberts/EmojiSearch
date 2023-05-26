"use client"
import React, { createContext, useEffect, useState } from 'react'
export const recentlyViewedEmojiContext = createContext()
const RecentViewedEmojisProvider = ({children}) => {
    const [recentlyViewedEmojisListLength,setRecentlyViewedEmojisListLength]=useState(0)

    useEffect(()=>{

    }[recentlyViewedEmojisListLength])
  return (
    <recentContext.Provider value={{recentlyViewedEmojisListLength,setRecentlyViewedEmojisListLength}}>
        {children}
    </recentContext.Provider>
  )
}

export default RecentViewedEmojisProvider