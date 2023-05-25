"use client"
import React, { useEffect } from 'react'
import { Noto_Color_Emoji } from 'next/font/google'
const noto = Noto_Color_Emoji({subsets:["emoji"],weight:["400"]})

import Link from 'next/link'
const CategoriesItem = ({text,hex,index}) => {

    useEffect(()=>{
      document.querySelector(`.categories-item-icon${index}`).innerHTML=`${hex}`
      document.querySelector(`#categories-item-icon-noto${index}`).innerHTML=`${hex}`
    },[])
   
  return (
    <div className='categories-item'>
        <span className={`categories-item-icon${index}`}></span>

        <span className={noto.className} id={`categories-item-icon-noto${index}`}>{hex}</span>
        <span className="categories-item-text">{text}</span>
        <Link href={`/categories/${index}`} className='categories-item-link'>view all</Link>
    </div>
  )
}

export default CategoriesItem