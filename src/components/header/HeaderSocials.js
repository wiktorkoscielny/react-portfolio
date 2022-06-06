import React from 'react'

// react icons
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://github.com/wiktorkoscielny' target="_blank"><FaGithub /></a>
        <a href='https://www.linkedin.com/in/wiktor-kościelny-262649232/' target="_blank"><BsLinkedin /></a>
    </div>
  )
}

export default HeaderSocials