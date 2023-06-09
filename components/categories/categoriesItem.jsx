"use client"
import React, { useEffect } from 'react'
import { Noto_Color_Emoji } from 'next/font/google'
const noto = Noto_Color_Emoji({subsets:["emoji"],weight:["400"]})

import Link from 'next/link'
const CategoriesItem = ({text,hex,index,emoji}) => {
  console.log(text,emoji,index)
    // useEffect(()=>{
    //   document.querySelector(`.categories-item-icon${index}`).innerHTML=`${hex}`
    //   document.querySelector(`#categories-item-icon-noto${index}`).innerHTML=`${hex}`
    // },[])
   
  return (
    <Link className='categories-item' href={`/categories/${index}`}>
        <span className={`categories-item-icon${index}`}></span>

        <span className={noto.className} id={`categories-item-icon-noto${index}`}>{emoji}</span>
        <span className="categories-item-text">{text}</span>
        <Link href={`/categories/${index}`} className='categories-item-link'>view all</Link>
    </Link>
  )
}

export default CategoriesItem
