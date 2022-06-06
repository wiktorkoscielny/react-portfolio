import React from 'react'
import './header.css'

// components
import CTA from './CTA'

//images
import ME from '../../assets/me-1.png'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Wiktor Koscielny</h1>
        <h5 className='text-light'>Front End Developer</h5>
        <CTA />

        <div className='me'>
          <img src={ME} alt='' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header