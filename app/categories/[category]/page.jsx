"use client"
import React from 'react'
import { Noto_Color_Emoji } from 'next/font/google'
import emojis from "../../../lib/emojis.json"
import categories from "../../../lib/categories.json"
const noto = Noto_Color_Emoji({subsets:["emoji"],weight:["400"]})
import { usePathname } from 'next/navigation';
import EmojiItem from '@/components/emojis/emojiItem'
import { v4 as uuidv4 } from 'uuid';
import BackButton from '@/components/setup/buttons/backButton'

const IndividualcategoryPage = ({params: {category}}) => {
  const pathname = usePathname();
  return (
    <main>
     <h3 className="individual-category-title" >{categories[category].category}</h3> 
      {/* category name */}
      <BackButton/>
      {/* back */}
     
      <table className='individual-category-table'>
        <thead>
        <tr>
          <th>Character</th><th>Name</th><th>Copy</th><th>Details</th>
        </tr>
        </thead>
        <tbody>
        {emojis.filter((item,index)=> item.category===categories[category].category).map((item,index)=> (<EmojiItem key={uuidv4()} item={item} index={index} pathname={pathname}/> ) )}
       </tbody>
      </table>
      </main>
  )
}

export default IndividualcategoryPage