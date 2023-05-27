"use client"
import React, { useContext,useState,useEffect } from 'react'
import { IsAUserLoggedInContext } from '@/contexts/authContext'
import { v4 as uuidv4 } from 'uuid';
import { usePathname } from 'next/navigation';
import EmojiItem from '../emojis/emojiItem';
import FlexRow from '../setup/flexRow';
import Title from '../setup/title';
const FavouriteEmojisComponent = () => {
    const pathname = usePathname()
    const {usersFavs} = useContext(IsAUserLoggedInContext)
    const [favourites,setFavourites]=useState(null)
    const [startIndex,setStartIndex]=useState(0)
    const [endIndex,setEndIndex]=useState(10)
    useEffect(()=>{
        setFavourites(usersFavs)
    },[usersFavs])
  return (
    <div className='recent-container'>
        <Title text={"Your Favourite Emojis"}/>
        <FlexRow>
            <button onClick={()=>handlePrev()} className='prev-button'>prev</button>
            <button onClick={()=>handleNext()} className='next-button'>next</button>
        </FlexRow>
    <div className='category-grid'>
        {favourites?.slice(startIndex,endIndex).map((item,index)=> (<EmojiItem key={uuidv4()} item={item} index={index} pathname={pathname}/> ))}
    </div>
    </div>
  )
}

export default FavouriteEmojisComponent