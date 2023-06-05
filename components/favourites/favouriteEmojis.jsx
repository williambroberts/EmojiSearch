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
    const [favourites,setFavourites]=useState([])
    const [startIndex,setStartIndex]=useState(0)
    const [endIndex,setEndIndex]=useState(10)
    useEffect(()=>{
        setFavourites(usersFavs)
       
    },[usersFavs])
    useEffect(()=>{
     setEndIndex(Math.min(10,favourites?.length))
    },[favourites])
    const handleNext = ()=>{
        console.log(startIndex,endIndex)
        setEndIndex((prev)=> {return Math.min(favourites?.length,prev+10)})
        setStartIndex((prev)=>(favourites?.length-prev)<10? prev : prev+10 )
    }
    const handlePrev = ()=>{
        setStartIndex((prev)=>Math.max(0,prev-10))
        setEndIndex((prev)=>(favourites?.length-prev)<10? prev:prev-10)
    }
  return (
    <div className='recent-container'>
        <Title text={"⭐ Your Favourite Emojis ⭐"} margin={"1rem 0rem"}/>
        <span className='favourite-span'>You have <strong>{favourites===[]? "": favourites?.length}</strong> favourites</span>
        <FlexRow gap={"1rem"}>
            <span onClick={()=>handlePrev()} className='prev-button'>prev</span>
           {favourites?.length>0? 
            <span className='favourite-span'> Showing favorites {startIndex+1}:{endIndex}</span>:
            <span className='favourite-span'> Showing <strong>0</strong> favorites </span>
            }
            <span onClick={()=>handleNext()} className='next-button'>next</span>
        </FlexRow>
    <div className='category-grid'>
        {favourites?.slice(startIndex,endIndex).map((item,index)=> (<EmojiItem key={uuidv4()} item={item} index={index} pathname={pathname}/> ))}
    </div>
    </div>
  )
}

export default FavouriteEmojisComponent