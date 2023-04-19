import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpend, setMenuOpend] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {
        (menuOpend === false && mobile === true) ?
          (<div style={{backgroundColor: 'var(--appColor)' , padding: '0.5rem' , borderRadius: '5px'}}
          onClick={() => setMenuOpend(true)}
          ><img src={Bars} alt="" style={{width: '1.5rem' , height: '1.5rem'}}/></div>) : (
            <ul className="header-menu">
              <li onClick={() => setMenuOpend(false)}>Home</li>
              <li onClick={() => setMenuOpend(false)}>Programs</li>
              <li onClick={() => setMenuOpend(false)}>Why us</li>
              <li onClick={() => setMenuOpend(false)}>Plans</li>
              <li onClick={() => setMenuOpend(false)}>Testimonials</li>
            </ul>
          )
      }
    </div>
  )
}

export default Header
