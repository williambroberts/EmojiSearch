"use client"
import React, {useState,useEffect} from 'react'
import emojis from "../../lib/emojis.json"
import BackButton from '../setup/buttons/backButton'
import EmojiModalAttribute from './emojiModalAttribute'
import FlexRow from '../setup/flexRow'
import IconCopy from '../icons/action/copy'
import { Noto_Color_Emoji } from 'next/font/google'
const noto = Noto_Color_Emoji({subsets:["emoji"],weight:["400"]})
const EmojiPageComponent = ({emoji}) => {
   
    console.log(emoji,"inner emoji page")
    const theemoji = emojis.filter((item,index)=> index===parseInt(emoji))[0]
    console.log(theemoji)
    const [copyUnicode,setCopyUnicode]=useState(false)
    const [copyDecimal,setCopyDecimal]=useState(false)
    const [getCodeSnippet,setGetCodeSnippet]=useState(false)
    const [myFontSize,setMyFontSize]=useState(100)
    const [isNoto,setIsNoto]=useState(false)
    const handleInput = (e)=>{
        console.log(e.target.value)
        if (e.target.value >=200){
            setMyFontSize(200)
        }else if (e.target.value<0 ){
            setMyFontSize(1)
        }else {
            setMyFontSize(e.target.value)
        }
    }
    const handleCopyDecimal = ()=>{
        navigator.clipboard.writeText(theemoji.html)
        setCopyDecimal((prev)=> {return !prev})
        setTimeout(()=>{
          return setCopyDecimal((prev)=>{return !prev})
        },1000)
    }
    const handleCopyUnicode = ()=>{
        navigator.clipboard.writeText(theemoji.unicode)
        setCopyUnicode((prev)=> {return !prev})
    setTimeout(()=>{
      return setCopyUnicode((prev)=>{return !prev})
    },1000)
    }
    const handleGetCode = () =>{
        //console.log("grdgrd")
        const myCode = `<span className={noto.className}>${theemoji.html}</span>`
        navigator.clipboard.writeText(myCode)
        setGetCodeSnippet(true)
        setTimeout(()=>{
            setGetCodeSnippet(false)
        },1000)
    }
  return (
    <div className='emoji-page-item'>
        <BackButton/>
       {/* {emojis.filter((item)=>item.shortname.slice(1,item.shortname.length-1)===emoji.slice(3,emoji.length-3))[0].emoji} */}
       <div className='emoji-modal' style={{borderColor:`${copyUnicode? "var(--palegreen)" : copyDecimal? "var(--red)" : getCodeSnippet? "var(--yellow2)": ""}`,
    backgroundColor:`${copyUnicode? "var(--verypalegreen)" : copyDecimal? "var(--verypalered)" : getCodeSnippet? "var(--verypaleyellow2)": ""}`}}>  
        <div className={isNoto? noto.className:"" } style={{fontSize:`${myFontSize}px`}}>{theemoji.emoji}</div> 
        <span>Font size: {myFontSize}(px)</span>
        <span className="emoji-modal-swap" onClick={()=>setIsNoto((prev)=>!prev)}>view {isNoto? "Standard":"Noto"} Emoji</span>
        
       <FlexRow>
        <span className='emoji-button-plus' onClick={()=>setMyFontSize((prev)=>prev>=200? prev:prev+1)}>+</span>
        <input type="number" min="1" max="200" value={myFontSize} onInput={(e)=>handleInput(e)}/>
        <span className='emoji-button-minus'onClick={()=>setMyFontSize((prev)=>prev<=1? prev:prev-1)}>-</span>
       </FlexRow>
       <EmojiModalAttribute text={theemoji.name} name={"Name"}/>
       <EmojiModalAttribute text={theemoji.shortname} name={"Shortname"}/>
       <EmojiModalAttribute text={theemoji.unicode} name={"Unicode"}/>
       <EmojiModalAttribute text={theemoji.html} name={"Decimal"}/>

       <EmojiModalAttribute text={theemoji.category} name={"Category"}/>
        <FlexRow>
             <div className='emoji-modal-copy'  onClick={()=>handleCopyUnicode()}>
            <span><IconCopy/></span>
            <span><strong>{copyUnicode? "Copied":"Copy Unicode"}</strong></span>
        </div>
        <div className='emoji-modal-copy' onClick={()=>handleCopyDecimal()}>
            <span><IconCopy/></span>
            <span><strong>{copyDecimal? "Copied":"Copy Decimal"}</strong></span>
        </div>
        </FlexRow>
        <span className='emoji-modal-getcode' onClick={()=>handleGetCode()}><strong>{getCodeSnippet? "Copied, thank you":"Get Noto Code Snippet"}</strong></span>
       
    </div>
       
    </div>
  )
}

export default EmojiPageComponent