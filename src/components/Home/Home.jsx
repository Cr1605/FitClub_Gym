import React from 'react'
import './Home.css'
import Header from '../Header/Header'

const Home = () => {
  return (
    <div className="home">
      <div className="left-h">
        <Header/>
        <div className="the-best-ad">
          <div></div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
      </div>

      <div className="right-h">
        right home
      </div>
    </div>
  )
}

export default Home
