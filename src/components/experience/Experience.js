import React from 'react'
import './experience.css'

// icons
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>
        Skills I Have
      </h5>
      <h2>My Experience</h2>

      <div className='container experiencce__container'>
        <div className='experience__frontend'>

          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>

        </div>
        {/* END OF FRONT END */}
        <div className='experience__backend'>

          <h3>Backend Development</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </article>

            </div>

        </div>
      </div>
    </section>
  )
}

export default Experience