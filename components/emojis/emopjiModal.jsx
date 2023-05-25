"use client"
import React,{useState} from 'react'
import { Noto_Color_Emoji } from 'next/font/google'
import EmojiModalAttribute from './emojiModalAttribute'
const noto = Noto_Color_Emoji({subsets:["emoji"],weight:["400"]})
const EmojiModal = ({closeModal,item}) => {
    const [isNoto,setIsNoto]=useState(false)
  return (
    <div className='emoji-modal'>  
        <div className='emoji-modal-emoji'>{item.emoji}</div> 
        <button className="emoji-modal-swap">view {isNoto? "Standard":"Noto"} Emoji</button>
       <EmojiModalAttribute text={item.shortname} name={"Shortname"}/>
       <EmojiModalAttribute text={item.unicode} name={"Unicode"}/>
       <EmojiModalAttribute text={item.html} name={"Html"}/>

       <EmojiModalAttribute text={item.category} name={"Category"}/>

    </div>
  )
}

export default EmojiModal