import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css'
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa'

const LoginSignup = ({ setIsAuthenticated }) => {
  const [action, setAction] = useState(''); 

  const registerLink = (e) => {
    e.preventDefault(); 
    setAction('active'); 
  }

  const loginLink = (e) => {
    e.preventDefault(); 
    setAction(''); 
  }


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log('Username:', username);
    console.log('Password:', password);
    
    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
      navigate('/admin');
    } else {
      setError('Yanlış kullanıcı adı veya şifre.');
    }
  };

  return (
    <div className="loginSignup">
      <div className={`wrapper ${action}`}>
        <div className="form-box login">
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder='Username' value={username}
                onChange={(e) => setUsername(e.target.value)} required />
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input type="password" placeholder='Password' value={password}
                onChange={(e) => setPassword(e.target.value)} required />
              <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />Remember me</label>
              <a href="#">Forgot password?</a>
            </div>
            <button type='submit'>Login</button>
            <div className="register-link">
              <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
            </div>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>

        <div className="form-box register">
          <form action="">
            <h1>Registration</h1>
            <div className="input-box">
              <input type="text" placeholder='Username' required />
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input type="email" placeholder='Email' required />
              <FaEnvelope className='icon' />
            </div>
            <div className="input-box">
              <input type="password" placeholder='Password' required />
              <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />I agree to the terms & conditions</label>
            </div>
            <button type='submit'>Register</button>
            <div className="register-link">
              <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;
