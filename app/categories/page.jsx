"use client"
import React, { useEffect,useState } from 'react'
import { Noto_Color_Emoji } from 'next/font/google'
import { v4 as uuidv4 } from 'uuid';
const noto = Noto_Color_Emoji({subsets:["emoji"],weight:["400"]})
import categories  from "../../lib/categories.json"
import CategoriesItem from '@/components/categories/categoriesItem'
import FlexRow from '@/components/setup/flexRow';
import Title from '@/components/setup/title';
import IconArrowUp from '@/components/icons/action/arrow';
const CaterogiesPage = () => {
    const [searchInput,setSearchInput]=useState()

  // console.log(categories[0].category,searchInput)
  const handleScroll = ()=>{
    
    window.scrollTo({top:0,behavior:"smooth"})
  }
  return (
   <main id="categories-main">
    {/* search bar */}
    {/* order by ?? */}
    
    <Title text={"Categories 📑"} margin={"1rem 0 0 0"}/>
   <input className='search-input' placeholder='Search Categories'
    type="text" value={searchInput} name="categories-search" onChange={(e)=>setSearchInput(e.target.value.toLowerCase())}/>
    <div className='categories-container'>
      {searchInput===undefined? categories.map((item,index)=>( 
        <CategoriesItem hex={item.hex} key={uuidv4()} text={item.category} index={index} emoji={item.emoji}/>))
      :categories.filter((item)=>item.category.toLowerCase().includes(searchInput)).map((item,index)=>( 
        <CategoriesItem hex={item.hex} key={uuidv4()} text={item.category}  emoji={item.emoji} index={index}/>
      )
      )}
    </div>
    <div className="scroll-top"
    onClick={()=>handleScroll()}><IconArrowUp/></div>
   </main>
  )
}

export default CaterogiesPage