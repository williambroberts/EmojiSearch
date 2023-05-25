"use client"
import Title from '@/components/setup/title'
import React, {useState} from 'react'
import emojis from "../../lib/emojis.json"
import { v4 as uuidv4 } from 'uuid';
import { usePathname } from 'next/navigation';
import EmojiItem from '@/components/emojis/emojiItem';
const SearchPage = () => {
  const pathname = usePathname()
  const [searchText,SetSearchText]=useState(undefined)
  const [startIndex,setStartIndex]=useState(0)
  const [EndIndex,setEndIndex]=useState(0)
  const [pagnationLength,setPagnationLength]=useState(10)
  return (
    <main>
      {/* back */}
      {/*  */}
      <Title text={"Emoji Search"}/>
      <input className='search-input'
      type='text' placeholder='Search for an Emoji' value={searchText} onChange={(e)=>SetSearchText(e.target.value.toLowerCase())}/>
      <div className='search-results'>
        {searchText===undefined? <div>Search for an Emoji</div>: searchText.length<3? <div>Be more specific Please</div>: emojis.filter((item,index)=> item.name.toLowerCase().includes(searchText)
        
        ).map((item,index)=>(<div ><EmojiItem key={uuidv4()} item={item} index={index} pathname={pathname}/></div> ))}
      </div>
   
    </main> 
  )
}

export default SearchPage