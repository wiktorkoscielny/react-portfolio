import React from 'react'
import './header.css'

// components
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

//images
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Wiktor Koscielny</h1>
        <h5 className='text-light'>Front End Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header