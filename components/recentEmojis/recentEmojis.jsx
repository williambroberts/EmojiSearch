"use client"
import React, { useContext, useEffect,useState } from 'react'
import { recentlyViewedEmojiContext } from '@/contexts/recent'
import { v4 as uuidv4 } from 'uuid';
import { usePathname } from 'next/navigation';
import EmojiItem from '../emojis/emojiItem';
const RecentEmojis = () => {
    const pathname = usePathname()
    const {recentlyViewedEmojisListLength,setRecentlyViewedEmojisListLength,hasChanged,setHasChanged}=useContext(recentlyViewedEmojiContext)
    const [RecentEmojis,setRecentEmojis]=useState([])
    const handleClearViews = ()=>{
    
        localStorage.setItem("emojiList",JSON.stringify([]))
        setRecentlyViewedEmojisListLength(0)
      }
    useEffect(()=>{
        console.log(hasChanged)
        const emojiListSTring = localStorage.getItem("emojiList")
        let emojiList = JSON.parse(emojiListSTring)
        setRecentEmojis([...emojiList])
    },[hasChanged])
  return (<div className='recent-container'>

    <button onClick={()=>handleClearViews()}>clear recent</button>
    <div className='category-grid'>
        {RecentEmojis.map((item,index)=> (<EmojiItem key={uuidv4()} item={item} index={index} pathname={pathname}/> ))}
    </div>
    </div>
  )
}

export default RecentEmojis