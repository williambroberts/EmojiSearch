"use client"
import React, {useContext, useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Noto_Color_Emoji } from 'next/font/google'
const noto = Noto_Color_Emoji({subsets:["emoji"],weight:["400"]})
import Link from 'next/link';
import IconCopy from '../icons/action/copy';
import EmojiModal from './emopjiModal';
import FlexRow from '../setup/flexRow';
import { recentlyViewedEmojiContext } from '@/contexts/recent';
import emojis from "../../lib/emojis.json"
const EmojiItem = ({item,pathname,index}) => {
  const {recentlyViewedEmojisListLength,setRecentlyViewedEmojisListLength,hasChanged,setHasChanged}=useContext(recentlyViewedEmojiContext)
  const [clicked,setClicked]=useState(false)
  const [toOpen,setToOpen]=useState(false)
  const handleCopy = ()=>{
    navigator.clipboard.writeText(item.emoji)
    setClicked((prev)=> {return !prev})
    setTimeout(()=>{
      return setClicked((prev)=>{return !prev})
    },2000)
  }
  useEffect(()=> {
    console.log("OK")
  },[toOpen])

  const OpenModal = ()=>{
  // setToOpen((prev)=>!prev)
    // setRecentlyViewedEmojisListLength((prev)=>prev+1)
    let myDialog = document.querySelector(`#emoji-modal${index}`)
    console.log(myDialog)
    myDialog.showModal()
    
  }
  
  const closeModal = (e)=>{
    
    let myDialog = document.querySelector(`#emoji-modal${index}`)
    if (e.target!==myDialog){
      return 
    }
     myDialog.close()
     setHasChanged((prev=>!prev))
    console.log(pathname,typeof(pathname))
    if (pathname==="/"){
      return
    }else{
     
    
    let emojiToSave = emojis.filter((emoji,index)=>emoji.name===item.name)[0]

    const emojiListSTring = localStorage.getItem("emojiList")
    let emojiList = JSON.parse(emojiListSTring)
     console.log("to save",emojiToSave)
    if (emojiList!==null){

      console.log(emojiList.length)
      if (emojiList.length>20){
        emojiList=emojiList.slice(1)
      }
      let newEmojiList = [...emojiList,emojiToSave]
      localStorage.setItem("emojiList",JSON.stringify(newEmojiList))
    }else {
      let newEmojiList = [emojiToSave]
      localStorage.setItem("emojiList",JSON.stringify(newEmojiList))
    }
   
   
    }
  }
  return (
    <div className='emoji-item'>
      <span className='emoji-item-favorite'>Fav</span>
      <FlexRow>
        <span className={`${noto.className} emoji-item-emoji `}>{item.emoji}</span>
        <span className='emoji-item-emoji'>{item.emoji}</span>
      </FlexRow>
      
      <span className='emoji-item-name'>{item.name}</span>

      <FlexRow>

      
     <span className='emoji-item-copy' onClick={()=>handleCopy()}>
      <span><IconCopy/> </span>

     <span className='copy-span'>{clicked? "Copied!": "Copy  "}</span>
    
     </span>
      {/* <span><Link href={`${pathname}/${item.shortname}`}>View</Link></span> */}
      <span className='emoji-item-open' onClick={()=>OpenModal()}>view</span>
</FlexRow>
     <dialog id={`emoji-modal${index}`} className="emoji-dialog"
     onClick={(e)=>closeModal(e)}>
      <EmojiModal closeModal={closeModal} item={item}/>
     </dialog>

    </div>
  )
}

export default EmojiItem