"use client"
import React,{useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import emojis from "../../lib/emojis.json"
import EmojiItem from '../emojis/emojiItem';
import { usePathname } from 'next/navigation';
import Title from '../setup/title';
const PopularEmojisComponent = () => {
    const pathname = usePathname()
    const [randomEmojis,setRandomEmojis]=useState(null)
    useEffect(()=>{
        handleRandom()  
    },[])
    const handleRandom = ()=>{
        let nums = []
        for (let i =0; i<6; i++){
            nums.push(Math.floor(Math.random()*emojis.length))
        }
       
        let newEmojis = emojis.filter((item,index)=> nums?.includes(index))
        // console.log(nums,newEmojis)
         setRandomEmojis(newEmojis)
    }
  return (
    <div className='recent-container'>
    <Title text={"Some random emojis"} margin={"1rem 0 0 0"}/>
    <span onClick={()=>handleRandom()} className='recent-button'> more emojis</span>
    <div className='category-grid'>
        {randomEmojis?.map((item,index)=> (<EmojiItem key={uuidv4()} item={item} index={index} pathname={pathname}/> ))}
    </div>
    </div>
  )
}

export default PopularEmojisComponent