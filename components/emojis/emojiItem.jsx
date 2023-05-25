"use client"
import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Noto_Color_Emoji } from 'next/font/google'
const noto = Noto_Color_Emoji({subsets:["emoji"],weight:["400"]})
import Link from 'next/link';
import IconCopy from '../icons/action/copy';

const EmojiItem = ({item,pathname,index}) => {
  const [clicked,setClicked]=useState(false)
  const handleCopy = ()=>{
    navigator.clipboard.writeText(item.emoji)
    setClicked((prev)=> {return !prev})
    setTimeout(()=>{
      return setClicked((prev)=>{return !prev})
    },2000)
  }
  return (
    <tr className='emoji-item'>
      <td className={noto.className}>{item.emoji}</td>
      <td className='emoji-item-name'>{item.name}</td>
     <td className='emoji-item-copy' onClick={()=>handleCopy()}>
      <span><IconCopy/> </span>
     <span>{clicked? "Copied!": "Copy"}</span>
    
     </td>
      <td><Link href={`${pathname}/${item.shortname}`}>View</Link></td>
    </tr>
  )
}

export default EmojiItem