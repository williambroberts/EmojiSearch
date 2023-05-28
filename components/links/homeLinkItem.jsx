import React from 'react'
import Link from 'next/link'
const HomeLinkItem = ({link,text,icon}) => {
  return (
    <Link href={link} className="home-link-item"
    >{icon}{text}</Link>
  )
}

export default HomeLinkItem