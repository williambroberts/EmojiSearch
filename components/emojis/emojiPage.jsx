"use client"
import React from 'react'
import emojis from "../../lib/emojis.json"
import BackButton from '../setup/buttons/backButton'
const EmojiPageComponent = ({emoji}) => {
    //const theEmoji = useRef(emojis.filter((item)=>item.shortname=emoji))
    console.log(emoji,"inner emoji page")
    const theemoji = emojis.filter((item,index)=> index===parseInt(emoji))
    console.log(theemoji)
    //console.log(emojis.filter((item)=>item.shortname.slice(1,item.shortname.length-1)===emoji.slice(3,emoji.length-3))[0])
  return (
    <div>
        <BackButton/>
       {/* {emojis.filter((item)=>item.shortname.slice(1,item.shortname.length-1)===emoji.slice(3,emoji.length-3))[0].emoji} */}
     
       
    </div>
  )
}

export default EmojiPageComponent