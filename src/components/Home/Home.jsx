import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'


const Home = () => {

  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="home" id='home'>
      <div className="blur home-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? '165px' : '200px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}></motion.div>
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
            <span><NumberCounter preFix="+" start={100} end={140} delay={3}/></span>
            <span>expert coachs</span>
          </div>
          <div>
            <span><NumberCounter preFix="+" start={900} end={978} delay={3}/></span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span><NumberCounter preFix="+" start={0} end={50} delay={3}/></span>
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
        <a href='/login' className="btn" >Join Now</a>
        <motion.div
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={transition}
          className="heart-rate">
          <img src={Heart} alt=""></img>
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
          src={hero_image_back} alt="" className="hero-image-back" />

        <motion.div
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={transition}
          className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>

    </div>
  )
}

export default Home
