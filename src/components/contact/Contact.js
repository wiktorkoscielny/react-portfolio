import React from 'react'
import './contact.css'

// emailjs
import { useRef } from 'react';
import emailjs from 'emailjs-com'

// icons
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICEID_API_KEY, process.env.REACT_APP_TEMPLATEID_API_KEY, form.current, process.env.REACT_APP_PUBLICKEY_API_KEY)
      .then((result) => {
          alert('Email sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Somethig went wrong, check the console');
      });

      e.target.reset();
  };

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
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input  type='email' name='email' placeholder='Your email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button data-testid='button' type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact