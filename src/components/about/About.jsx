import React from 'react';
import './about.css';
import AboutImg from '../../assets/my-photo/about.webp';
import CV from '../../assets/Ombir-ZZ-CV.pdf';
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>
        <div className="about__container container grid">
           <img src={AboutImg} alt='' className='about__img' />
           <div className="about__data">
            <Info />
            <p className="about__description">Frontend Developer, I create web pages with UI / UX user Interface, I have years of experience and many clients are happy with the projects carried out.</p>
            <a download='' href={CV} className="button button--flex">Download CV
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill='var(--container-color)'
                className='button__icon'
              >
                <path 
                  d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"
                ></path>
                <path 
                  d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"
                ></path>
              </svg>
            </a>
           </div>
        </div>
    </section>
  );
};

export default About;