import React from 'react'
import FooterLink from './footerLink'
import IconGithub from '../icons/social/github'

const Footer = () => {
  return (
    <footer className='footer'>
        <nav className='footer-nav'>
            <FooterLink link={"https://github.com/williambroberts/EmojiSearch.git"} text={"Github"} icon={<IconGithub/>}/>
        </nav>
    </footer>
  )
}

export default Footer