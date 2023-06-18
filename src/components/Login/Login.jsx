import React, { useState } from 'react'
import './Login.css'
import { LoginData } from '../../data/loginData';

const Login = () => {

    const [username, setUsername] = useState(null);
    const [pass, setPass] = useState(null);

    const handleLogin = (username, pass) => {
        return (username == LoginData.map((username) => username.username)) && (pass == LoginData.map((pass) => pass.pass)) ? '/' : '/home'
    }


    return (
        <div className='login'>
            {/* <div className="login-input">
                <span>Login</span>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                <input type="password" value={pass} onChange={e => setPass(e.target.value)} />
                <a href={handleLogin(username, pass)}>Submit</a>
            </div> */}

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
        </div>
    )
}

export default Login