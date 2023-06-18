import React, { useState } from 'react'
import './Login.css'
import { LoginData } from '../../data/loginData';
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Login = () => {

    const [username, setUsername] = useState(null);
    const [pass, setPass] = useState(null);

    const handleLogin = (username, pass) => {
        return (username === LoginData.map((username) => username.username)) && (pass === LoginData.map((pass) => pass.pass)) ? '/' : '/'
    }


    return (
        <div className='login'>
          
            
       
            <div className="login-input">
                <div className="span">
                    <span>Login</span>
                </div>
                <div className="input">
                    <input className='text' placeholder='Email or username...' type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    <input className='text' placeholder='Passwork...' type="password" value={pass} onChange={e => setPass(e.target.value)} />
                </div>
                <a href={handleLogin(username, pass)} className="btn">Submit</a>
            </div>

            <div className="footer">
                <div className="social-links">
                    <img src={Github} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="blur footer-blur-1"></div>
            <div className="blur footer-blur-2"></div>
        </div>
    )
}

export default Login