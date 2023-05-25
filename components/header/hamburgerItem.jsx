import Link from 'next/link'
import React from 'react'

const HamburgerItem = ({icon,link,text}) => {
  return (
    <Link href={link}>
        <span className='hamburger-item-icon'>{icon}</span>
        <span className='hamburger-item-text'>{text}</span>
    </Link>
  )
}

export default HamburgerItem