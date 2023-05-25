import React from 'react'

const Hamburger = ({setIsHAmburger,isHamburger}) => {
  return (
    <div className={`hamburger ${isHamburger? "open":""} `}>
        
    </div>
  )
}

export default Hamburger