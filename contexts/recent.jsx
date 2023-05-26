"use client"
import React, { createContext, useEffect, useState } from 'react'
export const recentlyViewedEmojiContext = createContext()
const RecentViewedEmojisProvider = ({children}) => {
    const [recentlyViewedEmojisListLength,setRecentlyViewedEmojisListLength]=useState(0)
    const [hasChanged,setHasChanged]=useState(false)
    
  return (
    <recentlyViewedEmojiContext.Provider value={{hasChanged,setHasChanged,
    recentlyViewedEmojisListLength,setRecentlyViewedEmojisListLength}}>
        {children}
    </recentlyViewedEmojiContext.Provider>
  )
}

export default RecentViewedEmojisProvider