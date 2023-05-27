"use client"
import React, {useContext, useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Noto_Color_Emoji } from 'next/font/google'
import { addDoc, collection, setDoc, deleteDoc, doc, query, onSnapshot,updateDoc,runTransaction,arrayUnion } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import firebase_app, { firestore } from '@/firebase/config';
const noto = Noto_Color_Emoji({subsets:["emoji"],weight:["400"]})
import Link from 'next/link';
import IconCopy from '../icons/action/copy';
import EmojiModal from './emopjiModal';
import FlexRow from '../setup/flexRow';
import { recentlyViewedEmojiContext } from '@/contexts/recent';
import { IsAUserLoggedInContext } from '@/contexts/authContext';
import emojis from "../../lib/emojis.json"
import Icon216StarEmpty from '../icons/action/hollowStar';
import Icon218StarFull from '../icons/action/star';
const EmojiItem = ({item,pathname,index}) => {
  const {user,usersFavs}=useContext(IsAUserLoggedInContext)
  const {recentlyViewedEmojisListLength,setRecentlyViewedEmojisListLength,hasChanged,setHasChanged}=useContext(recentlyViewedEmojiContext)
  const [clicked,setClicked]=useState(false)
  const [toOpen,setToOpen]=useState(false)
  const [currentUserFavs,setCurrentUseFavs]=useState(null)
  const [emojiStar,setEmojiStar]=useState(<Icon216StarEmpty/>)
  const [isAFav,setIsAFav]=useState(false)
  const handleCopy = ()=>{
    navigator.clipboard.writeText(item.emoji)
    setClicked((prev)=> {return !prev})
    setTimeout(()=>{
      return setClicked((prev)=>{return !prev})
    },2000)
  }
 useEffect(()=>{
  setCurrentUseFavs((prev)=>{return usersFavs})
  try {
    for (let emoji of usersFavs) {
    if(emoji.name===item.name){
      setIsAFav(true)
      break
    }else {
      setIsAFav(false)
    }
  }
  }catch (err){
    console.log(err)
  }
  
  // console.log("chane",usersFavs)
 },[usersFavs])
  // useEffect(()=> {
  //   console.log("OK")
  // },[toOpen])

  const OpenModal = ()=>{
 
   
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
     setHasChanged((prev)=>!prev)
    console.log(pathname,typeof(pathname))
    if (pathname==="/"){
      return
    }else{
     
    
    let emojiToSave = emojis.filter((emoji,index)=>emoji.name===item.name)[0]
    
    const emojiListSTring = localStorage.getItem("emojiList")
    let emojiList = JSON.parse(emojiListSTring)
    for (let item of emojiList){
      if (item.name===emojiToSave.name){
        console.log("in already")
        return 
      }
    }
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
  const handdleDeleteFav = async ()=>{
    const userFavRef = doc(firestore, 'favorites', user?.email);
 try {
      await runTransaction(firestore, async (transaction) => {
        const docSnapshot = await transaction.get(userFavRef);
       const currentFavs = [...docSnapshot.data().emojis]
        console.log(currentFavs)
     
      let updatedFavorites = currentFavs.filter((emoji,index)=>emoji.name!==item.name)
      transaction.update(userFavRef, { emojis: updatedFavorites })
       console.log("deleted that emoji",item.emoji) 
      })
  
      
    } catch (error) {
      console.error('Error deleting emoji: ', error);
    }
  }
  const handleFav =async ()=>{
    if (isAFav){
      handdleDeleteFav()
      return
    }
      
    
    const userFavRef = doc(firestore, 'favorites', user?.email);
    
  
   
  
    
    try {
      await updateDoc(userFavRef,{ emojis: arrayUnion(item)})
      console.log("added emoji ")
       
    }catch (err){
      console.log(err)
    }
    
  }
  return (
    <div className='emoji-item'>
      <button className='emoji-item-favourite' onClick={()=>handleFav()} disabled={user===null? true: false}>{isAFav? <Icon218StarFull/>:<Icon216StarEmpty/>}</button>
      
      <FlexRow justifyContent={"center"}>
        <span className={`${noto.className} emoji-item-emoji `}>{item.emoji}</span>
        <span className='emoji-item-emoji'>{item.emoji}</span>
      </FlexRow>
      
      <span className='emoji-item-name'>{item.name}</span>

      <FlexRow>

      
     <span className='emoji-item-copy' onClick={()=>handleCopy()}>
      <span><IconCopy/> </span>

     <span className='copy-span'><strong>{clicked? "Copied!": "Copy  "}</strong></span>
    
     </span>
      {/* <span><Link href={`${pathname}/${item.shortname}`}>View</Link></span> */}
      <span className='emoji-item-open' onClick={()=>OpenModal()}><strong>view</strong></span>
</FlexRow>
     <dialog id={`emoji-modal${index}`} className="emoji-dialog"
     onClick={(e)=>closeModal(e)}>
      <EmojiModal closeModal={closeModal} item={item}/>
     </dialog>

    </div>
  )
}

export default EmojiItem