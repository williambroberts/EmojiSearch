"use client"
import React, { useContext } from 'react'
import { Noto_Color_Emoji } from 'next/font/google'
import emojis from "../../../lib/emojis.json"
import categories from "../../../lib/categories.json"
const noto = Noto_Color_Emoji({subsets:["emoji"],weight:["400"]})
import { usePathname } from 'next/navigation';
import EmojiItem from '@/components/emojis/emojiItem'
import { v4 as uuidv4 } from 'uuid';
import BackButton from '@/components/setup/buttons/backButton'
import Title from '@/components/setup/title'
import { recentlyViewedEmojiContext } from '@/contexts/recent'
import IconArrowUp from '@/components/icons/action/arrow'
const IndividualcategoryPage = ({params: {category}}) => {
  const {recentlyViewedEmojisListLength,setRecentlyViewedEmojisListLength}=useContext(recentlyViewedEmojiContext)
  const pathname = usePathname()
  const handleClearViews = ()=>{
    
    localStorage.setItem("emojiList",JSON.stringify([]))
    setRecentlyViewedEmojisListLength(0)
  }
  const handleScroll = ()=>{
    
    window.scrollTo({top:0,behavior:"smooth"})
  }
  return (
    <main>
    <Title text={categories[category].category} margin={"1rem 0 1rem 0"}/> 
     
      <BackButton/>
     {/* <span onClick={()=>handleClearViews()} className=''>clear recent</span> */}
      <div className='category-grid'>
      {emojis.filter((item,index)=> item.category===categories[category].category).map((item,index)=> (<EmojiItem key={uuidv4()} item={item} index={index} pathname={pathname}/> ) )}
      </div>


      {/* <table className='individual-category-table'>
        <thead>
        <tr>
          <th>Character</th><th>Name</th><th>Copy</th><th>Details</th>
        </tr>
        </thead>
        <tbody className='individual-category-table-body'>
        {emojis.filter((item,index)=> item.category===categories[category].category).map((item,index)=> (<EmojiItem key={uuidv4()} item={item} index={index} pathname={pathname}/> ) )}
       </tbody>
      </table> */}
         <div className="scroll-top"
    onClick={()=>handleScroll()}><IconArrowUp/></div>
      </main>
  )
}

export default IndividualcategoryPage