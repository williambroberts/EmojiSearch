"use client"
import React, { useEffect } from 'react'
import { Noto_Color_Emoji } from 'next/font/google'
import { v4 as uuidv4 } from 'uuid';
const noto = Noto_Color_Emoji({subsets:["emoji"],weight:["400"]})
import categories  from "../../lib/categories.json"
import CategoriesItem from '@/components/categories/categoriesItem'
const CaterogiesPage = () => {
  useEffect(()=>{
    let n = document.querySelector(".test-span")
    n.innerHTML="&#128105;&zwj;&#128105;&zwj;&#128103;&zwj;&#128103;"
  },[])

 
  return (
   <main id="categories-main">
   
   
    <span className='test-span'></span>
    <div className='categories-container'>
      {categories.map((item,index)=>( 
        <CategoriesItem hex={item.hex} key={uuidv4()} text={item.category} index={index}/>
      )
      )}
    </div>
   </main>
  )
}

export default CaterogiesPage