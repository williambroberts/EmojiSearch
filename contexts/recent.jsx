"use client"
import React, { createContext, useEffect, useState } from 'react'
export const recentlyViewedEmojiContext = createContext()
const RecentViewedEmojisProvider = ({children}) => {
    const [recentlyViewedEmojisListLength,setRecentlyViewedEmojisListLength]=useState(0)

    useEffect(()=>{
        if (recentlyViewedEmojisListLength>20){
            const emojiListSTring = localStorage.getItem("emojiList")
            const emojiList = JSON.parse(emojiListSTring).slice(1)
            localStorage.setItem("emojiList",JSON.stringify(emojiList))
        }
    },[recentlyViewedEmojisListLength])
  return (
    <recentlyViewedEmojiContext.Provider value={{recentlyViewedEmojisListLength,setRecentlyViewedEmojisListLength}}>
        {children}
    </recentlyViewedEmojiContext.Provider>
  )
}

export default RecentViewedEmojisProvider