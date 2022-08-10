import React from "react";
import './testimonials.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// avatars
import AVTR1 from '../../assets/avatar-test.png'

// generate Testimonials from array with map method
const data = [
    {
        avatar: AVTR1,
        alt: 'Avatar picture',
        name: 'Tarnished',
        review: 'The Tarnished are individuals who lost the grace of the Erdtre and were consequently banished from the Lands Between by Queen Marika the Eternal. Following the breaking of the Elden Ring, the Tarnished were beckoned by lost grace.'
    },
    {
        avatar: AVTR1,
        alt: 'Avatar picture',
        name: 'Tarnished',
        review: 'The Tarnished are individuals who lost the grace of the Erdtre and were consequently banished from the Lands Between by Queen Marika the Eternal. Following the breaking of the Elden Ring, the Tarnished were beckoned by lost grace.'
    },
    {
        avatar: AVTR1,
        alt: 'Avatar picture',
        name: 'Tarnished',
        review: 'The Tarnished are individuals who lost the grace of the Erdtre and were consequently banished from the Lands Between by Queen Marika the Eternal. Following the breaking of the Elden Ring, the Tarnished were beckoned by lost grace.'
    },
    {
        avatar: AVTR1,
        alt: 'Avatar picture',
        name: 'Tarnished',
        review: 'The Tarnished are individuals who lost the grace of the Erdtre and were consequently banished from the Lands Between by Queen Marika the Eternal. Following the breaking of the Elden Ring, the Tarnished were beckoned by lost grace.'
    },
]

const Testimonials = () => {
  return (
      <section className="Testimonials">
          
        <h5>Rewiev from clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >

            {
                data.map(({avatar, alt, name, review}, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonial">
                            <div className="client__avatar">
                                <img src={avatar} alt={alt}/>
                            </div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">{review}</small>
                        </SwiperSlide>
                    )
                })
            }

            
            
        </Swiper>

      </section>
  )
}

export default Testimonials