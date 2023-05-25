"use client"
import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Noto_Color_Emoji } from 'next/font/google'
const noto = Noto_Color_Emoji({subsets:["emoji"],weight:["400"]})
import Link from 'next/link';
import IconCopy from '../icons/action/copy';
import EmojiModal from './emopjiModal';
import FlexRow from '../setup/flexRow';

const EmojiItem = ({item,pathname,index}) => {
  const [clicked,setClicked]=useState(false)
 
  const handleCopy = ()=>{
    navigator.clipboard.writeText(item.emoji)
    setClicked((prev)=> {return !prev})
    setTimeout(()=>{
      return setClicked((prev)=>{return !prev})
    },2000)
  }
  const OpenModal = ()=>{
    let myDialog = document.querySelector(`#emoji-modal${index}`)
    myDialog.showModal()
  }
  const closeModal = (e)=>{
    let myDialog = document.querySelector(`#emoji-modal${index}`)
    
    if (e.target!==myDialog){
      return 
    }
    myDialog.close()
    
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