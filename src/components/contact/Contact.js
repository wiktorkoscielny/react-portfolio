import React from 'react'
import './contact.css'

// icons
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>

        {/* LEFT SIDE */}
        <div className='contact__options'>

          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>loremipsum@gmail.com</h5>
            <a href='mailto:loremipsum@gmail.com' target='_blank'>Send Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine  className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>loremipsum</h5>
            <a href='https://m.me/lorem.ipsum' target='_blank'>Send Message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+1234567</h5>
            <a href='https://api.whatsapp.com/send?phone=+4812345678'>Send Message</a>
          </article>

        </div>

        {/* RIGHT SIDE */}
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input  type='email' name='email' placeholder='Your email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact