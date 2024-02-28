import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__bg">
            <div className="footer__container container grid">
                <div>
                    <h1 className="footer__title">Adi7y.</h1>
                    <span className="footer__subtitle">Frontend developer</span>
                </div>
                <ul className="footer__links">
                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>

                <div className="footer__socials">
                    <a href="https://www.linkedin.com/in/aditya-kumar-3514b5223/" target="_blank"
                        className="footer__social">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>

                    <a href="https://www.instagram.com/iaditya0714/" target="_blank" className="footer__social">
                        <i className="uil uil-instagram"></i>
                    </a>

                    <a href="https://twitter.com/iaditya_0714" target="_blank" className="footer__social">
                        <i className="uil uil-twitter-alt"></i>
                    </a>
                </div>
            </div>
            <p className="footer__copy">&#169; adi7y. All right reserved</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer
