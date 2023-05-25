import React from 'react'

const FooterLink = ({link,text,icon}) => {
  return (
    <a href={link} target='_blank' className='footer-link'>
        <span className='footer-link-icon'>
            {icon}
        </span>
        <span className='footer-link-text'>
            {text}
        </span>
    </a>
  )
}

export default FooterLink