import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
 
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_k0uz2ae', 
            'template_4lberwb', 
            form.current, {
            publicKey: 'vQWaTOGq2eAAftIE1',
        })
        e.target.reset()
    };
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get In Touch</h2>
        <span className="section__subtitle">Contact Me</span>
        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className='contact__title'>Talk to Me</h3>
                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">zablonombiri001@gmail.com</span>
                        <a href="mailto:zablonombiri001@gmail.com.com" className="contact__button">
                            Write Me{' '}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>
                        <h3 className="contact__card-title">WhatsApp</h3>
                        <span className="contact__card-data">+2547-059-599-986</span>
                        <a href="https://api.whatsapp.com/send?phone=62214408789&text=Hello, more Information!" className="contact__button">
                            Write Me{' '}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                    <div className="contact__card">
                        <i className="bx bxl-messenger contact__card-icon"></i>
                        <h3 className="contact__card-title">Messenger</h3>
                        <span className="contact__card-data">user.fb123</span>
                        <a href="https://m.me/crypticalcoder" className="contact__button">
                            Write Me{' '}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className='contact__title'>Write me your Project</h3>
                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input 
                            type="text" 
                            name='name'
                            className="contact__form-input" 
                            placeholder='Insert Your Name'
                        />
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input 
                            type="email" 
                            name='email'
                            className="contact__form-input" 
                            placeholder='Insert Your Email'
                        />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Project</label>
                        <textarea 
                            name="project" 
                            cols='30' 
                            rows='10'
                            className='contact__form-input'  
                            placeholder='Write Your Project'
                        ></textarea>
                    </div>
                    <button href="#contact" className="button button--flex">
                        Send Message 
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill='none'
                            class='button__icon'
                        >
                            <path 
                                d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"
                                fill='var(--container-color)'
                            />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact