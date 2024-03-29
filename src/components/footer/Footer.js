import React from 'react'
import './footer.css'

// icons
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Wiktor Koscielny</a>

      <ul className='permalinks'>
        <li><a data-testid='home-link' href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a data-testid='fb-icon' href='https://facebook.com'><FaFacebookF /></a>
        <a data-testid='ig-icon' href='https://instagram.com'><FaInstagram /></a>
        <a data-testid='tt-icon' href='https://twitter.com'><FaTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Wiktor Koscielny</small>
      </div>
    </footer>
  )
}

export default Footer