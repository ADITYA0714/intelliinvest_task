import React from 'react'
import "./banner.css"
const Banner = () => {
  return (
    <>
    <section>
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"/>

    <div className="banner__container">
        <div className="banner__box">

            <div className="banner__box__left">
                <h1 className="banner__title">Get the best product at your home</h1>
                <input className='banner__box-search' type="text" value="" placeholder="Search your favorite product" />
            </div>

            <div className="banner__box__middle">
                <img id="banner__box__img" src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1380&t=st=1709048806~exp=1709049406~hmac=aa8b43853950fb1b5f7e678cd0b5d557cf2d393c907d834272b121eb07a2ea7a" alt="" srcset=""/>
            </div>

            <div className="banner__box__right">
                
                <div className="banner__social">

                    <a href="https://www.linkedin.com/in/aditya-kumar-3514b5223/" className="home__social-icon"
                        target="_blank" rel="noreferrer">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>

                    <a href="https://www.instagram.com/iaditya0714/" className="banner__social-icon" target="_blank"
                        rel="noreferrer">
                        <i className="uil uil-instagram"></i>
                    </a>

                    <a href="https://github.com/ADITYA0714" className="home__social-icon" target="_blank" rel="noreferrer">
                        <i className="uil uil-github-alt"></i>
                    </a>

                </div>
            </div>
        </div>

    </div>
    </section>
</>
  )
}

export default Banner
