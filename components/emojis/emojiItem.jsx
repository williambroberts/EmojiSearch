"use client"
import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Noto_Color_Emoji } from 'next/font/google'
const noto = Noto_Color_Emoji({subsets:["emoji"],weight:["400"]})
import Link from 'next/link';
import IconCopy from '../icons/action/copy';
import EmojiModal from './emopjiModal';

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
    console.log(e.target,document.querySelector(".emoji-modal"),myDialog)
    if (e.target!==myDialog){
      return 
    }
    myDialog.close()
    
  }
  return (
    <div className='emoji-item'>
      <span className='emoji-item-favorite'>Fav</span>
      <span className={noto.className}>{item.emoji}</span>
      <span className='emoji-item-name'>{item.name}</span>
     <span className='emoji-item-copy' onClick={()=>handleCopy()}>
      <span><IconCopy/> </span>
     <span className='copy-span'>{clicked? "Copied!": "Copy  "}</span>
    
     </span>
      {/* <span><Link href={`${pathname}/${item.shortname}`}>View</Link></span> */}
      <span className='emoji-item-open' onClick={()=>OpenModal()}>view</span>

     <dialog id={`emoji-modal${index}`} className="emoji-dialog"
     onClick={(e)=>closeModal(e)}>
      <EmojiModal closeModal={closeModal} item={item}/>
     </dialog>

    </div>
  )
}

export default EmojiItem