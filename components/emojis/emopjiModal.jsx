"use client"
import React,{useState} from 'react'
import { Noto_Color_Emoji } from 'next/font/google'
import EmojiModalAttribute from './emojiModalAttribute'
import FlexRow from '../setup/flexRow'
const noto = Noto_Color_Emoji({subsets:["emoji"],weight:["400"]})
const EmojiModal = ({closeModal,item}) => {
    const [myFontSize,setMyFontSize]=useState(16)
    const [isNoto,setIsNoto]=useState(false)
    const handleInput = (e)=>{

    }
  return (
    <div className='emoji-modal'>  
        <div className={isNoto? noto.className:"" } style={{fontSize:`${myFontSize}px`}}>{item.emoji}</div> 
        <button className="emoji-modal-swap" onClick={()=>setIsNoto((prev)=>!prev)}>view {isNoto? "Standard":"Noto"} Emoji</button>
       
       <FlexRow>
        <button className='emoji-button-plus' onClick={()=>setMyFontSize((prev)=>prev>=200? prev:prev+1)}>+</button>
        <input type="number" min="1" max="200" value={myFontSize} onChange={(e)=>setMyFontSize((prev)=>e.target.value)} onInput={(e)=>handleInput(e)}/>
        <button className='emoji-button-minus'onClick={()=>setMyFontSize((prev)=>prev<=1? prev:prev-1)}>-</button>
       </FlexRow>
        
       <EmojiModalAttribute text={item.shortname} name={"Shortname"}/>
       <EmojiModalAttribute text={item.unicode} name={"Unicode"}/>
       <EmojiModalAttribute text={item.html} name={"Html"}/>

       <EmojiModalAttribute text={item.category} name={"Category"}/>

    </div>
  )
}

export default EmojiModal