import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

const Home = () => {
  return (
    <div className="home">
      <div className="blur home-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>

        {/* header */}
        <div className="home-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+ 140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>

        {/* home button */}
        <div className="home-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>

      </div>

      <div className="right-h">
        <buttons className="btn">Join Now</buttons>
        <div className="heart-rate">
          <img src={Heart} alt=""></img>
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        <div className="calories">
          <img src={Calories} alt=""/>
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
