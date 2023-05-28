"use client"
import React, { useContext, useEffect,useState } from 'react'
import { recentlyViewedEmojiContext } from '@/contexts/recent'
import { v4 as uuidv4 } from 'uuid';
import { usePathname } from 'next/navigation';
import EmojiItem from '../emojis/emojiItem';
import Title from '../setup/title';
import { Inter } from 'next/font/google';
const inter = Inter({subsets:["latin"]})
const RecentEmojis = () => {
    const pathname = usePathname()
    const {recentlyViewedEmojisListLength,setRecentlyViewedEmojisListLength,hasChanged,setHasChanged}=useContext(recentlyViewedEmojiContext)
    const [RecentEmojis,setRecentEmojis]=useState([])
    const handleClearViews = ()=>{
    
        localStorage.setItem("emojiList",JSON.stringify([]))
        setRecentlyViewedEmojisListLength(0)
        //setHasChanged((prev)=>prev)
        setRecentEmojis([])
      }
    useEffect(()=>{

        console.log(hasChanged)
        try {
          const emojiListSTring = localStorage.getItem("emojiList")
         // console.log(emojiListSTring,typeof(emojiListSTring))
          if (emojiListSTring===undefined){
            localStorage.setItem("emojiList",JSON.stringify([]))
            setRecentlyViewedEmojisListLength(0)
            //setHasChanged((prev)=>prev)
            setRecentEmojis([])
            //console.log("made new list for locla emojis")
          }

        let emojiList = JSON.parse(emojiListSTring)
        //console.log(emojiList,emojiListSTring)
        setRecentEmojis([...emojiList])
        }catch(err){
          console.log(err)
        }
        
    },[hasChanged])

    useEffect(()=>{
      // localStorage.setItem("emojiList",JSON.stringify([]))
      // setRecentlyViewedEmojisListLength(0)
     
      // setRecentEmojis([])
    },[])
  return (<div className='recent-container'>
    <Title text={"Recently Viewed"} margin={"1rem 0 0 0"}/>
    <button onClick={()=>handleClearViews()} className='recent-button'><span className={inter.className}>Clear recent</span></button>
    <div className='category-grid'>
        {RecentEmojis.map((item,index)=> (<EmojiItem key={uuidv4()} item={item} index={index} pathname={pathname}/> ))}
    </div>
    </div>
  )
}

export default RecentEmojis