import React from 'react'
import './portfolio.css'

// images
import IMG1 from '../../assets/image-1.jpg'
import IMG2 from '../../assets/image-2.jpg'
import IMG3 from '../../assets/image-3.jpg'
import IMG4 from '../../assets/image-4.jpg'
import IMG5 from '../../assets/image-5.jpg'
import IMG6 from '../../assets/image-6.jpg'

// generating portfolio items using map method

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'This is a portfolio item title',
    alt: 'Portfolio picture no. 1',
    github: 'htpps://github.com',
    demo: 'https://www.youtube.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'This is a portfolio item title',
    alt: 'Portfolio picture no. 2',
    github: 'htpps://github.com',
    demo: 'https://www.youtube.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'This is a portfolio item title',
    alt: 'Portfolio picture no. 3',
    github: 'htpps://github.com',
    demo: 'https://www.youtube.com',
  },
  {
    id: 4,
    image: IMG4,
    title: 'This is a portfolio item title',
    alt: 'Portfolio picture no. 4',
    github: 'htpps://github.com',
    demo: 'https://www.youtube.com',
  },
  {
    id: 5,
    image: IMG5,
    title: 'This is a portfolio item title',
    alt: 'Portfolio picture no. 5',
    github: 'htpps://github.com',
    demo: 'https://www.youtube.com',
  },
  {
    id: 6,
    image: IMG6,
    title: 'This is a portfolio item title',
    alt: 'Portfolio picture no. 6',
    github: 'htpps://github.com',
    demo: 'https://www.youtube.com',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

        {
          data.map(({id, image, title, alt, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={alt}></img>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
        
      </div>

    </section>
  )
}

export default Portfolio