import React from 'react';
import './testimonial.css';
import { TestData } from './TestData';
//Import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';

//Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

//Import Required Modules
import { Pagination } from 'swiper/modules';
const Testimonials = () => {
  return (
    <section className='testimonials container section'>
        <h2 className="section__title">My Clients' Say</h2>
        <span className="section__subtitle">Testiminial</span>    
        <Swiper className="testimonial__container"
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
            }}
            modules={[Pagination]}
        >
            {TestData.map(({id, image, title, description }) => {
                return (
                    <SwiperSlide className="testimonial__card" key={id}>
                        <img src={image} alt="" className="testimonial__img" />

                        <h3 className="testimonial__name">{title}</h3>
                        <p className="testiminial__description">{description}</p>
                    </SwiperSlide>
                )
            })};
        </Swiper>
    </section>
  );
};

export default Testimonials;