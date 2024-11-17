import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section">
        <h2 className="section__title">
          Get In <span>Touch</span>
        </h2>
        <div className="contact__containter container grid">
          <div className="contact__data">
            <h3 className="contact__title">Don't be Shy !</h3>
            <p className='contact__description'>
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            <div className="contact__info">
              <div className="info__item">
                <FaEnvelopeOpen className="info__icon"/>
                <div>
                  <span className="info__title">Mail Me</span>
                  <h4 className="info__desc">@gamil.com</h4>
                </div>
              </div>

              <div className="info__item">
                <FaPhoneSquareAlt className="info__icon"/>
                <div>
                  <span className="info__title">Call Me</span>
                  <h4 className="info__desc">+886 000000000</h4>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              <a href="https://facebook.com" className="contact__social-link">
                <FaFacebookF />
              </a>
            </div>

          </div>

          <form className="contact__form">
            <div className="form__input-group">
              <div className="form__input-div">
                <input type="text" className="form__control" placeholder='Your Name'/>
              </div>
              <div className="form__input-div">
                <input type="text" className="form__control" placeholder='Your Email'/>
              </div>
              <div className="form__input-div">
                <input type="text" className="form__control" placeholder='Your Subject'/>
              </div>
            </div>

            <div className="form__input-div">
                <textarea type="text" className="form__control textarea" placeholder='Your Message'></textarea>
            </div>

            <button className='button'>
              Send Message
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
          </form>
        </div>
      </section>
  )
}

export default Contact


