"use client"
import React, { useEffect,useState } from 'react'
import { Noto_Color_Emoji } from 'next/font/google'
import { v4 as uuidv4 } from 'uuid';
const noto = Noto_Color_Emoji({subsets:["emoji"],weight:["400"]})
import categories  from "../../lib/categories.json"
import CategoriesItem from '@/components/categories/categoriesItem'
const CaterogiesPage = () => {
    const [searchInput,setSearchInput]=useState()

  console.log(categories[0].category,searchInput)
  return (
   <main id="categories-main">
    {/* search bar */}
    {/* order by ?? */}
   <input className='category-search-input' placeholder='Search Categories'
    type="text" value={searchInput} name="categories-search" onChange={(e)=>setSearchInput(e.target.value.toLowerCase())}/>
    <div className='categories-container'>
      {searchInput===undefined? categories.map((item,index)=>( 
        <CategoriesItem hex={item.hex} key={uuidv4()} text={item.category} index={index}/>))
      :categories.filter((item)=>item.category.toLowerCase().includes(searchInput)).map((item,index)=>( 
        <CategoriesItem hex={item.hex} key={uuidv4()} text={item.category} index={index}/>
      )
      )}
    </div>
   </main>
  )
}

export default CaterogiesPage