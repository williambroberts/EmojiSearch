
import React from 'react'
import Title from '../setup/title'
import FlexRow from '../setup/flexRow'
import Filler from '../setup/filler'
import { Caveat } from 'next/font/google'
import { Noto_Color_Emoji } from 'next/font/google'
import FlexCol from '../setup/flexCol'
const noto = Noto_Color_Emoji({subsets:["emoji"],weight:["400"]})
const caveat = Caveat({subsets:["cyrillic"],weight:["400","500","600"]})
const Banner = ({name}) => {
  return (
    <div className='banner'>
        {/* emojisearch */}
        
        <h3 className={`${caveat.className} emoji-title`}>EmojiSearch 🔎</h3>
        <FlexRow>
             <Title text={"Welcome"}/>
             <Filler width={"2px"}/>
            <Title text={name}/>
            
        </FlexRow>
        <div className='banner-emoji-container'>
            <span className={`${noto.className} banner-item-emoji`}>🐫</span>
            <span className={`${noto.className} banner-item-emoji`}>🥳</span>
            <span className={`${noto.className} banner-item-emoji`}>🗡️</span>
            {/* <span className='banner-item-emoji'>🥳🐫</span> */}
       </div> 
        <div className='banner-emoji-container'>
            <span className={`${noto.className} banner-item-emoji`}>🎉</span>
            <span className={`${noto.className} banner-item-emoji`}>🏕️</span>
            <span className={`${noto.className} banner-item-emoji`}>🍪</span>
            {/* <span className='banner-item-emoji'>🥳🐫</span> */}
       </div> 
       {/* image */}
    </div>
  )
}

export default Banner